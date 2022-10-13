import React from 'react'

function Colspan(){
  return (
    <div>
      <table border='1' cellPadding='5' style={{ border:"2px #26FF26 solid", textAlign:"center" }}>
        <tr>
          <td colSpan='123'>
                使用了 colspan 的欄位
          </td>
        </tr>
        <tr>
          <td>表格欄位</td>
          <td>表格欄位</td>
        </tr>
      </table>
    </div>
  )
}

export default Colspan

// 使用了「colspan="2"」讓第一行橫跨兩個欄位