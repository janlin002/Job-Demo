import React, { useState } from 'react'
// import { useHistory, Link } from 'react-router-dom';
import QRCodeSVG from 'qrcode.react'

const QRcode = () =>{
  const [inputTxt, setInputTxt] = useState('')
  //   const history = useHistory()

  //   console.log(inputTxt, 'inputTxt')
  return (
    <>
      <input type='text' 
        onChange={(e)=>setInputTxt(e.target.value)}/>
      <QRCodeSVG 
        value={inputTxt}
        renderAs='svg'
        size={200}
        bgColor="black"
        fgColor="red"
        level="H"
        includeMargin="true"
      />
      <button>
        <a href={inputTxt}>
            點擊進入
        </a>
      </button>
    </>
      
  )
}

export default QRcode