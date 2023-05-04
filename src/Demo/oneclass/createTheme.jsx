import { createTheme } from '@mui/material'

const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: '50px',
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        // input: {
        //   paddingTop: '6px !important',
        // },
        inputRoot: {
          // paddingTop: '3px',
          overflow: 'hidden',
          // '& .MuiChip-root': {
          //   maxWidth: '60%',
          // },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: '30px',
        },
      },
    },
  }
})

export default theme