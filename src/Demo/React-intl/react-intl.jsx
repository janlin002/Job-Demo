import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl'
import { useDispatch } from 'react-redux'
import { changeLang } from '../../Redux/action'

function ReactIntl(){
  const [lang, setLang] = useState('en')
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <FormattedMessage
          id="app.header"
          defaultMessage="Edit src/App.js and save to reload."
        />
      </div>
      
      <select
        value={lang}
        onChange={(evt) => {
          setLang(evt.target.value);
          dispatch(changeLang(evt.target.value))
        }}
      >
        <option value="en">English</option>
        <option value="zh">中文</option>
        {/* <option value="fr">Français</option> */}
        <option value="jp">日本語</option>
      </select>
    </div>
  )
}
export default ReactIntl