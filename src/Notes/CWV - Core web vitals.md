# CWV - Core web vitals(網站核心指標)

## CWV
根據 Google 的說法，Core web vitals 是長期下來根據大量使用者體驗所制定的指標。

## CWV 三大指標
- LCP - Largest Contentful Paint
- FID - First Input Delay
- CLS - Cumulative Layout Shift


## LCP - Largest Contentful Paint
**顯示最大內容元素所需時間**

在 LCP 之前有另外一個指標 First Contentful Paint (FCP)，FCP 針對網站中的第一個元素的載入，但如果只針對第一元素，對使用者來說仍然是看不到重要的內容的，因此 Google 針對這樣的情形另外制定了一個全新的指標 – LCP。

LCP 優化:
1. 減少伺服器回應時間: CDN, script async defer 標籤
2. 排除禁止轉譯的資源: 避免JS, CSS 阻塞
3. 加快資源載入的時間: 圖片優化，壓縮文字黨，優先仔入部分內容，use service worker(一種可以讓你在單獨一個thread上運行程式碼的方式)
4. 避免使用客戶端渲染(CSR)

## FID - First Input Delay
**首次輸入延遲**

輸入延遲 (Input Delay) 通常發生於瀏覽器的***主執行序***過度繁忙，而導致頁面內容無法正確地與使用者進行互動。舉例來說，可能瀏覽器正在載入一支相當肥大的 JavaScript 檔案

FID 優化:
1. 減少JavaScript運作的時間
2. 降低網站的request數並降低檔案大小
3. 減少主執行序的工作


## CLS - Cumulative Layout Shift
**累計版面配置轉移**

CLS 優化:
1. 透過 CSS 語法，為網頁中的元素提供預留的空位，避免載入後導致頁面中的內容移動
2. 透過 <preload> 的方式，將會導致頁面內容移動的元素提前載入 (字體、圖片等)
    
    

https://awoo.ai/zh-hant/blog/core-web-vitals-guide/#%E4%BB%80%E9%BA%BC%E6%98%AF_Core_Web_Vitals%EF%BC%9F

