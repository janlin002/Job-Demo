import React, { useState } from 'react';
// import { useHistory, Link } from 'react-router-dom';
import QRCode from 'qrcode.react'

const QRcode = () =>{
  const [inputTxt, setInputTxt] = useState('')
  //   const history = useHistory()

  //   console.log(inputTxt, 'inputTxt')
  return (
    <>
      <input type='text' 
        onChange={(e)=>setInputTxt(e.target.value)}/>
      <QRCode 
        value={inputTxt}
        size={200}
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