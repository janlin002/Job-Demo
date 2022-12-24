import React from 'react'

import ('./styless.css')

const Index = () => {
  return (
    <div className='absolute'> 
      <div className="a">
        a
        <div className="b">
            b
          <div className="c">
            c
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index

/**
 * absolue 特性:
 * 1. 會在原本的位置抽出並形成新的一層
 * 2. 如果有使用 top left right bottom 會根據父曾是否有使用 relative absolute fixed 去決定位置如果父曾沒有設置的話，會繼續往父父層找，最後會找到 body
 * 3. 找定位的這個機制，只會向上找到就會停止，也就是說找到 relative absolute fixed 就會停止，反之就是找到 body
 * 
 * 和fixed不同的是，他的定位會是 視窗 位置，除非body設置relative absolute fixed
 * 
 * 影片教學: https://www.youtube.com/watch?v=JOdZdHnuGmM&t=7s
 */