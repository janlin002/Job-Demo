import React, { useState } from 'react'
import TextField from "@material-ui/core/TextField"
import Autocomplete, {
  createFilterOptions
} from "@mui/material/Autocomplete"
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank"
import CheckBoxIcon from "@material-ui/icons/CheckBox"
import { Checkbox } from "@material-ui/core"

const options = [
  { label: "foo", value: "foo" },
  { label: "bar", value: "bar" },
  { label: "jar", value: "jar" },
  { label: "nar", value: "nar" },
  { label: "mar", value: "mar" },
  { label: "far", value: "far" }
]

const SelectAll = () => {
  const [selectedOptions, setSelectedOptions] = useState([])
  const getOptionLabel = item => `${item.label}`

  //   console.log(getOptionLabel(options), 'getOptionLabel')
  //   const getOptionDisabled = option => option.value === "foo"
  const handleToggleOption = selectedOptions =>
    setSelectedOptions(selectedOptions)
  const handleClearOptions = () => setSelectedOptions([])
  const handleSelectAll = isSelected => {
    if (isSelected) {
      setSelectedOptions(options)
    } else {
      handleClearOptions()
    }
  }

  const allSelected = options.length === selectedOptions.length
  const handleToggleSelectAll = () => {
    handleSelectAll && handleSelectAll(!allSelected)
  }

  const handleChange = (event, selectedOptions, reason) => {
    if (reason === "select-option" || reason === "remove-option") {
      if (selectedOptions.find(option => option.value === "select-all")) {
        handleToggleSelectAll()
      } else {
        handleToggleOption && handleToggleOption(selectedOptions)
      }
    } else if (reason === "clear") {
      handleClearOptions && handleClearOptions()
    }
  }
  const optionRenderer = (option, { selected }) => {
    const selectAllProps =
      option.value === "select-all" // To control the state of 'select-all' checkbox
        ? { checked: allSelected }
        : {}
    return (
      <>
        <Checkbox
          color="primary"
          icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
          checkedIcon={<CheckBoxIcon fontSize="small" />}
          style={{ marginRight: 8 }}
          checked={selected}
          {...selectAllProps}
        />
        {getOptionLabel(options)}
      </>
    )
  }
  const inputRenderer = params => (
    <TextField {...params} label='Select complex values' placeholder='Placeholder for textbox' />
  )
  const getOptionSelected = (option, anotherOption) =>
    option.value === anotherOption.value
  const filter = createFilterOptions()
    
  return (
    <Autocomplete
      multiple
      size="small"
      limitTags='5'
      options= {options}
      value={selectedOptions}
      disableCloseOnSelect
      getOptionLabel={(option) => option.label}
      getOptionSelected={getOptionSelected}
      filterOptions={(options, params) => {
        const filtered = filter(options, params)
        return [{ label: 'Select all', value: "select-all" }, ...filtered]
      }}
      onChange={handleChange}
      renderOption={optionRenderer}
      renderInput={inputRenderer}
    />
  )
}

export default SelectAll
