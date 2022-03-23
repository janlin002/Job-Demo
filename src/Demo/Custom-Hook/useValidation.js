import React, { useState } from 'react';

const useValidation = (initValue = '') =>{
  const [customId, setCustomId] = useState('')

  const checkIsVIP = (values) =>{
    if(values.indexOf('1') !== -1){
      return setCustomId('是')
    }
    return setCustomId('不是')
  }

  return [customId, checkIsVIP]
}

export default useValidation

// 顧客id，確認使否為會員