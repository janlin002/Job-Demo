import React from 'react'
import { Partytown } from '@builder.io/partytown/react'

const Index = () => {
  return (
    <>
      <Partytown debug={true} forward={['dataLayer.push']} />
      <script
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html: '/* Inlined Third-Party Script */',
        }}
      />
    </>
  )
}

export default Index

// https://partytown.builder.io/
// Github: https://github.com/BuilderIO/partytown

// <script>...</script> -> <script type="text/partytown">...</script>
// [前端效能調校：使用 Partytown 將笨重的 JavaScript 放到 Web Workers 執行](https://blog.miniasp.com/post/2023/01/27/Partytown-Run-Third-Party-Scripts-From-Web-Worker)