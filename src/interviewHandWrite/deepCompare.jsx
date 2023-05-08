import React from 'react'

const DeepCompare = () => {

  const isEqual = (value, other) => {
    // Object 以外的型別都會在這裡return
    if (typeof value !== 'object' && typeof other !== 'object') {
      const isValueNaN = Number.isNaN(value)
      const isOtherNaN = Number.isNaN(other)

      console.log(isValueNaN, isOtherNaN)
      
      if (isValueNaN && isOtherNaN) {
        return true
      }
      
      return value === other
    }
      
    // null
    if (value === null && other === null) {
      return true
    }
      
    // 型別不相同
    if (typeof value !== typeof other) {
      return false
    }
      
    // 感覺多餘了??
    if (value === other) {
      return true
    }
      
    if (Array.isArray(value) && Array.isArray(other)) {
      if (value.length !== other.length) {
        return false
      }
      
      for (let i = 0; i < value.length; i++) {
        if (!isEqual(value[i], other[i])) {
          return false
        }
      }
      
      return true
    }
      
    if (Array.isArray(value) || Array.isArray(other)) {
      return false
    }
      
    if (Object.keys(value).length !== Object.keys(other).length) {
      return false
    }
      
    for (const [k, v] of Object.entries(value)) {
      if (!(k in other)) {
        return false
      }
      
      if (!isEqual(v, other[k])) {
        return false
      }
    }
      
    return true
  }

  console.log(isEqual(1, 2), 'isEqual')
  return (
    <div>
      DeepCompare
    </div>
  )
}

export default DeepCompare
