感覺只是為了 Pure，但沒有硬性規定

```
const FatherComponent = () => {

  const David = {
    name: 'David',
    age: 24,
    sex: 'male'
  }

  useEffect(()=>{
    console.log(David, 'david') // bill
  }, [David])

  return (
    <ChildComponent
      me={David}
    />
  )
}

const ChildComponent = ({ me }) => {
  me.name = 'bill'

  console.log(me) // bill

  return (
    <div>123</div>
  )
}

export default FatherComponent
```

從上方例子可看出，Props 還是可以做更改的
