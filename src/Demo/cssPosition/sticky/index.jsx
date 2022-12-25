import React from 'react'

import ('./styles.css')

const Index = () => {
  return (
    <section className="wrap">
      <div className="box">
        <div className="sticky">Sticky 1</div>
      </div>
      <div className="box">
        <div className="sticky">Sticky 2</div>
      </div>
      <div className="box">
        <div className="sticky">Sticky 3</div>
      </div>
      <div className="box">
        <div className="sticky">Sticky 4</div>
      </div>  
    </section>
  )
}

export default Index

/**
 * sticky 特性:
 * 1. 預設定位在父層空間
 * 2. 當視窗捲動到該物件位置時，會依據對該物件所設定的 top 值來讓該物件呈現 fixed 在視窗的效果
 * 3. 當物件呈現 fixed 效果時，其所能 fixed 的空間是該物件的父層空間
 * 4. 當視窗往下捲到超過 sticky 物件的父層空間時， sticky 物件則不會再呈現 fixed 的效果，而是會被捲離視窗範圍。
 * 
 * https://ithelp.ithome.com.tw/articles/10253500
 */