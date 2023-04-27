/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Select as AntSelect, Checkbox } from 'antd'
import _ from 'lodash'
import PropTypes from 'prop-types'
import './style.css'

const DropdownWithCheckbox = () => {
  const [value, setValue] = useState()

  const options = [
    {
      label: '1',
      value: '1'
    },
    {
      label: '2',
      value: '2'
    },
    {
      label: '3',
      value: '3'
    },
    {
      label: '4',
      value: '4'
    },
    {
      label: '5',
      value: '5'
    }
  ]

  const CustomOption = (optionItem) =>{
    const optionList = [
      {
        label: '0',
        value: 'ALL'
      },
      ...optionItem,
    ]

    const newOptions = optionList.map((item, index)=>(
      <Option value={item.value} key={index}>
        <TextWithCheckbox checked={value && value.includes(item.value)}>
          {item.label}
        </TextWithCheckbox>
      </Option>
    ))

    return newOptions
  }

  console.log(value, 'value')
  return (
    <div>
      <CustomSelect
        value={value}
        onChange={(newValue) => setValue(newValue)}
        error={false}
        mode="multiple"
      >
        {CustomOption(options)}
      </CustomSelect>
    </div>
    
  )
}

const TextWithCheckbox = (props) => {
  return (
    <div>
      <Checkbox checked={props.checked} />
      {props.children}
    </div>
  )
}

const CustomSelect = ({
  width = "normal",
  mode,
  error = false,
  children,
  ...props
}) => {
  return (
    <AntSelect
      style={{ minWidth: 200 }}
      optionLabelProp="label"
      mode={mode}
      showArrow="true"
      {...props}
    >
      {children}
    </AntSelect>
  )
}

export default DropdownWithCheckbox

DropdownWithCheckbox.propTypes = {
  mode: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}

TextWithCheckbox.propTypes = {
  props: PropTypes.instanceOf(Object).isRequired,
}
