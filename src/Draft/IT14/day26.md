# react-loading-skeleton

## 什麼是 react-loading-skeleton

應該問 loading-skeletong 是什麼？

相信各位讀者再進入 Youtube 或是 instagram 時，都會看到貼文部分，雖然還沒有內容卻有一個類似進度條的東西，一直在跑

![yt-skeleton](https://miro.medium.com/max/1400/1*QoDyVUqmC1O230RbD1rGoQ.png)

這個東西就是所謂的 loading-skeleton，它取代了傳統的整頁 Loading 效果，而是針對內容去做 Loading 效果

## 環境安裝

```
npm install react-loading-skeleton
```

## 怎麼使用

```
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
```

需在要使用的 Component 中，先寫上這兩行程式碼

### Skeleton

Skeleton 是主要顯示進度條的地方

```js
<Skeleton count={1} height={40} width={500} circle={false} />
```

### 常用的 Props:

- count:
  > The number of lines of skeletons to render. If count is a decimal number like 3.5, three full skeletons and one half-width skeleton will be rendered.

要顯示幾筆`Skeleton`，如果寫小數(0.5)的話，就會顯示一半的`Skeleton`

- circle(boolean):

  > Makes the skeleton circular by setting border-radius to 50%.

circle 會讓你的`Skeleton`有`border-radius: 50%`的效果，預設是 false

- className:
  可以客製化你的`Skeleton`樣式

### SkeletonTheme

這個 Component 可以客製化你的 `Skeleton`，不過建議是寫在大範圍的`Skeleton`，如果只是一兩筆的話，還是推薦寫成 Props

這邊要特別注意一下引入方式

正確:

```
import Skeleton, { SkeletonTheme} from 'react-loading-skeleton'
```

不是:

```
import { Skeleton, SkeletonTheme} from 'react-loading-skeleton'
```

常用 Props:

- baseColor
  > The background color of the skeleton.
- highlightColor
  > The highlight color in the skeleton animation.
- width
  > The width of the skeleton.
- height
  > The height of each skeleton line.
  > -borderRadius
  > The border radius of the skeleton.

## 結語

筆者個人蠻喜歡這種顯示 Loading 的方式，感覺更為舒服，比起過往大大的 Loading，轉完頭都暈了

> 以上就是今天的文章，有任何問題都歡迎留言
