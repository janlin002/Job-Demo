# 一天一套件，工作沒煩惱 - react-hook-form

今天要介紹跟昨天一樣的驗證，且最後會有筆者的小比較，所以千萬不要走開喔

## 什麼是 react-hook-form && 為什麼需要?

react-hook-form 跟 formik 一樣，都是讓我們可以用簡單的方式，方便管理 Form 裡面的資料

不過我這邊要提一下，react-hook-form 是我覺得蠻用心在經營自己的套件，從他們的 commmit 上面可以看到，每一個 commit 前面都加一個 emoji，以 emoji 來區分這個 commit 做了什麼是，這個想法其實蠻不錯的

## 環境安裝

react-hook-form:

```
npm install react-hook-form
```

## 如何使用

```js
import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
```

這段程式碼是從官網裡面擷取的，基本上 react-hook-form 只需要知道幾個東西就好:

### register

> register your input into the hook by invoking the "register" function

```
 <input defaultValue="test" {...register("example")} />
```

使用 register，可以讓你註冊一個欄位，以上面程式碼來說會就會長這樣

```
{
    example: ''
}
```

並且你可以給這個 input 條件：

```js
required
min
max
minLength
maxLength
pattern
validate

<form onSubmit={handleSubmit(onSubmit)}>
    <input {...register("firstName", { required: true, maxLength: 20 })} />
    <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
    <input type="number" {...register("age", { min: 18, max: 99 })} />
    <input type="submit" />
</form>
```

### handleSubmit

> "handleSubmit" will validate your inputs before invoking "onSubmit"

點擊事件，會在你按下按鈕後，驗證 input 匡裡面的內容

### watch

> watch input value by passing the name of it

就只是單純的去檢查是否是你要的值

```
watch('example') // 監聽example
```

### formState: { errors }

> errors will return when field validation fails

當表單內的內容跟自己定義的內容不符合時，會觸發 errors

### setValue

> 可以自由更改你 Form 裡面的 value

## Yup?!怎麼又是你?

```
npm install @hookform/resolvers yup
```

其實表單管理的套件，基本上都可以搭配 Yup 或其她的驗證套件，筆者認為主要是為了: 可以統一做驗證，而不需要一個一個寫，相對維護也方便

```js
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <p>{errors.firstName?.message}</p>

      <input {...register("age")} />
      <p>{errors.age?.message}</p>

      <input type="submit" />
    </form>
  );
}
```

這邊跟上一篇一樣，我們需要先建立一個 schema，並且把包好的條件傳到 useForm 裡面

## react-hook-form vs Formik

先說套件本身沒有好壞，只是取決於你怎麼使用，並且一下比較是個人看法

Formik 相較於 react-hook-form 功能更多，也更全面，不過如果是工作上使用，需看專案大小，小型專案使用 react-hook-form 感覺就很夠用了，有時候太多的功能，反而可能會有意想不到的問題

## 結語

以上就是今天的文章，react-hook-form 個人覺得算是簡單的套件，沒有太複雜的功能，文件也篇幅也小，所以還沒開始玩 Formik 的讀者，不妨可以先來玩玩看 react-hook-form，一樣有任何問題，或是有對這兩個套件有什麼使用心得，都歡迎在下方留言，那我們明天見~~
