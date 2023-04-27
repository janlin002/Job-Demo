import React, { useState } from 'react'
import { TreeSelect as Tree } from 'antd'

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
  },
]

const TreeSelect = () => {
  const { SHOW_PARENT } = Tree

  const [value, setValue] = useState([])
  const onChange = (newValue) => {
    console.log('onChange ', value)
    setValue(newValue)
  }

  const tProps = {
    treeData,
    value,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: 'Please select',
    style: {
      width: '70%',
    },
  }
  return (
    <Tree {...tProps} />
  )
}

export default TreeSelect
