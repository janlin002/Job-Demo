import React from 'react'
import dayjs from 'dayjs' 

const Dayjs =()=>{
  return (
    <>
      <h1>當前日期</h1>
      <div>{dayjs(new Date()).format("YYYY年MM月DD日")}</div>
      <h1>當前日期往前翻兩年</h1>
      <div>{dayjs(new Date()).subtract(2, 'year').format("YYYY年MM月DD日")}</div>
      <h1>設定時間 - 會按格式走</h1>
      <div>{dayjs("2021-01-02").format("YYYY年MM月DD日") }</div>

      <div>{dayjs().set('month', 3).month()}</div>
      {/* <div>{dayjs().add(1, 'year')}</div> */}
      <div>{dayjs().isBefore(dayjs())}</div>
    </>
  )
}
export default Dayjs