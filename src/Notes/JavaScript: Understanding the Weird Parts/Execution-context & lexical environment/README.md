# Syntax Parsers & Execution Context & Lexical Environments

## Syntax Parsers - 語法解析器

A program that reads your code and determines what is does and if its grammer is valid

讀取您的代碼並確定其功能以及其語法是否有效的程序

Syntax Parser就像是一個翻譯，負責將我們的Javascript Code 翻譯給電腦讀，進而執行程式。

所以當我們今天的Javascript Code執行時，會先經過Syntax Parser一字一句讀取我們的程式，並判斷這個語法是否有效，將有效的語法翻譯成電腦可以明白的方式。

## Execution Context - 執行上下文

A wrapper to help manage the code that is running

幫助管理正在運行的代碼的包裝器

會生成兩樣東西: Global Object(Window), this

At the global level Global Object with this is "EQUAl"

- Execution Context is created (Creation Phase)
- Execution Context runs code (Execution Phase)

## Outer Environment

如果要呼叫一個在該exection context中沒有的變項時，它會往它的outer environment去找。(可能很多層)

[Scope Chain & outer environment](https://pjchender.blogspot.com/2015/12/javascriptscope-chainouter-environment.html)


## Global

Not inside the Function

## Lexical Environments - 詞法環境

Where something sites physically in the code you write

# Name Value pairs & Object

## Name Value pairs

```js
myName = 'David'
```

this is a simple Name Value pairs

## Object

A collection of  Name Value pairs

## Hoisting
Setup memory space for variable and function, call "Hoisting"

function - entire function

variable - only key, name => undefined

## Single Threaded

One command(命令) at a time

## Synchronous Execution - 同步

One at a time

## Asynchronous callback - 非同步

More then one at a time

## Function Invocation - 執行函數

## Execution Stack - 執行堆

LIFO, Last in First out

會等到 stack 所有的東西都執行完，才會去執行 Queue 裡面的東西

[call-stack](https://yokarilight.medium.com/javascript%E4%B8%AD%E7%9A%84%E5%91%BC%E5%8F%AB%E5%A0%86%E7%96%8A-call-stack-%E6%98%AF%E7%94%9A%E9%BA%BC-16837dd10a81)

[Executin-stack](https://israynotarray.com/jsweirdworld/20190515/3997485218/)

## Scope Chain

當函式的本身沒有宣告該變數時，函式就會一層一層向外層 / 上層來做尋找，而這一連串就是範圍鍊。

## Scope
Where a variable is avariable in your code

[Scope Chain & Lexical Environment & Lexical Scope](https://hackmd.io/3ZshD7whSvOdVvSxDhmYEQ)


