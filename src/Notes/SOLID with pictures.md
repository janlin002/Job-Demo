# SOLID with pictures

## S -  Single Responsibility(單一職責)
![](https://i.imgur.com/lZfgY0W.png)

If a Class has many responsibilities, it increases the possibility of bugs because making changes to one of its responsibilities, could affect the other ones without you knowing.

如果一個組件做很多事的話，會有很大的機會原本只是要改一個部分卻不經意地影響到其他部分

## O - Open-Closed
![](https://i.imgur.com/90vEbKT.png)

> Classes should be open for extension(新增), but closed for modification(修改)

新增功能不需要擔心是否會影響到舊功能，簡單來說就是不能夠寫的太過偏袒單一方向，不然日後會需要做其他的更改

## L - Liskov Substitution (里氏替代原則)
![](https://i.imgur.com/Xnh03vu.png)

> The child Class should be able to do everything the parent Class can do.

## I - Interface Segregation(介面隔離)
![](https://i.imgur.com/161p6x2.png)

> A Class should perform only actions that are needed to fulfil its role.
> 應該只執行完成其角色所需的操作。對於其他沒必要的部分應該要移除

## D — Dependency Inversion(依賴反轉)
![](https://i.imgur.com/TR3BydC.png)


> This principle aims at reducing the dependency of a high-level Class on the low-level Class by introducing an interface.
> 高階模組不應依賴低階模組，兩個都應該依賴在抽象概念上；抽象概念不依賴細節，而是細節依賴在抽象概念。

**話不能說的太死，盡量講一些概念性的東西**

參考資料:
[https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898](https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898)

[https://www.notion.so/SOLID-9caecbf673fb4d0cb1c1485508fc16d4](https://www.notion.so/SOLID-9caecbf673fb4d0cb1c1485508fc16d4)
