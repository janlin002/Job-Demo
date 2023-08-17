# TypeScript 好文分享/學習資源

[React 前端工程師的兩把刷子](https://ithelp.ithome.com.tw/users/20103315/ironman/4764?page=1)

[讓 TypeScript 成為你全端開發的 ACE！](https://ithelp.ithome.com.tw/users/20120614/ironman/2685)

[十分鐘帶你了解 TypeScript Decorator](https://oldmo860617.medium.com/%E5%8D%81%E5%88%86%E9%90%98%E5%B8%B6%E4%BD%A0%E4%BA%86%E8%A7%A3-typescript-decorator-48c2ae9e246d)

[ts 保姆级教程，别再说你不会 ts 了](https://juejin.cn/post/7092415149809598500)

[React + TypeScript 实践](https://juejin.cn/post/6952696734078369828)

[2022 年了，我才开始学 typescript ，晚吗？（7.5k 字总结）](https://juejin.cn/post/7124117404187099172)

[interface vs type](https://juejin.cn/post/7093132160747438117)

[Day15: 【TypeScript 學起來】Interface VS Type Aliases 用法與差別](https://ithelp.ithome.com.tw/articles/10275208)

[React TypeScript Cheatsheets](https://react-typescript-cheatsheet.netlify.app/) -> 大推

[TypeScript 中 import type 与 import 的区别](https://blog.csdn.net/VoisSurTonChemin/article/details/122508528)

[你不知道的 「 import type 」](https://segmentfault.com/a/1190000039800522)

[Day16:【TypeScript 學起來】新增任意屬性的好方法：Index Signatures 索引簽名](https://ithelp.ithome.com.tw/articles/10275784)

[【筆記】Type 難了 (1) - 進階 TypeScript 型別應用](https://leewanhsuan.github.io/2022/07/12/03-typeScript-utility/)

[十个你必须要会的 TypeScript 技巧](https://juejin.cn/post/7246453307736145980)

[TypeScript | 善用 Enum 提高程式的可讀性 - 基本用法 feat. JavaScript](https://medium.com/enjoy-life-enjoy-coding/typescript-%E5%96%84%E7%94%A8-enum-%E6%8F%90%E9%AB%98%E7%A8%8B%E5%BC%8F%E7%9A%84%E5%8F%AF%E8%AE%80%E6%80%A7-%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95-feat-javascript-b20d6bbbfe00) -> 推

[TypeScript 入门教程](https://ts.xcatliu.com/)

[你也對開始使用 typescript 感到無力嗎？我也是 - 30 天初探 typescript](https://ithelp.ithome.com.tw/users/20140522/ironman/5083) -> 推

[TypeScript 新手指南](https://willh.gitbook.io/typescript-tutorial/) -> 新手推

### with React

[好想用 Typescript+React hooks 开发啊!（嘴对嘴解释）](https://juejin.cn/post/6844904085024407566)

[Your First React Typescript Project: a Todo List App](https://typeofnan.dev/your-first-react-typescript-project-todo-app/)

[React 官網 TypeScript 教學](https://react.dev/learn/typescript) -> 推

[TypeScript 语言简介](https://wangdoc.com/typescript/intro) -> 阮一峰所寫，推

### with axios

[Writing a custom Axios hook in TypeScript for API calls in your React application](https://blog.sreejit.dev/custom-axios-hook-useaxios-in-typescript-react)

### interview

[TypeScript TS「面试题及答案」不断更新](https://juejin.cn/post/6999985372440559624)

### 特殊型別

[型別介紹 part4 - 一些特殊的型別](https://ithelp.ithome.com.tw/articles/10295962)

[【Day 15】TypeScript 資料型別 - 特殊型別(上)- Never](https://ithelp.ithome.com.tw/articles/10222916)

[【Day 16】TypeScript 資料型別 - 特殊型別(下)- Any & Unknown](https://ithelp.ithome.com.tw/articles/10223315但)

### as const -> 簡單來說就是不讓你有重新賦值的機會

[讓 TypeScript 的 as const 救你一命](https://ngseke.me/blog/typescript-as-const)

[详细介绍 TypeScript 中的 'as const'](https://www.jiyik.com/tm/xwzj/prolan_1286.html)

### Utility Types

[[TypeScript] Types 十全大補中 — Generics & Utility Types](https://medium.com/hannah-lin/typescript-types-%E5%8D%81%E5%85%A8%E5%A4%A7%E8%A3%9C%E4%B8%8B-generics-utility-types-7e73ddbc58eb)

[7 Utility Types that Every TypeScript Developer Should Know](https://javascript.plainenglish.io/7-utility-types-that-every-typescript-developer-should-know-788fe73421f1) -> 大推

### keyof & typeof

[TypeScript - 简单易懂的 keyof typeof 分析](https://juejin.cn/post/7023238396931735583) -> 推

**keyof vs keyof typeof**

keyof 單獨使用時，是在於已知型別的情況下，keyof typeof 是在於未知型別的情況下做使用

- typeof

typeof 就是將對象的型別抓過來使用

```ts
const conference: {
  name: string;
  year: number;
  isAddToCalendar: boolean;
  website: string;
};
```

```ts
type Conference = typeof conference;
```

Conference 就會繼承 conference 所有的型別

- keyof

透過 keyof 我們可以取出 Object 型別的 key

```ts
interface Person {
  name: string;
  age: number;
  location: string;
}

type CarLiteralType = keyof Person;

CarLiteralType = "name" | "age" | "location";
```

- keyof typeof

透過 keyof typeof 我們可以將一個正常的 Object 轉乘型別的形式，然後將 key 取出

```ts
const bmw = { name: "BMW", power: "1000hp" };

type CarLiteralType = keyof typeof bmw;

let carPropertyLiteral: CarLiteralType;
carPropertyLiteral = "name"; // OK
carPropertyLiteral = "power"; // OK
carPropertyLiteral = "anyOther"; // Error
```

### 個人部落格

[[typescript] TypeScript 基礎 (使用 Vite 建立環境)](https://weiyun0912.github.io/Wei-Docusaurus/docs/TypeScript/TypeScript-Basic#interface--extends)
