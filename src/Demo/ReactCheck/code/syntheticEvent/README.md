## react合成事件的目的
1. 进行浏览器兼容，实现更好的跨平台: React 采用的是顶层事件代理机制，能够保证冒泡一致性，可以跨浏览器执行。React 提供的合成事件用来抹平不同浏览器事件对象之间的差异，将不同平台事件模拟合成事件。
2. 避免垃圾回收
3. 方便事件统一管理和事务机制

## JSX 事件終將變成什麼？
我們透過 react 的 jsx語法中可看到一些端倪，例如我們寫一個簡單的input

![image]('./image/hello.png')

並且到瀏覽器看看

![root-location]('./image/rootLocation.png')

可以發現他是將input事件綁定在root上面，而非真實的dom

這邊我們可以得出幾個結論

1. 我們在 jsx 中綁定的事件 (demo 中的handerClick，handerChange), 根本就沒有註冊到真實的dom上。是綁定在document上統一管理的。(17版以後是綁定在root)

2. 真實的dom上的click事件被單獨處理, 已經被react底層替換成空函數。(noop(){})

3. 我們在react綁定的事件, 比如onChange，在document上，可能有多個事件與之對應。

4. react並不是一開始，把所有的事件都綁定在document上，而是採取了一種按需綁定，比如發現了onClick事件, 再去綁定document click事件。


## 原生

原生瀏覽器事件: 事件捕获 -> 事件目标 -> 事件冒泡

```js
document.getElementById('item').addEventListener('click')
```

透過 getElementById 綁定在目標上，addEventListener來監聽事件

可透過 e.stopPropagation() 來阻止冒泡事件

事件委託/事件代理
將一個行為綁定在一個element上面
当子节点被点击时，click 事件向上冒泡，父节点捕获到事件后，我们判断是否为所需的节点，然后进行处理。其优点在于减少内存消耗和动态绑定事件。

## 原生vs合成肉眼可見不同

1. 事件名称命名方式不同
```js
// 原生事件绑定方式
<button onclick="handleClick()">Leo 按钮命名</button>
      
// React 合成事件绑定方式
const button = <button onClick={handleClick}>Leo 按钮命名</button>
```
2. 事件处理函数写法不同
```js
// 原生事件 事件处理函数写法
<button onclick="handleClick()">Leo 按钮命名</button>
      
// React 合成事件 事件处理函数写法
const button = <button onClick={handleClick}>Leo 按钮命名</button>
```
3. 阻止默认行为方式不同
```js
// 原生事件阻止默认行为方式
<a href="https://www.pingan8787.com" 
  onclick="console.log('Leo 阻止原生事件~'); return false"
>
  Leo 阻止原生事件
</a>

// React 事件阻止默认行为方式
const handleClick = e => {
  e.preventDefault();
  console.log('Leo 阻止原生事件~');
}
const clickElement = <a href="https://www.pingan8787.com" onClick={handleClick}>
  Leo 阻止原生事件
</a>

```

## 原生vs合成執行順序不同
在 React 中，"合成事件"会以事件委派Event Delegation方式绑定在组件最上层，并在组件卸载(unmount)阶段自动销毁绑定的事件。

當觸發事件的整體流程: 原生事件 -> React事件 -> document事件

```js
class App extends React.Component<any, any> {
  parentRef: any;
  childRef: any;
  constructor(props: any) {
    super(props);
    this.parentRef = React.createRef();
    this.childRef = React.createRef();
  }
  componentDidMount() {
    console.log("React componentDidMount！");
    this.parentRef.current?.addEventListener("click", () => {
      console.log("原生事件：父元素 DOM 事件监听！");
    });
    this.childRef.current?.addEventListener("click", () => {
      console.log("原生事件：子元素 DOM 事件监听！");
    });
    document.addEventListener("click", (e) => {
      console.log("原生事件：document DOM 事件监听！");
    });
  }
  parentClickFun = () => {
    console.log("React 事件：父元素事件监听！");
  };
  childClickFun = () => {
    console.log("React 事件：子元素事件监听！");
  };
  render() {
    return (
      <div ref={this.parentRef} onClick={this.parentClickFun}>
        <div ref={this.childRef} onClick={this.childClickFun}>
          分析事件执行顺序
        </div>
      </div>
    );
  }
}
export default App;
```

後台輸出:
```js
原生事件：子元素 DOM 事件监听！ 
原生事件：父元素 DOM 事件监听！ 
React 事件：子元素事件监听！ 
React 事件：父元素事件监听！ 
原生事件：document DOM 事件监听！ 
```

結論:
1. React 所有事件都挂载在 document 对象上(16版)
2. 当真实 DOM 元素触发事件，会冒泡到 document 对象后，再处理 React 事件；
3. 所以会先执行原生事件，然后处理 React 事件；
4. 最后真正执行 document 上挂载的事件。

## 綁定事件的方法
1. 行內 HTML 事件綁定: js 和 html 代碼耦合了。
```js
<div onclick="handleClick()">
  test
</div>
<script>
  let handleClick = function(){
    // 一些處理代碼..
  }

  handleClick = function(){}
</script>
```
2. 事件處理器屬性: 作爲屬性使用，一次只能綁定一個事件，多次賦值會覆蓋，只能處理冒泡階段。
```js
<div id="test">
  test
</div>
<script>
  let target = document.getElementById('test')
  // 綁定事件
  target.onclick = function(){
    // 一些處理代碼..
  }
  target.onclick = function(){
    // 另外一些處理代碼...會覆蓋上面的
  }
  // 移除事件
  target.onclick = null
</script>
```
3. addEventListener: 就是爲了綁定事件而生的 api，拓展性最強
```js
<div id="test">
  test
</div>
<script>
  let target = document.getElementById('test')
  // 綁定事件
  let funcA = function(){
    // 一些處理代碼..
  }
  let funcB = function(){
    // 一些處理代碼..
  }
  // 添加冒泡階段監聽器
  target.addEventListener('click',funcA,false)
  // 添加捕獲階段監聽器
  target.addEventListener('click',funcB,true)
  // 移除監聽器
  target.removeEventListener('click', funcA)
</script>
```

## 事件委派
當節點的數量較多時，如果給每個節點都進行事件綁定的話，內存消耗大，可將事件綁定到其父節點上統一處理，減少事件綁定的數量。

**合成事件就是使用這個概念**

> 事件委派是一種綁定事件的模式，將多個回呼邏輯綁定在同一個上層節點

什麼時候使用?
過多重複的監聽器 — 10*10的按鈕 掛載一百個重複的click事件
掛載、移除事件是有成本的 — removeEventListener 超級麻煩

```js
<div class="parent">
  <div class="child" data-name="a"></div>
  <div class="child" data-name="b"></div>
  <div class="child" data-name="c"></div>
  <div class="subitem" data-name="d"></div>
</div>

$('.parent').on('click', '.child', function(){
  console.log($(this).data('name'));
});
```
將 click 事件綁在 parent 上，藉由 Event Bubbling 傳遞給 child，而非直接將事件綁定在 child 上。優點是可減少監聽器的數目，缺點是由於需要判斷哪些 child node 是我們有興趣的項目

## 瀏覽器事件差異
React透過合成事件去抹平瀏覽器事件差異

```js
// 阻止事件傳播
function stopPropagation(e){
  if(typeof e.stopPropagation === 'function'){
    e.stopPropagation()
  }else{
    // 兼容ie
    e.cancelBubble = true
  }
}
// 阻止默認事件
function preventDefault(e){
  if(typeof e.preventDefault === 'function'){
    e.preventDefault()
  }else{
    // 兼容ie
    e.returnValue = false
  }
}
// 獲取事件觸發元素
function getEventTarget(e){
  let target = e.target || e.srcElement || window;
}
// 還有事件的各種屬性如e.relatedTarget等等
```


## 合成事件 event pool (16版以前，17版以後已不支持)

是 React 事件系统提供的一种性能优化方式。合成事件对象在事件池统一管理，不同类型的合成事件具有不同的事件池。

16及16版以前: 合成事件对象的事件处理函数全部被调用之后，所有属性都会被置为 null ，需透過 e.persist() 來捕獲获取事件对象的属性
17版以後不在使用event pool，所以不存在以上問題

## 合成事件跟原生事件是否可以共用

原生事件中如果执行了stopPropagation方法，则会导致其他React事件失效。因为所有元素的事件将无法冒泡到document上。

## react 將綁定事件從 document 轉到 root 的目的
就像上面所說的如果执行了stopPropagation方法，则会导致其他React事件失效。因為事件無法冒泡到document，所以往下綁定到root間接解決這個問題

## Bonus
React 可透過 e.nativeEvent 属性获取 DOM 事件

參考文章: 

https://segmentfault.com/a/1190000038251163

https://www.readfog.com/a/1685671250120249344

https://www.readfog.com/a/1634367755893444608

https://www.cythilya.tw/2015/07/08/javascript-event-delegation/