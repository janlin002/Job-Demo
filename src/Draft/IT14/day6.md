# 一天一套件，工作沒煩惱 - formik + yup

今天要介紹 Formik + Yup，會一次介紹兩個套件是因為他們有密不可分的關係

## 什麼是 Formik，為甚麼需要搭配 Yup？

Formik 是一個表單管理工具，如果不用的話，開發者可能會需要多有 state 去管理，為什麼需要 Yup?是因為 Formik 只做管理但不做驗證，所以我們會需要 Yup 幫我們做驗證

> Formik is designed to manage forms with complex validation with ease. Formik supports synchronous and asynchronous form-level and field-level validation. Furthermore, it comes with baked-in support for schema-based form-level validation through Yup. This guide will describe the ins and outs of all of the above.

## 為什麼需要 Formik+Yup

其實也可以不用，如果你對於你的表單內容有 100% 把握可以掌控的話，就可以不用，不過如果表單內容變多時，狀態會變得很難掌控，透過 Formik+Yup 可以讓我們專注於處理資料，而不用去擔心狀態丟失的問題

## 環境安裝

[Formik](https://github.com/jaredpalmer/formik):

```
 npm install formik --save
```

[Yup](https://github.com/jquense/yup):

```
npm i yup
```

## 怎麼使用？

接下來會介紹基本的兩個用法，嚴格說起來是一種，因為最終的目的都是要去做表單跟驗證

### 情境

今天希望有一個 Form 可以去讓顧客輸入 name, age, sex，並且三筆資料都是必填

## `<Formik>`

> <Formik> is a component that helps you with building forms. It uses a render props pattern made popular by libraries like React Motion and React Router.

`<Formik>` 就是一個 Component，讓你把資料透過傳遞 Props 的方法傳進去，然後在 Component 中做處理，相信 React 開發者一定都能了解

**實作情境題**

```js
<Formik
  initialValues={...}
  validationSchema={...}
  onSubmit={(values) => {
    console.log(values);
  }}
>
  ....
</Formik>
```

### initialValues -> 預設值

這個參數接收一個 Object，裡面包有所有表單的預設值，以這題來說，預設值會長這樣：

```js
const initValue = {
  name: "",
  age: "",
  sex: "",
};
```

### validationSchema -> 驗證項目

這是要驗證的部分，我們可以選擇是否為必填，錯誤訊息有是什麼：

```js
const myValidation = Yup.object().shape({
  name: Yup.string().required("名字 為必填欄位"),
  age: Yup.number().required("年齡 為必填欄位"),
  sex: Yup.string().required("性別 為必填欄位"),
});
```

基本架構就是:

```
要驗證的項目: Yup
        .型別
        .required(提示訊息)
        .其他條件
```

### onSubmit -> 點擊事件

這是點擊按鈕時所觸發，不過要提醒一下，這邊 button 的 type 要是 submit，不然會沒有效果

### 表單

```js
{
  ({ errors, touched }) => (
    <Form>
      {/* name */}
      <div>
        <span>name: </span>
        <Field name="name" />
        {errors.name && touched.name ? <div>{errors.name}</div> : null}
      </div>

      {/* age */}
      <div>
        <span>age: </span>
        <Field name="age" />
        {errors.age && touched.age ? <div>{errors.age}</div> : null}
      </div>

      {/* sex */}
      <div>
        <span>sex: </span>
        <Field name="sex" />
        {errors.sex && touched.sex ? <div>{errors.sex}</div> : null}
      </div>

      <button type="submit">Submit</button>
    </Form>
  );
}
```

今天 Formik 提供了一個 Component 叫`<Field>`，

> <Field /> will automagically hook up inputs to Formik. It uses the name attribute to match up with Formik state. <Field /> will default to an HTML <input /> element.

簡單來說就是打包好的 input

值得注意的是:

```js
{
  errors.name && touched.name ? <div>{errors.name}</div> : null;
}
```

這行程式碼代表如果有錯誤，會把我們在 validationSchema 所下的相對應錯誤 render 到畫面上，例如：當今天如果我沒有填寫某一必填欄位，就按送出，那麼畫面上可能就會出現`XXX 為必填欄位`

以上都寫完後，我們來看畫面:

![submit](./image/Formik-Yup/%E8%9E%A2%E5%B9%95%E9%8C%84%E8%A3%BD%202022-09-04%20%E4%B8%8B%E5%8D%888.21.35.gif)

我們故意不填性別欄位，所以他跟我們提醒說`性別 為必填欄位`

> 這邊沒有做美化，所以美化部分就交給讀者了

## `useFormik`

> useFormik() is a custom React hook that will return all Formik state and helpers directly.

基本上他跟我們上面所說的`<Formik>`一樣，但寫法更漂亮(筆者個人認爲)，兩個的比較可以看這篇[Issue](https://github.com/jaredpalmer/formik/discussions/2851)

**實作情境題**

基本概念一樣，會有 initialValues 跟 validationSchema

```js
const formik = useFormik({
  initialValues: initValue,
  validationSchema: Yup.object({
    name: Yup.string().required("名字 為必填欄位"),
    age: Yup.number().required("年齡 為必填欄位"),
    sex: Yup.string().required("性別 為必填欄位"),
  }),
  onSubmit: (values) => {
    console.log(values);
  },
});
```

表單部分:

```js
<form onSubmit={formik.handleSubmit}>
  {/* name */}
  <div>
    <label htmlFor="name">name: </label>
    <input
      type="text"
      name="name"
      id="name"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.name}
    />
    {formik.touched.name && formik.errors.name && (
      <span className="text-red-400">{formik.errors.name}</span>
    )}
  </div>

  {/* age */}
  <div>
    <label htmlFor="age">age: </label>
    <input
      type="text"
      name="age"
      id="age"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.age}
    />
    {formik.touched.age && formik.errors.age && (
      <span className="text-red-400">{formik.errors.age}</span>
    )}
  </div>

  {/* sex */}
  <div>
    <label htmlFor="sex">sex: </label>
    <input
      type="text"
      name="sex"
      id="sex"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.sex}
    />
    {formik.touched.sex && formik.errors.sex && (
      <span className="text-red-400">{formik.errors.sex}</span>
    )}
  </div>

  <button type="submit">Submit</button>
</form>
```

須在最外層的`<form>`裡面加上 `onSubmit={formik.handleSubmit}`，這樣 Formik 就會去尋找`<form>`裡面的 button

## 結語

其實 Formik 可以玩的東西很多，不過以上的教學已經可以在工作上做使用了，希望各位讀者能夠看得懂，以上就是今天的文章，一樣有問題都歡迎在下方留言~~

那我們明天見~~

參考文章：

https://formik.org/

https://blog.shahednasser.com/how-to-create-and-validate-forms-in-react-using-formik-and-yup/
