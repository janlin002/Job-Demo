import React from 'react'

import HandSign from './handWrite'

const Index = () => {
  return (
    <div>
      <label>請問你使用什麼瀏覽器:
        <input list="browsers" name="myBrowser" />
      </label>

      <datalist id="browsers">
        <option value="Chrome" />
        <option value="Firefox" />
        <option value="Internet Explorer" />
        <option value="Opera" />
        <option value="Safari" />
      </datalist>

      <HandSign />
    </div>
   
  )
}

export default Index