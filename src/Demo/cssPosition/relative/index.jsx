import React from 'react'

import ('./style.css')

const Index = () => {
  return (
    <div className="relative">
      <div className="item1">1</div>
      <div className="item2">2</div>
      <div className="item3">3</div>
      <div className="item4">4</div>
      <div className="item5">5</div>
      <div className="item6">6</div>
      <div className="item7">7</div>
      <div className="item8">8</div>
      <div className="item9">9</div>
      <div className="item10">10</div>
      <div className="item11">11</div>
      <div className="item12">12</div>
      <div className="item13">13</div>
      <div className="item14">14</div>
    </div>
  )
}

export default Index

/**
 * relative 會再以元素的原始位置為基礎，做「相對的]調整
 * 後面的 position: relative 會改到前面的位置，如果想要換上來需要加上 z-index: 1
 * 
 * 影片教學: https://www.youtube.com/watch?v=Rukgrh1HlZg
 */