let currentListener = undefined

function createSignal(initialValue) {
  let value = initialValue

  const subscribers = new Set()

  const read = () => {
    if (currentListener !== undefined) {
      subscribers.add(currentListener)
    }
    return value
  }
  const write = (newValue) => {
    value = newValue
    subscribers.forEach((fn) => fn())
  }

  return [read, write]
}

function createEffect(callback) {
  currentListener = callback
  callback()
  currentListener = undefined
}

export { createSignal, createEffect }