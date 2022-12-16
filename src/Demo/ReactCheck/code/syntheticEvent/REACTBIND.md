## React 綁定事件


在react中，我們綁定的事件onClick等，並不是原生事件，而是由原生事件合成的React事件，比如 click事件合成爲onClick事件。比如blur , change , input , keydown , keyup等 , 合成爲onChange。

react 為什麼要做合成事件

一方面，將事件綁定在document統一管理，防止很多事件直接綁定在原生的dom元素上。造成一些不可控的情況

另一方面， React 想實現一個全瀏覽器的框架， 爲了實現這種目標就需要提供全瀏覽器一致性的事件系統，以此抹平不同瀏覽器的差異。

1 react對事件是如何合成的。

2 react事件是怎麼綁定的。

3 react事件觸發流程。

onClick vs onClickCapture

v17 的事件系統
