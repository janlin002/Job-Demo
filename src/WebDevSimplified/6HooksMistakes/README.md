這篇主要是來自 [YT-Link](https://www.youtube.com/watch?v=GGo3MVBFr1A)

## 6 個 Hook 使用上常犯的錯誤

1. Using state when you dont't need it
2. Not using the function version of useState
3. State does not change immediately(立即的)
4. Unnecessary useEffects
5. Referential equality mistakes - 引用相等錯誤
6. Not aborting fetch requests - 不中止提取請求

## Using state when you dont't need it

這邊提到的觀念是如果今天不是需要即時更新的數據，不應該用 useState，因為畫面會一直做渲染，應該該使用 useRef

useState:
```js
const [email, setEmail] = useState('')


<input 
    type="text"
    id="email"
    onChange={(e)=>setEmail(e.target.value)}
/>
```

useRef:
```js
const emailRef = useRef()

<input 
    ref={emailRef}
    type="text"
    id="email"
/>
```

## Not using the function version of useState

這邊講到的觀念是 useState 的 snapShot

```js
const [count, setCount] = React.useState(0)

const handleClick = (item) => {
    setCount(count + item)
  }
```

上方的程式碼，會一直在 0 + 1

需要改成下方的寫法

```js
const [count, setCount] = React.useState(0)

const handleClick = (item) => {
    setCount(prev => prev + item)
  }
```

## State does not change immediately(立即的)

這邊講到的觀念是 useState 不是即時的，所以不要在呼叫的function中下console，會得不到預期的結果

```js
  // corrent
  React.useEffect(()=>{
    console.log(count)
  }, [count])

  const handleClick = (item) => {
    setCount((prev)=> prev + item)

    // error
    console.log(count)
  }
```

## Unnecessary useEffects

不要設立多餘的 useEffect

```js
const SetStateSnapshot = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  //   const [fullName, setFullName] = useState('')

  const fullName = `${firstName} ${lastName}`

  //   useEffect(()=>{
  //     setFullName(`${firstName} ${lastName}`)
  //   }, [firstName, lastName])
  return (
    <div>
      <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
      <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
      {fullName}
    </div>
    
  )
}
```

這邊可看到 fullName 的 useState 跟 useEffect 都是多餘的，應該刪除

## Referential equality mistakes - 引用相等錯誤

這邊要講的觀念是 person 因為是 object 所以會有 by reference 問題，當如果發現跟 person stack 不同，就會觸發 re-render

```js
const personA = { name: 'jan'}

const personB = { name: 'jan'}

personA === personB // false

personC = personA

personC === personA // true
```

再者就是避免 更改 darkMode re-render age, name 所以把 age, name 包在 useMemo 中，做隔離
