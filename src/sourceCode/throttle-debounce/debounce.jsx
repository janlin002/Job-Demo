import throttle from './throttle'

export default function (delay, callback, options) {
  const { atBegin = false } = options || {}
  return throttle(delay, callback, { debounceMode: atBegin !== false })
}