import React from 'react'
import styled from 'styled-components'

const MyTest = styled.div`
padding: 20px 0 0 20px;
font-size: 48px;
color: ${props => (props.skyblue ? 'skyblue' : 'black')};
`

const index = () => {
  return (
    <MyTest skyblue={true}>
        123
    </ MyTest>
  )
}

export default index