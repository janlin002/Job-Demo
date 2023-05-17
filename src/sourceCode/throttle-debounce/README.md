## throttle

```js
const throttleFunc = throttle(
	1000,
	(num) => {
		console.log('num:', num);
	},
	{ noLeading: false, noTrailing: false }
);

const throttleFunc = throttle(1000, (num) => {
	console.log('num:', num);
});

```

## Api

### Cancelling

Debounce and throttle can both be cancelled by calling the cancel function.

```js
const throttleFunc = throttle(300, () => {
	// Throttled function
});

throttleFunc.cancel();

const debounceFunc = debounce(300, () => {
	// Debounced function
});

debounceFunc.cancel();
```

### noTrailing = false


### noLeading = false

noLeading 如果是 true，將會跳過第一次的 callback


如果同時調用 noTrailing = true 和 noLeading = true ，函式將不會執行