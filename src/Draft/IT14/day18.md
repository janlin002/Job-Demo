# 一天一套件，工作沒煩惱 - React-intl

今天要介紹的套件，是 i18n 的套件，筆者公司目前就是用這個套件

## i18n?

> 在資訊科技領域，國際化與在地化（英文：internationalization and localization）是指修改軟體使之能適應目標市場的語言、地區差異以及技術需要。

> 基於他們的英文單字長度過長，常被分別簡稱成 i18n（18 意味著在「internationalization」這個單字中，i 和 n 之間有 18 個字母

以上取自[WIKI](https://zh.m.wikipedia.org/zh-tw/%E5%9B%BD%E9%99%85%E5%8C%96%E4%B8%8E%E6%9C%AC%E5%9C%B0%E5%8C%96)

簡單來說，就是要可以達成多語系的效果，至於為什麼叫 i18n?單純是因為`internationalization`太長，所以改叫`i18n`

## 為什麼需要 React-intl？

今天開發好的專案，當然會希望越多人使用越好，所以不能只局限於台灣區，應該放眼國際，所以如果能在專案中加上 React-intl 或是其他 i18n 套件，可以讓更多的人看到我們的專案，大部分公司專案都會是三語系: 簡體中文、繁體中文、英文，如果去博弈產業可能會更多，記得除了基本的三語系，還有韓文、日文、泰文，那又是一場惡夢了...

## 環境安裝

```
npm install react-intl
```

## 怎麼使用

首先我們需要一個東西，他可以把我們目前要的語言傳遞到所有需要的頁面裡面，這個東西就叫`IntlProvider`

### IntlProvider

進到最外層的 index.js 並且加上`IntlProvider`

```js
import { IntlProvider } from "react-intl";

...中間略

<IntlProvider>
  <App />
</IntlProvider>;
```

然後我們要跟`IntlProvider`說，目前使用者使用的是哪一個語言，透過`navigator.language`可以知道目前使用者使用的語言，他會偵測你目前使用的語言，讓你在進入頁面時預設使用該語言

```js
const locale = navigator.language

...

<IntlProvider locale={locale}>
  <App />
</IntlProvider>
```

### 定義需要的翻譯

寫好`IntlProvider`後，進入重頭戲，我們要自己去定義，有哪些字要翻譯，那又要翻成什麼樣

首先我們要現建立各個語系的資料夾，以目前團隊來說，我們的路徑是`/src/lang/locales`，這邊的話，就由讀者自己去發揮創意

創建好資料夾後，我們需增加三個檔案，分別是: `en.js`、 `zh.js`、 `ja.js`，並且開始定義我們的翻譯

```js
const en = { "app.learn": "Learn {name}" };
export default en;
```

(日文跟繁體就由讀者自己去新增)

這邊看到 Object 裡面的 key-value，react-intl 會透過你定義的 key 去找到對應的 value，也是說英文、中文或是日文都 key 都會是一樣的`app.learn`，不一樣的會是後方的`value`(Learn {name})

所以整個 react-intl 的行為大概會是:

1. 先看一下使用者想用什麼語言
2. 進入指定語言包，找到翻譯好的字
3. 渲染到畫面

### messages

定義好上面以後，我們需要再來定義 messages，這個參數決定我們目前要使用的語言，跟 locale 有點不一樣，locale 決定的是我們預設進入的語言

```js
import en from "./src/lang/locales/en.js";
import zh from "./src/lang/locales/zh.js";
import ja from "./src/lang/locales/ja.js";

... 中間略
const [locale, setLocale] = useState(navigator.language);
let messages

if (locale.includes("zh")) {
  messages = zh;
} else if (locale.includes("ja")) {
  messages = ja;
} else {
  messages = en;
}

... 中間略

<IntlProvider
  locale={locale}
  key={locale}
  defaultLocale="en"
  messages={messages}
>
  <App setLocale={setLocale} />
</IntlProvider>;
```

中間可以看到，我們定義了一個 locale 的 useState，透過她來決定當前的語系，至於怎麼樣去更改語系，就由讀者自由發揮了，可以是下拉式選單，或是 radio，甚至是 checkbox

以上就是基礎環境建設，至於要如何使用，很簡單，react-intl 提供了一個 API 叫`FormattedMessage`，他的使用方式是:

```js
<FormattedMessage id="app.learn" values={{ name: "React" }} />
```

裡面的`id`會去抓語言包裡的`key`，後面的 values 是因為在語系檔中有定義 name，所以她會把 name 塞到語言包裡的 name

## 結語

其實剛開始工作時，對 i18n 其實蠻懼怕的，總覺得他不好上手，不過現在再回去看，發現其實也不難，希望上面的文章可以幫助到各位讀者

> 以上就是今天的文章，一樣有問題，歡迎在下方留言

參考資料:

https://zh.m.wikipedia.org/zh-tw/%E5%9B%BD%E9%99%85%E5%8C%96%E4%B8%8E%E6%9C%AC%E5%9C%B0%E5%8C%96

https://pjchender.dev/react/note-react-intl/
