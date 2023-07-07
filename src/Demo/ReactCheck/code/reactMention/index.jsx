import React, { useState } from 'react'
import { Mention, MentionsInput } from "react-mentions"

import style from "./style.module.css"
import data from './userData'

const Index = () => {
  const [result, setResult] = useState("")
  return (
    <>
      <h1>Single Line Input</h1>
      <MentionsInput
        classNames={style}
        singleLine
        value={result}
        onChange={(e) => setResult(e.target.value)}
      >
        <Mention className={style.mentions__mention} data={data} />
      </MentionsInput>

      <h1>Multi Line Input</h1>
      <MentionsInput
        classNames={style}
        value={result}
        onChange={(e) => setResult(e.target.value)}
      >
        <Mention className={style.mentions__mention} data={data} />
      </MentionsInput>

      <h1>Multiple mention Trigger Method</h1>
      <MentionsInput
        classNames={style}
        value={result}
        onChange={(e) => setResult(e.target.value)}
      >
        <Mention className={style.mentions__mention} data={data} />
        <Mention className={style.mentions__mention} data={data} trigger={":site"} />
        <Mention className={style.mentions__mention} data={data} trigger={"?email"} />
      </MentionsInput>
    </>
  )
}

export default Index

// https://blog.openreplay.com/building-a-comment-form-with-react-mentions/