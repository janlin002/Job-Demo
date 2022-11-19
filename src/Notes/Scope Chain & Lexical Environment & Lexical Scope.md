# Scope Chain & Lexical Environment & Lexical Scope

## Scope Chain - 範圍鏈
當函式的本身沒有宣告該變數時，函式就會一層一層向外層 / 上層來做尋找，而這一連串就是範圍鍊。

下面程式碼就是展現了 Scope Chain ，因為 f1 內部沒有 value ，所以需要去外層找 value
```javascript
const value = '1'

funciton f1(){
    console.log(value)
}
f1()
```

## Lexical Environment - 詞彙環境

詞彙環境存在於一些程式語言中，這些程式語言認為程式碼***寫在哪裡***是很重要的。（不是每個程式語言都這樣）

## Lexical Scope - 語法作用域
代表著區塊間的包裹關係，被包裹在內層的區塊可以保護自己的變數不被外層取用，相反的外層區塊的變數還是可以被內層區塊使用

簡單來說就是: 內部的程式碼不會外流，但一樣可以使用外層的變數

```javascript
var outer = 'From Outer';
function myFunction() {
  var inner = 'From Inner';
  console.log(outer);	// "From Outer"
  console.log(inner);	// "From Inner"
}
console.log(outer);	// "From Outer"
console.log(inner);	// inner is not defined
```
https://ithelp.ithome.com.tw/articles/10194745