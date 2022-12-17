import React from 'react'

import ('./styles.css')

const Index = () => {
  return (
    <>
      <div className="outer">
        I am a paragraph
        <div className="middle">
            I am a paragraph
          <div className="inner">
            I am a paragraph
            <div>
              <img style={{ height: '100px' }} src="https://cf.shopee.tw/file/423d7783def285e44a156b93a37a9813" />
            </div>
          </div>
        </div>
      </div>

      <div className="outer-rem">
        I am a paragraph - rem
        <div className="middle-rem">
        I am a paragraph - rem
          <div className="inner-rem">
        I am a paragraph - rem
            <img style={{ height: '100px' }} src="https://cf.shopee.tw/file/423d7783def285e44a156b93a37a9813" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Index