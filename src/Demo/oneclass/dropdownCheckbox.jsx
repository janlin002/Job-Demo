import React from 'react'
import { Select, Tag } from 'antd'

const { Option } = Select

const DropdownCheckbox = () => {
//   const myTagRender = () => {
//     return (
//       <Tag color="#09091a">123</Tag>
//     )
//   }
      
  return (
    <div style={{ width: '200px' }}>
      <Select 
        onChange 
        style={{ width: '200px' }}
        mode="tags"
        showArrow="true"
        // tagRender={myTagRender}
      >
        <Option value="apple">apple</Option>
        <Option value="lemon">lemon</Option>
        <Option value="orange">orange</Option>
      </Select>
    </div>
    
  )
}

export default DropdownCheckbox
