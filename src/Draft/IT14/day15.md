# 一天一套件，工作沒煩惱 - React-Modal

今天要講的是 React-modal，不過發現網路教學很少，可能是沒什麼人在用(?

## 為什麼需要 React-Modal?

與其說為什麼需要 React-Modal，還不如說什麼時後可以用 React-Modal

今天如果你需要提示框的時候，你就可以考慮 React-Modal，當然是面上也有其他的套件可以選則，不過因為筆者在工作上有用到，所以今天就來介紹 React-Modal 吧~

## 環境安裝

```
npm install react-modal
```

## 怎麼使用

```js
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ReactModal() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button type="button" onClick={openModal}>
        Open Modal
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 style={{ color: "red" }}>Hello</h2>
        <button type="button" onClick={closeModal}>
          close
        </button>
        <div>I am a modal</div>
      </Modal>
    </div>
  );
}
```

首先我們需要先定義好 Modal 的樣式(這邊 UI 的部分，就交給讀者自己去發揮了)：

```js
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
```

然後我們要去監聽他什麼時候該開闔，這邊透過他提供的 API: `isOpen`，藉由 Boolean 來決定是否開啟，所以我們利用 UseState，來作監聽

```js
const [modalIsOpen, setIsOpen] = React.useState(false);

function openModal() {
  setIsOpen(true);
}

function closeModal() {
  setIsOpen(false);
}
```

預設是關閉的，當我們點擊觸發`openModal`時，Modal 會打開，反之我們點擊叉叉，請求關閉時，會觸發到`onRequestClose`進而執行`closeModal`，以關閉 Modal

基本上這就是基本的 React-Modal 了

## 結語

今天的文章比較短，主要是因為 React-Modal 本身並不會太複雜，只需要設計好自己喜歡的樣式，並且定義好開闔的監聽，簡單的 Modal 就完成了

> 一樣有問題，歡迎在下方留言
