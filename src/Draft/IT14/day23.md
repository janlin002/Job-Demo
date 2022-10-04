# jsPdf

## 什麼是 jsPdf?

jsPdf 是可以讓妳生成 pdf，並且提供下載的功能，不過只是生成間單的樣式，如果需要比較複雜的樣式，會需要搭配其他套件，例如: html2canvas

## 環境安裝

```
npm i jspdf
```

[這個](https://rawgit.com/MrRio/jsPDF/master/docs/index.html)是 jsPdf 的文檔，裡面有非常多的語法，不過今天一樣不會全講，只會挑幾個常用的去特別提出來做說明

## 怎麼使用

基本用法

```js
import { jsPDF } from "jspdf";

const doc = new jsPDF();

doc.text("Hello world!", 10, 10);
doc.save("a4.pdf");
```

上方是官網提供的基礎用法，首先先建立一個 `jsPDF()`，然後可以看到有兩個語法:

### .text()

代表 PDF 裡面的內容，以程式碼為例: 會顯示`Hello world!`，至於後方的兩個`10`，代表 X 軸跟 Y 軸的起始座標

### .save()

透過這個語法，可以指定下載的檔名，以程式碼為例，會儲存到`a4.pdf`

### .setFontSize()

從字面上意思可看出是決定文字大小

> Sets font size for upcoming text elements.

```
ooo

.setFontSize(10)

xxx
```

我上面有畫了一個示意圖，很簡陋希望大家不介意

.setFontSize(10)的作用域會在`xxx`而非`ooo`，並且如果`xxx`裡面沒有另一個`.setFontSize()`，那麼 xxx 都會是這個大小

### addImage

這是生成圖片的方法

```
addImage(imageData, format, x, y, width, height)
```

- imageData: 圖片路徑
- format: 檔名
- x, y: 顯示的座標
- width: 圖片寬度
- height: 圖片高度

### 結語

以上就是基本的幾的語法，如果有興趣的讀者可以去官網裡面框框，也須會發現一些有趣的語法，一樣有問題都歡迎在下方留言，那麼我們明天見~~
