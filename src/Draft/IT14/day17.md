# jodit-react

今天要介紹的是 jodit-react，說真的我現在也不知道當初在哪裡看到這個套件的，真心覺得酷

## 什麼是 jodit-react？

相信大家都寫過 IT 鐵人賽，或是 Medium，那如果今天能把那個輸入匡加到專案裡面，相信對專案有一定程度的加分，那 jodit-react 就是一個可以讓你加分的套件

## 不過...什麼時候會用到？

今天如果你有一個餐廳的 Project，或是一個賣東西的 Project，你可以在最後面加上這個套件，當做顧客的回饋留言區，讓整個專案變得更加完善

## 環境安裝

```
npm install jodit-react --save
```

## 怎麼使用

今天的文章會很短，因為功能真的很單一，而且還有一個超強大的[官網](https://xdsoft.net/jodit/)

官網有提供起手式

```js
import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

const Example = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = useMemo(
    {
      readonly: false,
      placeholder: placeholder || "Start typings...",
    },
    [placeholder]
  );

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      tabIndex={1}
      onBlur={(newContent) => setContent(newContent)}
      onChange={(newContent) => {}}
    />
  );
};
```

## nextCreate is not a function???

當你把官網程式碼開心的貼到你的專案時，你會遇到一個問題`nextCreate is not a function`，但是你把整個專案的`nextCreate`都刪掉，還是解決不出來，這時候你要心裡默念: 我不學了(誤)

會有這個問題是因為官方提供的程式碼裡面的 useMemo 寫法不支援，這邊也有人遇到一樣的問題，貼心如我，附上[連結](https://stackoverflow.com/questions/56943251/how-to-fix-nextcreate-is-not-a-function-setting-up-usememo-setting-up-authentica)

總之刪掉 useMemo 就可以瞜

## 繼續

當修改好上方的問題後，你的畫面應該會長這樣:

![https://ithelp.ithome.com.tw/upload/images/20220912/20129747dPJBdHxe4b.png](https://ithelp.ithome.com.tw/upload/images/20220912/20129747dPJBdHxe4b.png)

但是玩了一下發現他會把內容包成一串字串，例如當你輸入`123`，他會 output 出`"<p>123</p>"`，這樣我們沒辦法渲染到畫面上，這時候出現了一個東西，叫`dangerouslySetInnerHTML`他可以幫你把字串轉成 html

```js
<div dangerouslySetInnerHTML={{ __html: content }} />
```

## 等等...我想要客製化

這就是我說今天文章會很短的原因，因為有一個超強大的[官網](https://xdsoft.net/jodit/)啊

他讓我們可以直接看到效果

![https://ithelp.ithome.com.tw/upload/images/20220912/201297471rowAYhpgm.png](https://ithelp.ithome.com.tw/upload/images/20220912/201297471rowAYhpgm.png)

圖片右邊可以自己去玩玩看，裡面有很多功能，這邊就不多做說明了

![https://ithelp.ithome.com.tw/upload/images/20220912/20129747gX07cS97fD.png](https://ithelp.ithome.com.tw/upload/images/20220912/20129747gX07cS97fD.png)

當畫面是自己想要的以後，我們只需要複製 code 裡面的程式碼加到`config`裡面即可，是不是覺得超方便？

## 結語

今天的套件算是很冷門，也不太會有人在工作時候用到，那麼就當作看故事吧，不過這個套件的文件，筆者個人很喜歡，可以客製化後，只要複製貼上，就可以擁有對應的效果

![knowlege](https://miro.medium.com/max/2400/2*q-JBV577iJxJNHtABDtPzg.jpeg)
圖片取自 Google

> 一樣有問題，都歡迎在下方留言
