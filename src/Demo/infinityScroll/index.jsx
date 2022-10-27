import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import CircularProgress from '@material-ui/core/CircularProgress'

const InfiniteScrollWrapper = styled.div`
  height: ${(props) => props.$height}px;
  overflow: auto;
`

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
`

// const StyledCircularProgress = styled(CircularProgress)`
//   color: primary;
//   /* ${(props) => (props.theme.color.primary)}; */
//   margin: 40px 0px;
// `

const InfiniteScroll = ({
  height, onScrollBottom, isLoading, children,
}) => {
  const infiniteScrollRef = useRef()
  
  const handleOnScroll = () => {
    const containerElem = infiniteScrollRef.current
    if (containerElem) {
      const scrollPos = containerElem.scrollTop + containerElem.clientHeight
      const divHeight = containerElem.scrollHeight
  
      // 滾過的距離加上自己元素的高度，大於等於可滾動範圍的高度
      if ((scrollPos >= divHeight) && onScrollBottom) {
        onScrollBottom()
      }
    }
  }
  
  return (
    <InfiniteScrollWrapper
      ref={infiniteScrollRef}
      $height={height}
      onScroll={handleOnScroll}
    >
      {children}
      {isLoading && (
        <Loading>
          {/* <StyledCircularProgress /> */}
          123
        </Loading>
      )}
    </InfiniteScrollWrapper>
  )
}

InfiniteScroll.propTypes = {
  // 元件高度
  height: PropTypes.number,
  // 內容
  children: PropTypes.instanceOf(PropTypes.element).isRequired,
  //載入中狀態
  isLoading: PropTypes.bool,
  //滑動到底部的 callback
  onScrollBottom: PropTypes.func,
}
    
InfiniteScroll.defaultProps = {
  height: 500,
  isLoading: false,
  onScrollBottom: undefined,
}

const Index = () => {
  const [page, setPage] = useState(1)

  return (
    <InfiniteScroll
      height={250}
      isLoading={true}
      onScrollBottom={() => {
        // eslint-disable-next-line no-undef
        if (!isLoading) {
          setPage((prev) => prev + 1)
        }
      }}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti iste dolorum a sint hic consequuntur nisi sunt mollitia cum. Aut deserunt perferendis modi perspiciatis commodi, possimus architecto deleniti culpa pariatur?
    </InfiniteScroll>
  )
}

export default Index

// https://ithelp.ithome.com.tw/articles/10275504?sc=rss.iron