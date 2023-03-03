import React from 'react'

import { Button } from '@react-email/button'
import { Html } from '@react-email/html' 

const Index = () => {
  return (
    <Html lang="en">
      <Button href="https://123davidbill@gmail.com" style={{ color: '#61dafb' }}>
      Click me
      </Button>
    </Html>
    
  )
}

export default Index