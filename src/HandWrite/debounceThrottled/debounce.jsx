function debounce(func, wait) {
    let timeout;
  
    return function () {
      let context = this; // 保存this指向
      let args = arguments; // 拿到event对象
  
      clearTimeout(timeout)
      timeout = setTimeout(function(){
        func.apply(context, args)
      }, wait);
    }
  }
  
  // 簡易版
  var timer; // 维护同一个timer
  function debounce2(fn, delay) {
    clearTimeout(timer);
    timer = setTimeout(function(){
      fn();
    }, delay);
  }