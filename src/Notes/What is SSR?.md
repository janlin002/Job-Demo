# what is SSR?

## SSR 流程
1. 在 server 端先 fetch client App 所需要的資料(HTML, Css)
2. 在 server 端將 App 的 HTML 產出並回傳給 client
3. client 將 HTML commit 在畫面上
4. 在 client 端下載 App 所需的 JavaScript
5. 在 client 端將 JavaScript 的邏輯（例如，event handler）和 server generated 的 HTML 進行綁定（又稱作 hydration）

## SSR 優缺點
優點:
- CSR 要下載很大的一包 JavaScript 後使用者才能看到內容（很久的 loading 畫面）
- 改善 FCP 和 LCP(因為在server端就已經下載好了)

缺點:
- TTFB 較差，畫面出現了但使用者仍能無法互動：仍然需要等待 JavaScript 下載、並執行 hydration 後，使用者才能和畫面上的元件互動
- FID 也會變差

> TTFB: 瀏覽器對伺服器發出請求(ex: http api request)後到收到回應資料(第一個 byte)所花的時間。
> 
> FID: 使用者首次與網站互動，直到瀏覽器回應互動事件的時間差。

## 重要名詞解釋
### Pre-rendering
指 server 端預先把 client 請求的 HTML 給產生出來，並回傳給 client，然而此時整個畫面因為還沒註冊事件，所以是不具有互動性的。Pre-rendering 又可以分成 Static Generation 和 Server-side Rendering 這兩種。

### Static Generation
靜態頁面是在 build-time 時就產生，伺服器收到 request 時重複使用這些已經生成好的靜態頁面。

### Server-side Rendering
伺服器每次收到請求時在產生對應的靜態頁面。

### Hydrate
主要的動作是將 event handlers 綁定在 DOM 元素上，並且準備好對這些事件做反應；其次則是要強化 server rendered 的頁面，例如，自動播放影片、訂閱一些需 live 顯示的資料等等。

### 傳統CRS
![CSR](https://i.imgur.com/oMejdMx.png)

### SSR
![](https://i.imgur.com/KPGG3ti.png)

https://blog.saeloun.com/2021/12/16/hydration.html

https://gcdeng.com/blog/a-guidebook-to-optimize-web-vitals#time-to-interactive-tti

https://pjchender.dev/react/note-react-rendering-pattern/





