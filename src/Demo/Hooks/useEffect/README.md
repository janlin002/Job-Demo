## 為什麼 useState 只會更改最後修改的值

[setState 到底是同步還是非同步(上)](https://ithelp.ithome.com.tw/articles/10257993)

[setState 到底是同步還是非同步(下)](https://ithelp.ithome.com.tw/articles/10257994)

[React.18 更新](https://jason-memo.dev/posts/react-18/)

簡單來說是因為 batching update 機制，他會自動監聽你需要修改的 state 值，如果反覆修改的話，會自動忽略中間修改的值，只聽最後一個出現的值
