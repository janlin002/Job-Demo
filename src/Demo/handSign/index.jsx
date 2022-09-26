import React, { useState, useRef } from "react";
import SignatureCanvas from 'react-signature-canvas'

function HandSign() {
    const signature= useRef(null)

    console.log(signature, 'signature')
    return (
        <>
        <SignatureCanvas 
            penColor='green'
            canvasProps={{width: 500, height: 200, className: 'sigCanvas'}}
            backgroundColor="rgb(0,0,0)"
            ref={signature}
        />
        <button type="button" onClick={()=>signature.current.clear()}>clear</button>
        </>
        
    )
    
}

export default HandSign;

// https://molly1024.medium.com/%E5%9C%A8react%E5%B0%88%E6%A1%88%E4%BD%BF%E7%94%A8canvas%E7%B0%BD%E5%90%8D%E6%A1%86-how-to-put-signature-field-in-react-project-9ad70a91541