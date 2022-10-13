import React from 'react'
import Plx from "react-plx"

const ReactPlx = () =>{
  const parallaxData = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 1,
          endValue: 2,
          property: "scale",
        },
      ],
    },
  ]
  
  return (
    <Plx
      className="MyAwesomeParallax" parallaxData={parallaxData}
    >
      <div>123</div>
    </Plx>
  )
}

export default ReactPlx