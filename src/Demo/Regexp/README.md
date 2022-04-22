### Regexp

正则表达式是 _匹配模式_，要么 _匹配字符_，要么 _匹配位置_

### 匹配位置 - replace

> ^ 開頭

```js
let string = "hello";

console.log(string.replace(/^/, "😄")); // 😄hello
```

> $ 結尾

```js
let string = "hello";

console.log(string.replace(/$/, "😄")); // hello😄
```

> /b 單詞邊界

```js
"xxx_love_study_1.mp4".replace(/\b/g, "❤️"); // ❤️xxx_love_study_1❤️.❤️mp4❤️
```

> (?=p) 在符合 p 條件的*前面*執行特殊操作

```js
"xxx_love_study_1.mp4".replace(/(?=xxx)/g, "❤️"); // ❤️xxx_love_study_1.mp4
```

> (?<=p) 在符合 p 條件的*後面*執行特殊操作

```js
"xxx_love_study_1.mp4".replace(/(?<=xxx)/g, "❤️"); //xxx❤️_love_study_1.mp4
```

### 匹配字符 - match

> 匹配次數 {}

```js
let reg = /ab{2,5}c/g;
let str = "abc abbc abbbc abbbbc abbbbbc abbbbbbc";

str.match(reg); // [ 'abbc', 'abbbc', 'abbbbc', 'abbbbbc' ]
```

> 匹配字串 []

```js
let reg = /a[123]b/g;
let str = "a0b a1b a2b a3b a4b";

str.match(reg); // [ 'a1b', 'a2b', 'a3b' ]
```

> 排除字符组

```js
[^abc] - 不要abc
```

> 常见简写形式

```js
\d // 数字
\D // 非数字
\w // [0-9a-zA-Z_]
\W // [^0-9a-zA-Z_]
\s // [\t\v\n\r\f]
\S // [^\t\v\n\r\f]
.
```

> 量词

```js
1. {m,} // 至少出现m次
2. {m} // 出现m次
3. ? // 出现0次或者1次，等价于{0,1}
4. + // 至少出现1次,等价于{1,}
5. * // 0次或多次,等价于{0,}
```
