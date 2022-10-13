import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  &:hover {
    background: gray;
    color: black;
  }
  &:active {
    background: green;
    color: white;
  }

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`

Button.defaultProps = {
  theme: {
    main: "palevioletred"
  }
}

const ThemeProviders = () =>{
  const theme = {
    main: "mediumseagreen"
  }

  return (
    <>
      <Button>Normal</Button>

      <ThemeProvider theme={theme}>
        <Button>themed</Button>
      </ThemeProvider>
    </>
  )
}

export default ThemeProviders