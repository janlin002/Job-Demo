```js
import { useState, useEffect } from 'react'

// 預先給10分鐘後的timestamp,再與當下的時間相減,獲得剩餘的timestamp
const useCountdownTimer = (initialSeconds = 0) => {
  const [endPointTime, setEndPointTime] = useState(
    Date.now() + initialSeconds * 1000,
  ) // timestamp ms
  const [remainTime, setRemainTime] = useState(initialSeconds) // seconds

  useEffect(() => {
    let timer
    // 目前認為計時器不需要這麼頻繁的抓時間, 所以效能考慮給定500ms抓一次, 有可能會因為抓的頻率不快跟js延遲的關係造成
    // 某些時候的秒數跳得比較快,未來若有準確的需求可以將秒數縮短，但是目前討論後認為這個秒數跳動的準確性不是那麼重要,
    // 因為抓的是timestamp, 雖然在秒數顯示上稍微不穩定,但一定會在準確的時間內完成倒數
    if (remainTime > 0) {
      timer = setInterval(
        () => {
          const newRemainTime = endPointTime - Date.now()
          const formatSec = Math.ceil(newRemainTime / 1000)
          setRemainTime(formatSec <= 0 ? 0 : formatSec)
        },
        500,
      )
    }

    if (remainTime <= 0) clearInterval(timer)

    return () => {
      clearInterval(timer)
    }
  }, [remainTime])

  const setCountdownTimer = (resetTime) => {
    setEndPointTime(Date.now() + resetTime * 1000)
    setRemainTime(resetTime)
  }
  return [remainTime, setCountdownTimer]
}

export default useCountdownTimer
```