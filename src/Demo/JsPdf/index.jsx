import React from 'react'
import handleClickPdfs from './pdf'

const JsPdf = () => {
  const handleClickPdf = () =>{
    handleClickPdfs()
  }
  return (
    <button type="button" onClick={()=>handleClickPdf()}>
        點擊列印
    </button>
  )
}

export default JsPdf