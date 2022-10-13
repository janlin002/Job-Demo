import React, { useState } from 'react'
import photo from '../../assets/image/photo1.png'

const Print = () =>{
  const [photoInfo, setPhotoInfo] = useState('')
  const [photoBlob, setPhotoBlob] = useState({})

  console.log(photoBlob, 'photoBlob')
  const handlePrintClick = ()=>{
    window.print()
  }

  const getBase64 = async(event)=> {
    const reader = new FileReader()
    const file = event.target.files[0]
    
    // reader.readAsDataURL(file);

    if(file){
      reader.readAsDataURL(file)
    }

    reader.onload = function (e) {
      setPhotoInfo(e.target.result)
    }

    const base64Response = await fetch(photoInfo)
    const blob = await base64Response.blob()

    setPhotoBlob(blob)
  }

  function BlobToBase64(blob, callback){
    const reader = new FileReader()
    reader.readAsDataURL(blob)
    reader.onload = function (e) {
      callback(e.target.result)
    }
  }

  function preView(){
    let reader    = new FileReader()

    // getImageBlob( url , function(blob){
    //   reader.readAsDataURL(blob);
    // });

    reader.onload = function() {
      var img = document.createElement("img")
      img.src = photoBlob
      document.body.appendChild(img)
    }
  }

  return (
    <>
      <button onClick={()=>handlePrintClick()}>列印</button>
      <a href={photo} download>
        <button style={{ color: 'black' }}>下載截圖</button>
      </a>

      <div className='mt-4'>
        <input 
          type='file'
          // accept=".jpg, .png"
          id='fileName'
          name='fileName'
          onChange={(e)=>getBase64(e)}
        />
        <label className='custom-file-label' htmlFor='fileName'>
          選取檔案
        </label>

        <button type="button" onClick={preView()}>預覽</button>
        <img id="img" src="" alt="" />
        
        {/* <a href={photoInfo} download> */}
        <button onClick={()=>window.print(photoBlob)}>列印圖片</button>
        {/* </a> */}
        <a download='圖片.png' href={photoInfo}>Download</a>
      </div>

      <div>參考資源: https://www.w3schools.com/tags/att_a_download.asp</div>
    </>
  )
}

export default Print
