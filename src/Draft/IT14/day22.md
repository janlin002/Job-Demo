# react-day-picker

今天要介紹的是 react 中的日期選擇器

## 什麼是 react-day-picker?

react-day-picker 是一款日期選擇器，他讓我們可以客製化日期選擇器，筆者自己公司目前就是使用這款套件，也覺得不管是樣式或是功能上都相當強大，所以推薦給各位

## 環境安裝

```
npm install react-day-picker date-fns
```

## 怎麼使用

這篇我想嘗試點不一樣的風格，加上官網真的寫得很清楚了，所以這篇不如我們改成翻譯？不過我會歸納出幾種常用功能，讓各位讀者可以一目瞭然知道該功能的對應位置

![meme](https://memeprod.ap-south-1.linodeobjects.com/user-template/0a1eebc7bd35334c028e4a1b285a4d95.png)

圖片取自 google

既然大家都贊成，那我們開始吧 :)

> 等等，記得所有 `標題` 都有加上連結，記得點擊連結去逛一下管網吧!

# DayPicker Basics

## [Navigating Months](https://react-day-picker.js.org/basics/navigation)

### [Change the default month](https://react-day-picker.js.org/basics/navigation#change-the-default-month)

透過`defaultMonth`去選擇預設的月份

```js
export default function App() {
  return <DayPicker defaultMonth={new Date(1979, 8)} />;
}
```

### [Controlling the current month](https://react-day-picker.js.org/basics/navigation#controlling-the-current-month)

透過`month`去決定目前的月份

```js
export default function App() {
  return <DayPicker month={month} onMonthChange={setMonth} footer={footer} />;
}
```

### [Limiting the month navigation](https://react-day-picker.js.org/basics/navigation#limiting-the-month-navigation)

夠過`fromYear`去決定可選最舊的月份是哪一個月，透過`toYear`去決定可選最新的月分是哪一個月

```js
export default function App() {
  return (
    <DayPicker defaultMonth={new Date(2015, 0)} fromYear={2015} toYear={2018} />
  );
}
```

### [Using a drop-down to change the month](https://react-day-picker.js.org/basics/navigation#using-a-drop-down-to-change-the-month)

使用`captionLayout="dropdown"`可讓我們的年份跟日期選擇是使用`dropdown`的方式去選擇

```js
export default function App() {
  return <DayPicker fromYear={2015} toYear={2025} captionLayout="dropdown" />;
}
```

### [Disabling navigation](https://react-day-picker.js.org/basics/navigation#disabling-navigation)

`disableNavigation`會讓整個選擇器沒辦法切換月份

```js
export default function App() {
  return <DayPicker mode="single" disableNavigation />;
}
```

## [Customization](https://react-day-picker.js.org/basics/customization)

### [Multiple months](https://react-day-picker.js.org/basics/customization#multiple-months)

使用`numberOfMonths`可讓我們生成多個日曆

```js
export default function App() {
  return <DayPicker numberOfMonths={2} />;
}
```

### [Showing the week numbers](https://react-day-picker.js.org/basics/customization#showing-the-week-numbers)

使用`showWeekNumber`，可以顯示目前為第幾週，1 月 1 號那個禮拜為第 1 週，以此類推

```js
export default function App() {
  return <DayPicker showOutsideDays />;
}
```

## [Selecting Days](https://react-day-picker.js.org/basics/selecting-days)

透過`mode`，去決定可點選的日期數量，分成`single`, `multiple`跟 `range`

## [Modifiers](https://react-day-picker.js.org/basics/modifiers)

### [Disabling days](https://react-day-picker.js.org/basics/modifiers#disabling-days)

使用`disabled`，可以自己去決定不可選的日期

### [Hidden days](https://react-day-picker.js.org/basics/modifiers#hidden-days)

使用`hidden`，可以讓日期隱藏起來

## [Styling DayPicker](https://react-day-picker.js.org/basics/styling)

可透過`modifiersClassNames`或`modifiersStyles`去客製化我們選擇的日期

## [Localization](https://react-day-picker.js.org/basics/localization)

使用`locale`可以去預設目前的國家

## 結語

今天的文章比較不一樣，主要是想說可以換點不一樣的方式，其實 react-day-picker 的文檔都寫得蠻清楚的，這篇只是大概幫大家整理出重點，那麼今天文章就到這裡，我們明天見
