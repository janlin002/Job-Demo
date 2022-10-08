# react-signature-canvas

## 什麼是 react-signature-canvas?

react-signature-canvas 是一個簽名匡，它可以讓使用者直接在網頁上簽名

## 環境安裝

```
npm i react-signature-canvas
```

## 怎麼使用

這邊我自己寫了一個小 Demo

```js
import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

function Index() {
  const signature = useRef(null);

  return (
    <>
      <SignatureCanvas
        penColor="green"
        canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
        backgroundColor="rgb(0,0,0)"
        ref={signature}
      />
      <button type="button" onClick={() => signature.current.clear()}>
        clear
      </button>
    </>
  );
}

export default Index;
```

可以看到`react-signature-canvas`提供了一個叫`SignatureCanvas`的 Component，然後我們傳遞 Props 給他就能開啟相對應的功能

常用的 Props:

- penColor: 筆的顏色
- canvasProps: 大小寬度高度的調整
- backgroundColor:背景顏色，這邊要提醒一下，背景顏色盡量不要跟`penColor`一樣，不然你會以為套件壞掉了
- ref : 需指向綁定的 Ref，如果不知道 ref 的讀者可以參考 React[官網](https://reactjs.org/docs/hooks-reference.html#useref)

常用 api:
今天可以透過綁定的 Ref 去做操作，例如：把簽名清掉

- clear()

```js
<button type="button" onClick={() => signature.current.clear()}>
  clear
</button>
```

## 結語

react-signature-canvas 在一班公司應該也不太可能會遇到，除非是有需要金錢流動的公司

> 以上就是今天的文章，有任何問題都歡迎在下方留言
