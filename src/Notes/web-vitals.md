# Rendering Pattern

## Web Vitals 分為三大類
1. 載入速度(Loading Performance)
    - Largest Contentful Paint (LCP)
    - First Contentful Paint (FCP)
    - Time to First Byte (TTFB)
2. 互動反應能力(Interactivity)
    - First Input Delay (FID)
    - Time to Interactive (TTI)
    - Total Blocking Time (TBT)
3. 視覺穩定性(Visual Stability)
    - Cumulative Layout Shift (CLS)
    - Speed Index (SI)

其中 LCP, FID, CLS 是三個較為重要代表各面向的核心指標(Core Web Vitals)

## 載入速度 - 目標是要評估網頁可以多快載入完成並且渲染好畫面。

### Largest Contentful Paint (LCP)
從網頁開始載入到最大面積的元素渲染(render)到畫面上所花的時間。


### First Contentful Paint (FCP)
從網頁開始載入到任何一個元素渲染到畫面上所花的時間。

### Time to First Byte (TTFB)
瀏覽器對伺服器發出請求(ex: http api request)後到收到回應資料(第一個 byte)所花的時間。

## 互動反應能力 - 目標是要評估網頁多快可以回應使用者的互動行為，例如按下按鈕之後多久會有反應。

## First Input Delay (FID)

使用者首次與網站互動，直到瀏覽器回應互動事件的時間差。這個指標會因為真實使用者首次互動行為而有所不同，所以只能實測(field)無法模擬測量(lab)。在開發階段因為沒有辦法實測，可以藉由優化有關聯性的 TBT 指標來協助改善 FID。

## Time to Interactive (TTI)
從網頁開始載入到長時間任務(long tasks)都已經結束而且可以回應使用者互動所花的時間。

> 長時間任務(long tasks)是指超過 50ms 的任務，可能是解析 HTML 建立 DOM Tree、解析 CSS 套用樣式、執行 JS 等。

## Total Blocking Time (TBT)
主執行緒被長時間任務(long tasks)阻塞的總時間，阻塞的時間是指長時間任務中超過 50ms 的時間(long task time - 50ms)，將每個 long task 阻塞時間做總和就是 TBT，這段時間被視為無法回應使用者互動的時間。

## 視覺穩定性 - 目標是要評估網頁上的元素是否發生未預期的位置改變而影響使用者的互動行為

## Cumulative Layout Shift (CLS)

累計佈局偏移，畫面發生未預期排版移動的程度，例如突然滑出來的廣告就會有很大的影響，較低的 CLS 分數可以有助於視覺體驗上的舒適度。

## Speed Index (SI)
網頁載入期間內容能多快被使用者看到，用來衡量視覺的流暢性。測量工具會在網頁載入期間錄製影片，計算每個 frame 在視覺上的內容完成進度。


[https://gcdeng.com/blog/a-guidebook-to-optimize-web-vitals#%E8%BC%89%E5%85%A5%E9%80%9F%E5%BA%A6loading-performance](https://gcdeng.com/blog/a-guidebook-to-optimize-web-vitals#%E8%BC%89%E5%85%A5%E9%80%9F%E5%BA%A6loading-performance)