import React, { useState } from 'react'

import { useSpring } from 'react-spring'

const Index = () => {
  const [open, setOpen] = useState(false)
  const props = useSpring({ width: open ? 240 : 40 })

  return (
    // <animated.div
    //   style={{
    //     lineHeight: '40px',
    //     textAlign: 'center',
    //     height: 40,
    //     backgroundColor: 'azure',
    //     border: '1px solid darkslategrey',
    //     borderRadius: 8,
    //     cursor: 'pointer',
    //     ...props,
    //   }}
    //   onClick={() => setOpen((prev) => !prev)}
    // >
    //   {props.width.to((x) => x.toFixed(0))}
    // </animated.div>
    <div>123</div>
  )
}

export default Index