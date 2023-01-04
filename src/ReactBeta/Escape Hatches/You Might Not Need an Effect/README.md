[官網網址](https://beta.reactjs.org/learn/you-might-not-need-an-effect)

這個章節主要是叫大家刪除一些非必要的 useEffect ，這樣可以讓你的程式碼好維護且提升效能

## How to remove unnecessary Effects 
常見兩種不需要 Effects 的情況:
1. You don’t need Effects to transform data for rendering.
2. You don’t need Effects to handle user events.

## 遇到以下情況，或許可以考慮移除 Effects

### Updating state based on props or state
如果是需要計算 state 或是 props 時，不應該把他放到 Effects 中，應該讓他在 re-render 時執行

### Caching expensive calculations 
應該避免在 Effects 中執行昂貴的計算，例如: 執行一個function

如果執行函式時間過長，考慮 cache 時，或許可以加入 useMemo，以避免函式不必要的 re-render

```js
function TodoList({ todos, filter }) {
  const [newTodo, setNewTodo] = useState('');

   // ✅ This is fine if getFilteredTodos() is not slow.
  const visibleTodos = getFilteredTodos(todos, filter);

  // ✅ Does not re-run getFilteredTodos() unless todos or filter change
  const visibleTodos = useMemo(() => getFilteredTodos(todos, filter), [todos, filter]);

  // 🔴 Avoid: redundant state and unnecessary Effect
  const [visibleTodos, setVisibleTodos] = useState([]);
  useEffect(() => {
    setVisibleTodos(getFilteredTodos(todos, filter));
  }, [todos, filter]);

  // ...
}
```

### Resetting all state when a prop changes

```js
export default function ProfilePage({ userId }) {
  const [comment, setComment] = useState('');

  // 🔴 Avoid: Resetting state on prop change in an Effect
  useEffect(() => {
    setComment('');
  }, [userId]);
  // ...
}


export default function ProfilePage({ userId }) {
  return (
    <Profile
      userId={userId}
      key={userId}
    />
  );
}

function Profile({ userId }) {
  // ✅ This and any other state below will reset on key change automatically
  const [comment, setComment] = useState('');
  // ...
}
```

這邊我的理解是: 因為state改變了，所以間接觸發 Child Component(`Profile`) re-render，這樣就不需要使用 Effects

### Adjusting some state when a prop changes
透過新增一個新的 state 去監聽 props 是否有更改

```js
function List({ items }) {
  const [isReverse, setIsReverse] = useState(false);
  const [selection, setSelection] = useState(null);

  // 🔴 Avoid: Adjusting state on prop change in an Effect
  useEffect(() => {
    setSelection(null);
  }, [items]);
  // ...
}

function List({ items }) {
  const [isReverse, setIsReverse] = useState(false);
  const [selection, setSelection] = useState(null);

  // Better: Adjust the state while rendering
  const [prevItems, setPrevItems] = useState(items);
  if (items !== prevItems) {
    setPrevItems(items);
    setSelection(null);
  }
  // ...
}
```

上方程式碼新增了 `prevItems` ， 藉由 `prevItems` 去監聽 `items` 是否有更改

### Sharing logic between event handlers

情境: 有兩個按鈕，當顧客點擊任何一個按鈕將產品加到購物車後，要有提示訊息


```js
function ProductPage({ product, addToCart }) {
  // 🔴 Avoid: Event-specific logic inside an Effect
  useEffect(() => {
    if (product.isInCart) {
      showNotification(`Added ${product.name} to the shopping cart!`);
    }
  }, [product]);

  function handleBuyClick() {
    addToCart(product);
  }

  function handleCheckoutClick() {
    addToCart(product);
    navigateTo('/checkout');
  }
  // ...
}
```

>  the notification should appear because the user pressed the button, not because the page was displayed!

所以應該把邏輯寫在點擊按鈕的function中

```js
function ProductPage({ product, addToCart }) {
  // ✅ Good: Event-specific logic is called from event handlers
  function buyProduct() {
    addToCart(product);
    showNotification(`Added ${product.name} to the shopping cart!`);
  }

  function handleBuyClick() {
    buyProduct();
  }

  function handleCheckoutClick() {
    buyProduct();
    navigateTo('/checkout');
  }
  // ...
}
```

### Sending a POST request

跟前面一樣，不應該去監控他的狀態，應該直接寫在 function 中

### Chains of computations

這邊想說的是，不應該將有關連的 useEffect 分開來寫，應該統一寫一個 useEffect

```js
  useEffect(() => {
    if (card !== null && card.gold) {
      setGoldCardCount(c => c + 1);
    }
  }, [card]);

  useEffect(() => {
    if (goldCardCount > 3) {
      setRound(r => r + 1)
      setGoldCardCount(0);
    }
  }, [goldCardCount]);

  useEffect(() => {
    if (round > 5) {
      setIsGameOver(true);
    }
  }, [round]);

  useEffect(() => {
    alert('Good game!');
  }, [isGameOver]);
```
上方程式碼，最差的情況下，會是

```js
setCard → render → setGoldCardCount → render → setRound → render → setIsGameOver → render
```

這樣就會有三個不必要的渲染

```js
 // ✅ Calculate all the next state in the event handler
    setCard(nextCard);
    if (nextCard.gold) {
      if (goldCardCount <= 3) {
        setGoldCardCount(goldCardCount + 1);
      } else {
        setGoldCardCount(0);
        setRound(round + 1);
        if (round === 5) {
          alert('Good game!');
        }
      }
    }
```

所以應該改成這樣

### Initializing the application
這邊再說的問題是在 development 環境時，useEffect 會執行兩次的問題

但是Login效果不能執行兩次，因為可能會拿到不同的token

```js
function App() {
  // 🔴 Avoid: Effects with logic that should only ever run once
  useEffect(() => {
    loadDataFromLocalStorage();
    checkAuthToken();
  }, []);
  // ...
}

// 改成這樣可以避免第二次的執行
let didInit = false;

function App() {
  useEffect(() => {
    if (!didInit) {
      didInit = true;
      // ✅ Only runs once per app load
      loadDataFromLocalStorage();
      checkAuthToken();
    }
  }, []);
  // ...
}

// 針對環境變數去決定是否call api
if (typeof window !== 'undefined') { // Check if we're running in the browser.
   // ✅ Only runs once per app load
  checkAuthToken();
  loadDataFromLocalStorage();
}
```

### Notifying parent components about state changes

### Passing data to the parent 


## Recap
1. If you can calculate something during render, you don’t need an Effect.

意思是說狀態如果會在 `re-render` 階段更新的話，就不用使用到 `useEffect`

2. To cache expensive calculations, add useMemo instead of useEffect

要緩存昂貴的計算，請添加 `useMemo` 而不是 `useEffect`

3. If you need to update the state of several components, it’s better to do it during a single event.

如果您需要更新多個組件的狀態，最好在單個事件期間執行。
