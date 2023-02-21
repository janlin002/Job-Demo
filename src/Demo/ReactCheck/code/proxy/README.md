# proxy & reflect

## Proxy

```typescript!
let proxy = new Proxy(target, handler)
```
- target 要攔截的目標物件，可已是任何東西
- handler 引數也是一個物件，用來客製化攔截行為(get, set, ...)。

> proxy 並不是把 target 複製一份，而是參照到同一個物件上，因此對 proxy 做的操作會影響到原本的 target。

這邊舉個簡單的小例子:

```typescript!
let target = {};
let proxy = new Proxy(target, {});

proxy.test = 5; 
alert(target.test); // 5
alert(proxy.test); // 5
```

上方程式碼可以看到 target 跟 proxy 的 test 欄位都是 5 ，由此可知 proxy 會影響到原本的 target

在 JS 中有所謂的 內部方法(internal method)，也就是`[[]]`，不過因為他们从运行(runtime)时中被抽象出来，所以我們沒辦法在正常 JavaScript 中使用它們

在 JavaScript 中，内部方法(internal method) 是由 JavaScript 引擎自动调用的。当我们访问对象属性时，引擎会自动调用 [[Get]] 方法来获取属性值。而在使用 Proxy 对象时，我们可以通过实现 get 方法来拦截对属性的访问，从而实现自己的逻辑。这样，就可以将 [[Get]] 方法封装成 get 方法，以便于我们使用。

下面提供了一個簡單的對照表:
| internal method | proxy 語法 |
| -------- | -------- |
| [[GetPrototypeOf]]    | getPrototypeOf()     |
| [[SetPrototypeOf]] | setPrototypeOf()|
|[[IsExtensible]]|	isExtensible()|
|[[PreventExtensions]]	|preventExtensions()|
|[[GetOwnProperty]]	|getOwnPropertyDescriptor()|
|[[DefineOwnProperty]]|	defineProperty()|
|[[HasProperty]]	|has()|
|[[Get]]|	get()|
|[[Set]]	|set()|
|[[Delete]]	|deleteProperty()|
|[[OwnPropertyKeys]]|	ownKeys()|

接下來我會針對幾個常見的 proxy 語法去做介紹:

## get(target, property, receiver)
### 觸發時機:
當背代理的物件，被調用(被使用)時，就會觸發

get 接收三個參數:
1. target: 目標
2. property: 對應值
3. receiver: 接收者

這三個參數的介紹是不是看不太懂？下面程式碼我們可以了解:
1. target 目標，指向 new Proxy 的代理對象，也就是 `getTarget`
2. property 對應值，在下方程式碼最後，可以看到 console.log 調用了 proxy 的 `name` 跟 `age`，其實 `name` 跟 `age` 就是所謂的 `property` 
3. receiver 接收者，如果目標屬性是一個 `getter`，那麼 `receiver` 就是將 `this` 在其調用中使用的對象。通常是 `proxy` 對象本身


```javascript!
const getTarget = {
  name: "Tom",
  age: 18,
};

const proxy = new Proxy(getTarget, {
  get: function(target, property, receiver) {
    console.log(`Reading property ${property}`);
    return target[property];
  },
});

console.log(proxy.name);
console.log(proxy.age);
```

使用時機:
這邊舉個網路上常看到的例子: 透過 `get` 來實現默認值

```js
let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0; // 如果沒有該欄位，則顯示預設值
    }
  }
});

alert( numbers[1] ); // 1
alert( numbers[123] ); // 0
```
## set(target, property, value, receiver)
### 觸發時機:
當代裡的物件被賦予新值時，就會觸發

set 接收四個參數:

1. target: 目標
2. property: 對應值
3. value: 傳入的值
4. receiver: 接收者

```js
  const setTarget = []

  const setProxy = new Proxy(setTarget, {
    set: function(target, property, value, receiver){
      console.log(target, property, value, receiver, 'settt')
      return true
    }
  })

  setProxy.push('123')
```

可以看到上方程式碼，我們對於 `setProxy` 做 `push` 的動作，所以觸發了 `set`

這邊千萬要記得 set 一定要返回 `true` 才能成功寫入，不然會 TypeError:

> TypeError: 'set' on proxy: trap returned falsish for property '0'

這邊解釋一下參數的部分，target, property 跟 receiver 前面講過了，這邊就不再說了，不一樣的事多了一個value，這邊的value其實就是指傳入的值，以上方程式碼來說就是: `123`

使用時機:
目前較多時候是拿set來做驗證的部分:

```js
let numbers = [];

numbers = new Proxy(numbers, {
  set(target, prop, val, receiver) {
    if (typeof val == 'number') {
      target[prop] = val;
      return true;
    } else {
      return false;
    }
  }
});

numbers.push(1); // [1]
numbers.push(2); // [1, 2]
alert("Length is: " + numbers.length); // 2

numbers.push("test"); // TypeError ('set' on proxy returned false)
```
上方程式碼，我們透過 `typeof` 做型別認證，確定傳遞的參數為 `number` 才做 `push` 的動作，不然就會 `TypeError`，達到了簡單的驗證

以上介紹兩個常見的 Proxy 方法，接下來要來講一下大家可能沒聽過的 `Reflect`


## Reflect
> Reflect 跟 Proxy 一樣是封裝了 internal method，然後產出了 .get(), .set(), ...等方法

`Reflect` 跟 `Object` 很像，但他不是 `Object`，是不是有點聽不懂？沒關係，我們交給 chatGPT(絕對不是我偷懶，是想跟上時代啊)

Reflect 对象是一个全局对象，而 Object 对象是一个构造函数。因此，我们可以使用 Reflect 对象的方法来执行一些操作，而不需要先创建一个对象。而要使用 Object 对象的方法，我们需要先使用 new 关键字来创建一个对象，然后再调用其方法。

簡單來說就是我們在使用 Reflect 不用先做建構的動作(new)，但在使用 Object 時需要，然後兩者提供的方法也有一些不同，後面會針對幾個語法做比較，如果對於兩者提供方法差異有興趣的讀者，可以參考這個[表格](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/Comparing_Reflect_and_Object_methods)

### Reflect.has(obj, value) vs Object.hasOwnProperty(value)

Reflect 語法

```js
Reflect.has(obj, value)
Reflect.has(確認目標, 確認欄位(key));
```


Reflect 實際使用
```js
let user = {
    name: 'Jan'
};

console.log(Reflect.has(user, 'name')) // true
```

等同於 Object 的:

```js
let user = {
    name: 'Jan'
};

console.lgo(user.hasOwnProperty('name')) //true 
```

或是有些人會習慣用 `in`

```js
let user = {
    name: 'Jan'
};

console.log('name' in user) // true
```

### Reflect.ownKeys(obj) vs Object.keys(obj)

Reflect 語法

```js
Reflect.ownKeys(obj)
Reflect.ownKeys(確認目標);
```

Reflect 實際使用

```js
const object1 = {
  property1: 42,
  property2: 13
};

console.log(Reflect.ownKeys(object1)); // ["property1", "property2"]
```

等同於 Object 的:

```js
const object1 = {
  property1: 42,
  property2: 13
};

console.lgo(Object.keys(object1)) // ["property1", "property2"]
```

> 不過這邊要注意一點，不要對 array 執行 Reflect.ownKeys ，因為會回傳 `['length']`


### Reflect.set(obj, prop, value) vs Object[key] = value

Reflect 語法

```js
Reflect.set(obj, prop, value)
Reflect.set(更改目標, 更改欄位(key), 更改值(value));
```

Reflect 實際使用
```js
let user = {};

Reflect.set(user, 'name', 'John');

console(user.name); // John

// {
//     nmae: 'John"
// }
```
等同於 Object 的:
```js
let user = {};

user['name'] = 'John'

console(user.name); // John
```

基本上了解了 Reflect 後，也就知道為什麼同事會寫出 `Reflect.has(obj, value)` 的程式碼了

## 結語
平常根本沒機會碰到 Proxy 跟 Reflect ，剛看到還以為是什麼新語法，結果發現人家 ES6 就已經出了...，暸解了一下，覺得還蠻有趣的，不過平常專案會不會使用就是另外一回事了，那麼以上就是這次的文章，如果有任何錯誤或是想補充的部分都歡迎留言給我，那我們下次見，掰掰


參考文章:

https://v8.dev/blog/understanding-ecmascript-part-1

https://javascript.info/proxy

https://yuanchieh.page/posts/2020/2020-05-27_js-proxy-%E8%88%87-reflect-%E4%BD%BF%E7%94%A8/

https://pjchender.dev/javascript/js-proxy/

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/Comparing_Reflect_and_Object_methods

https://medium.com/jspoint/what-are-internal-slots-and-internal-methods-in-javascript-f2f0f6b38de

https://medium.com/jspoint/introduction-to-proxy-api-for-metaprogramming-in-javascript-fa2781e360ba

