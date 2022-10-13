import React from 'react'
import './style.css'

const BsColTable = () =>{
  return (
  // <table>
  //   <thead>
  //     <tr>
  //       <th scope="col">The table header</th>
  //       <th scope="col">
  //         類型
  //       </th>
  //       <th scope="col">
  //         交易摘要
  //       </th>
  //       <th scope="col">
  //         起案人員
  //       </th>
  //       <th scope="col">
  //         編輯時間
  //       </th>
  //       <th scope="col">
  //         功能
  //       </th>
  //     </tr>
        
  //   </thead>
  //   <tbody>
  //     <tr>
  //       <td>The table body</td>
  //       <td>with two columns</td>
  //       <td>The table body</td>
  //       <td>with two columns</td>
  //       <td>The table body</td>
  //       <td>with two columns</td>
  //     </tr>
  //     <tr>
  //       <td>The table body</td>
  //       <td>with two columns</td>
  //       <td>The table body</td>
  //       <td>with two columns</td>
  //       <td>The table body</td>
  //       <td>with two columns</td>

  //     </tr>
        
    //   </tbody>
    // </table>
    <table>
      <tr>
        <td className="col-2">First name</td>
        <td className="col-3">Last name</td>
        <td className="col-3">Last name</td>
        <td className="col-4">Last name</td>
      </tr>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>John</td>
        <td>Doe</td>
      </tr>
      <tr>
        <td>Jane</td>
        <td>Doe</td>
        <td>John</td>
        <td>Doe</td>
      </tr>
    </table>
  )
}

export default BsColTable