import * as React from 'react'
import PropTypes from 'prop-types'

// type WhenProps = {
//     children: React.ReactNode,
//     isTrue?: boolean,
//     limit?: number,
// };

const RenderWhen = ({ limit, isTrue, children }) => {
  const list = []

  if (isTrue !== true) {
    return null
  }

  React.Children.map(children, (child) => {
    const { isTrue: isChildTrue } = child?.props || {}

    if (isChildTrue === true && list.length < limit) {
      list.push(child)
    }
  })

  return (
    <>
      {list}
    </>
  )
}

RenderWhen.If = ({ children, isTrue }) => children

export default RenderWhen

RenderWhen.propTypes = {
  limit: PropTypes.number.isRequired,
  isTrue: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
}

RenderWhen.defaultProps = {
  limit: 1,
  isTrue: true,
}