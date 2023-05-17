export default function (delay, callback, options) {
  const {
    noTrailing = false,
    noLeading = false,
    debounceMode = undefined
  } = options || {}
  /*
	 * After wrapper has stopped being called, this timeout ensures that
	 * `callback` is executed at the proper times in `throttle` and `end`
	 * debounce modes.
	 */
  let timeoutID
  let cancelled = false

  // Keep track of the last time `callback` was executed.
  // 跟踪上次執行“回調”的時間。
  let lastExec = 0

  // Function to clear existing timeout
  // 清除現有的timeout
  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID)
    }
  }

  // Function to cancel next exec
  // 取消下一次的執行
  // 要僅取消一個即將到來的 debounced 調用，您可以傳遞 commoningOnly: true
  function cancel(options) {
    const { upcomingOnly = false } = options || {}
    clearExistingTimeout()
    cancelled = !upcomingOnly
  }

  /*
	 * The `wrapper` function encapsulates all of the throttling / debouncing
	 * functionality and when executed will limit the rate at which `callback`
	 * is executed.
     * 
     * wrapper 會封裝所有的 "TD"，並且限制他們執行的時間
	 */
  function wrapper(...arguments_) {
    let self = this
    // 現在時間 - 最後一次執行的時間
    let elapsed = Date.now() - lastExec

    // 如果 commoningOnly: true 就跳過一次
    if (cancelled) {
      return
    }

    // Execute `callback` and update the `lastExec` timestamp.
    // 執行 callback 並且更新 lastExec 的時間

    // lastExec => 最後一次執行的時間
    function exec() {
      lastExec = Date.now()
      callback.apply(self, arguments_)
    }

    /*
		 * If `debounceMode` is true (at begin) this is used to clear the flag
		 * to allow future `callback` executions.
         * 
         * debounceMode 如果為 true，允許直行為來的 callback
		 */
    function clear() {
      timeoutID = undefined
    }

    if (!noLeading && debounceMode && !timeoutID) {
      /*
			 * Since `wrapper` is being called for the first time and
			 * `debounceMode` is true (at begin), execute `callback`
			 * and noLeading != true.
             * 
             * 當 wrapper 被執行，並且 debounceMode = true,執行 callback,並且將 noLeadin g轉為 !true
             * 預設
			 */
      exec()
    }

    // 執行過後將時間清空
    clearExistingTimeout()

    if (debounceMode === undefined && elapsed > delay) {
      // 如果 noLeading = true，就跳過這次更新
      // 等同於 upcomingOnly: true???
      if (noLeading) {
        /*
				 * In throttle mode with noLeading, if `delay` time has
				 * been exceeded, update `lastExec` and schedule `callback`
				 * to execute after `delay` ms.
                 * 
                 * throttle 並且是 noLeading = true 的模式下
                 * 當 delay 限制的時間被執行過
                 * 更新 lastExec ，並安排下一次的callback
				 */
        lastExec = Date.now()
        if (!noTrailing) {
          timeoutID = setTimeout(debounceMode ? clear : exec, delay)
        }
      } else {
        /*
				 * In throttle mode without noLeading, if `delay` time has been exceeded, execute
				 * `callback`.
                 * 
                 * throttle without noLeading 的模式下， 超過 delay 的時間的話，就執行 callback
				 */
        exec()
      }
    } else if (noTrailing !== true) {
      /*
			 * In trailing throttle mode, since `delay` time has not been
			 * exceeded, schedule `callback` to execute `delay` ms after most
			 * recent execution.
			 *
			 * If `debounceMode` is true (at begin), schedule `clear` to execute
			 * after `delay` ms.
			 *
			 * If `debounceMode` is false (at end), schedule `callback` to
			 * execute after `delay` ms.
             * 
             *  throttle mode，如果 delay 時間還沒有被執行，安排在最新執行
             * 
             * 如果 debounceMode = true，安排執行完成 delay 後執行 clear
             * 
             * 如果 debounceMode = false，在delay之後執行callback
			 */
      timeoutID = setTimeout(
        debounceMode ? clear : exec,
        debounceMode === undefined ? delay - elapsed : delay
      )
    }
  }

  wrapper.cancel = cancel

  // Return the wrapper function.
  return wrapper
}