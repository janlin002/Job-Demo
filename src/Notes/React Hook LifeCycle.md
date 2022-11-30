# React Hook LifeCycle

component 分成三步驟: mount update unmount

## Mount
- Run lazy initializers: 當我們的state更改時，會觸發 lazy initializers
- Render: 全部 state 準備的地方
- React updates DOM: virtual DOM 會跟 real DOM 比對，並且更新 real DOM
- Run Layout Effects: 執行 useLayoutEffect
- Browser paints the screen: DOM繪製在畫面上
- Run Effects: 執行 useEffect
## Update
可能觸發Update的原因:
- Parent of the component re-renders
- State of the component changes
- Context changes
### hook flow 
- Render
- React updates DOM
- Cleanup Layout Effects
- Run Layout Effects
- Browser paints the screen
- Cleanup Effects
- Run Effects
## unMount
可能觸發unMount的原因:
- Cleanup Layout Effects
- Cleanup Effects

https://blog.bhanuteja.dev/the-lifecycle-of-react-hooks-component
