function throttled1(fn, delay = 500) {
  let oldtime = Date.now()
  return function (...args) {
    let newtime = Date.now()
    if (newtime - oldtime >= delay) {
      fn.apply(null, args)
      oldtime = Date.now()
    }
  }
}
  
// 到指定時間，才做執行，跟setimeout很像