## uncontroled vs controled

[官網說明](https://zh-hant.reactjs.org/docs/uncontrolled-components.html)

[HACKMD](https://hackmd.io/@chrisHsiao/rknVooSkP)

### Controled

受控組件就是，就是單一來源，使 React 的 state 成為“唯一數據源”。

以下程式碼，input 的 value 來源是 state，無法透過其他方式直接更改值。

```js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "hello" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <input
        type="text"
        onChange={this.handleChange}
        value={this.state.value}
      />
    );
  }
}
```

### unControled

表單的資料是由 DOM 本身所處理的。
可以使用 ref 來從 DOM 節點中獲取表單數據。

```js
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```
