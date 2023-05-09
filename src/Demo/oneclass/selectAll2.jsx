import React from 'react'

import {
  styled,
  Box,
  Popper,
  Checkbox,
  TextField,
  Autocomplete,
  Divider,
  ClickAwayListener,
//   AutocompleteCloseReason
} from "@mui/material"
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank"
import CheckBoxIcon from "@mui/icons-material/CheckBox"
  
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
const checkedIcon = <CheckBoxIcon fontSize="small" />

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 }
]

const PopperStyledComponent = styled(Popper)(({ theme }) => ({
  border: `1px solid ${
    theme.palette.mode === "light" ? "rgba(149, 157, 165, 0.2)" : "rgb(1, 4, 9)"
  }`
}))

const SelectAll2 = () => {

  const [value, setValue] = React.useState([])
  const [checkAll, setCheckAll] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  console.log(checkAll, 'checkAll')
  
  const checkAllChange = (event) => {
    setCheckAll(event.target.checked)
    if (event.target.checked) {
      setValue(top100Films)
    } else {
      setValue([])
    }
  }

  const handleClickAway = (e) => {
    console.log("Handle Click Away")
    setOpen(false)
  }
  return (
    <div>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box>
          <Autocomplete
            multiple
            disableCloseOnSelect
            limitTags={3}
            id="checkboxes-tags-demo"
            options={top100Films}
            value={value}
            open={open}
            onChange={(event, newValue, reason) => {
              if (reason === "selectOption") {
                setValue(newValue)
              } else if (reason === "removeOption") {
                setCheckAll(false)
                setValue(newValue)
              } else if (reason === "clear") {
                setValue([])
                setCheckAll(false)
              }
            }}
            onClose={(e, reason) => {
              console.log("On Close: ", reason)
              if (reason === "escape") {
                setOpen(false)
              }
            }}
            onOpen={() => {
              setOpen(true)
            }}
            PopperComponent={(param) => (
              <PopperStyledComponent {...param}>
                <Box {...param} />
                <Divider />
                <Box
                  sx={{
                    backgroundColor: "white",
                    height: "45px",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  <Checkbox
                    checked={checkAll}
                    onChange={checkAllChange}
                    id="check-all"
                    sx={{ marginRight: "8px" }}
                    onMouseDown={(e) => e.preventDefault()}
                  />
                  Select All
                </Box>
              </PopperStyledComponent>
            )}
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected || checkAll}
                />
                {option.title}
              </li>
            )}
            style={{ width: "100%" }}
            renderInput={(params) => (
              <TextField {...params} label="Checkboxes" placeholder="Favorites" />
            )}
          />
        </Box>
      </ClickAwayListener>
    </div>
  )
}

export default SelectAll2
