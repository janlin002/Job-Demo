[官網連結](https://beta.reactjs.org/learn/separating-events-from-effects)

> Event handlers only re-run when you perform the same interaction again. Unlike event handlers, Effects re-synchronize if some value they read

### event handlers vs Effects

event handlers 是處理動作交互, 例如: 點擊(onClick)、變更(onChange)
effects 是在所有需要 synchronization 的地方