# CSS会不会阻塞页面渲染

![](https://miro.medium.com/max/624/1*srfAe9f1ryMc3qoMOASmhg.png)

## 正常瀏覽器的渲染過程:

1. HTML解析文件，生成DOM Tree，解析CSS文件生成CSSOM Tree
2. 将Dom Tree和CSSOM Tree结合，生成Render Tree(渲染树)
3. 根据Render Tree渲染绘制，将像素渲染到屏幕上。

## DOMContentLoaded 與 load

https://ithelp.ithome.com.tw/articles/10197335

瀏覽器再遇到js會停止編譯Html，直到js被執行完，才會再次去編譯html，這是一種機制，避免一直對DOM去做操作

## 結論:

1. DOM解析和CSS解析是两个并行的进程，所以这也解释了为什么CSS加载不会阻塞***DOM的解析***。
2. 然而，由于Render Tree是依赖于DOM Tree和CSSOM Tree的，所以他必须等待到CSSOM Tree构建完成，也就是CSS资源加载完成(或者CSS资源加载失败)后，才能开始渲染。因此，CSS加载是会阻塞***Dom的渲染***的。
3. 由于js可能会操作之前的Dom节点和css样式，因此浏览器会维持html中css和js的顺序。因此，样式表会在后面的js执行前先加载执行完毕。所以***css会阻塞后面js的执行***。

## 如何優化:
1. 使用***CDN***(因为CDN会根据你的网络状况，替你挑选最近的一个具有缓存内容的节点为你提供资源，因此可以减少加载时间)
2. 对css进行压缩
3. 合理的使用缓存(设置cache-control,expires,以及E-tag都是不错的，不过要注意一个问题，就是文件更新后，你要避免缓存而带来的影响。其中一个解决防范是在文件名字后面加一个版本号)
4. 减少http请求数，将多个css文件合并，或者是干脆直接写成内联样式(内联样式的一个缺点就是不能缓存)

https://cloud.tencent.com/developer/article/1819747

https://www.cnblogs.com/caizhenbo/p/6679478.html

https://zh.javascript.info/onload-ondomcontentloaded