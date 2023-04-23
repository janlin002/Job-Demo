import React, { useState, useMemo } from 'react'
import { Button, Divider, Popover, Segmented, Tooltip } from 'antd'

const Popovers = () => {
  const text = <span>Title</span>
  const content = (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <a href="123">連結ㄧ</a>
            </td>
          </tr>
  		    <tr>
            <td>
              <a href="123">連結二</a>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  )
  const [showArrow, setShowArrow] = useState(true)
  const [arrowAtCenter, setArrowAtCenter] = useState(false)

  const mergedArrow = useMemo(() => {
    if (arrowAtCenter) return { pointAtCenter: true }
    return showArrow
  }, [showArrow, arrowAtCenter])

  return (
    <>
      <Popover placement="bottom" title={text} content={content} arrow={mergedArrow}>
        <Button>Bottom</Button>
      </Popover>

      <table>
        <thead>
          <tr>
            <th colSpan="2">The table header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The table body</td>
            <td>with two columns</td>
          </tr>
        </tbody>
      </table>

      <Tooltip placement="bottom" title={content}>
        <Button>Bottom</Button>
      </Tooltip>
    </>
  )
}

export default Popovers