[官網網址](https://beta.reactjs.org/learn/lifecycle-of-reactive-effects)

這章節在說明 React useEffect 的 life-cycle

```js
const Index = () => {
  const [text, setText] = React.useState(true)

  React.useEffect(()=>{
    console.log('componentDidMount')

    return (
      console.log('componentWillUnmount')
    )
  }, [text])

  return (
    <div>
      <button
        type="button"
        onClick={()=>setText(!text)}
      >
        點擊
      </button>
      {console.log('DOM 被渲染了~~')}
    </div>
   
  )
}

export default Index
```

以上程式碼微粒，我們可以看到一進入頁面，就會先渲染一次

```js
true
componentDidMount
componentWillUnmount
```

針對這個現象，React 有提出他的原因

> React always remounts each component once. In other words, React verifies that your Effect can re-synchronize by forcing it to do that immediately in development.

React 會在開發中強制 Effect 立即重新同步來驗證您的 Effect 是否可以重新同步。

Component 的生命週期有三個部分: mount, update, and unmount