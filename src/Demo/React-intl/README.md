[Medium](https://medium.com/itsoktomakemistakes/react-intl-create-react-app-21d271df8056)

[pjchender](https://pjchender.blogspot.com/2019/07/react-intl-react-i18n.html) - 目前已經不支援

## 聲明

這篇筆記是參考[這篇](https://medium.com/itsoktomakemistakes/react-intl-create-react-app-21d271df8056)，並且加入 redux

### 寫法概述

```bash
npm i react-intl
```

引入 react-intl 套件

```bash
import { FormattedMessage, IntlProvider } from "react-intl"
```

_將 IntlProvider 包在最外層_

```js
<IntlProvider>
  <Router>
    <Header />
    <Switch>...</Switch>
  </Router>
</IntlProvider>
```

_將需要翻譯的文字輸入到 FormattedMessage 中_

```js
<FormattedMessage
  id="app.header"
  defaultMessage="Edit src/App.js and save to reload."
/>
```

在 terminal 輸入:

```bash
npm run build
or
yarn build
```

在 Public 資料夾下創建 lang，並且把需要轉換的語言輸入成 JSON 檔

```bash
|-Public
    |-lang
       |-en.json
       |-zh.json
       |-jp.json
```

並把資料輸入到 JSON 檔中

// en.json

```json
{
  "app.header": "Edit src/App.js and save to reload.",
  "app.content": "Learn React"
}
```

// zh.json

```json
{
  "app.header": "編輯src / App.js並保存以重新加載。",
  "app.content": "學習 React"
}
```

// jp.json

```json
{
  "app.header": "src / App.jsを編集し、保存して再読み込みします。",
  "app.content": "Reactを学ぶ"
}
```

用 useState 在頁面上加入語言切換的下拉式選單

```js
const [lang, setLang] = useState('en')
    <select
      value={lang}
      onChange={(evt) => {
        setLang(evt.target.value);
      }}
    >
      <option value="en">English</option>
      <option value="cn">中文</option>
      <option value="jp">日本語</option>
    </select>
```

回到輸入 IntlProvider 的頁面(通常是放路由的地方)

透過 React hooks useEffect 使用 Async/Await function 來處理語言包的切換，並在 IntlProvider 設定 messages={locale}

不過範例是同層傳遞，所以需要加入 redux

```bash
npm install --save redux
npm install --save react-redux // 需使用useDispatch, useSelector
```

// actionType.js

```js
export const CHANGE_LANG = "CHANGE_LANG";
```

// action.js

```bash
import { CHANGE_LANG } from './actionType'

export const changeLang = ( value)=>{
  return {
    type: CHANGE_LANG,
    payload:value
  }
}
```

// reducer.js

```bash
import { CHANGE_LANG } from './actionType'

const defaultState = {
  localeLanguage: 'en'
}

export default (state = defaultState,action)=>{
  switch (action.type) {
  case CHANGE_LANG:{
    const value = action.payload
    return { ...state,  localeLanguage: value }
  }

  default:
    return state
  }
}
```

// store,js

```js
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);
export default store;
```

// index.js

```js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from "react-redux";
import store from "./Redux/store";

import 'antd/dist/antd.css'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
```

#### 說明

透過 redux 方式把下拉式選單選到的語言傳到 IntlProvider 那頁，並且透過 IntlProvider 向所有 component 傳遞，實現 i18n 效果

## Final Code

// Rreact-intl.jsx

```js
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch } from "react-redux";
import { changeLang } from "../../Redux/action";

function ReactIntl() {
  const [lang, setLang] = useState("en");
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <FormattedMessage
          id="app.header"
          defaultMessage="Edit src/App.js and save to reload."
        />
      </div>

      <select
        value={lang}
        onChange={(evt) => {
          setLang(evt.target.value);
          dispatch(changeLang(evt.target.value)); // 將當下的語言傳到reducer
        }}
      >
        <option value="en">English</option>
        <option value="zh">中文</option>
        <option value="jp">日本語</option>
      </select>
    </div>
  );
}
export default ReactIntl;
```

// App.js

```js
/*以上省略*/

function App() {
  const [locale, setLocale] = useState(undefined);
  const lang = useSelector((state) => state.localeLanguage); // 接收透過下拉式選單傳遞過來的資料
  useEffect(async () => {
    const resp = await fetch(`./lang/${lang}.json`);
    const data = await resp.json();
    setLocale(data);
  }, [lang]);
  return (
    <div>
      <IntlProvider messages={locale}>
        <Router>
          <Header />
          <Switch>/* 路由資訊省略*/</Switch>
        </Router>
      </IntlProvider>
    </div>
  );
}
export default App;
```
