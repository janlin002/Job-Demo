import React from 'react';

const ClipPath = () =>{
  return (
    <>
      <svg height="0" width="0"> 
        <defs> 
          <clipPath id="svgPath">
            <path id="heart" d="M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z" />
          </clipPath> 
        </defs> 
      </svg>
      {/* <img className = 'clipImg' src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" /> */}
    </>

  )
}

export default ClipPath