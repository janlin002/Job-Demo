import React from 'react'

function SVG(){
  return (
    <>
      {/* 圓 */}
      <svg width="200" height="200" viewBox="0 0 400 400">
        <circle cx="200" cy="200" r="200" fill="#f00" stroke="none"></circle>
      </svg>
      {/* <div></div> */}
      {/* 正方形 */}
      <svg width="300" height="200">
        <rect width="100%" height="100%" fill="blue" />
      </svg>
      {/* <div></div> */}
      {/* 正方形+圓形 */}
      <svg width="300" height="200">
        <rect width="100%" height="100%" fill="balck" />
        <circle cx="50" cy="50" r="50" fill="white"></circle>
      </svg>
      {/* <div></div> */}
      {/* 正方形 */}
      <svg width="200" height="200">
        <rect x="50" y="60" width="100" height="100" fill="#f06" />
      </svg>
      {/* <div></div> */}
      <svg width="200" height="200">
        <circle cx="200" cy="200" r="200" fill="#f00" stroke="none"></circle>
      </svg>
      {/* viewBox */}
      <svg width="200" height="200" viewBox="0 0 400 400">
        <circle cx="200" cy="200" r="200" fill="#f00" stroke="none"></circle>
      </svg>
      {/* 橢圓 */}
      <svg width="200" height="200" viewBox="0 0 400 400">
        <ellipse cx="200" cy="120" rx="150" ry="100" fill='red'></ellipse>
      </svg>
      {/* 直線 */}
      <svg width="100" height="100">
        <rect width="100%" height="100%" fill="balck" />
        <line x1="10" y1="100" x2="100" y2="20" stroke="red" strokeWidth="3px"></line>
      </svg>

    </>
  )
}

export default SVG

/**
 * cx - cx和cy是偏移的属性，右上角為0(橫向偏移)
 * cy - cx和cy是偏移的属性，右上角為0(直向偏移)
 * r - 半徑
 * fill - 填滿的顏色
 *
 * x - 横坐标
 * y - 纵坐标
 * width - 寬
 * height - 高
 *
 * viewBox (min-x, min-y, width ,height)
 *
 * line标签中的x1，y1，x2，y2属性分别代表起点横坐标、起点纵坐标、终点横坐标、终点纵坐标。
 */