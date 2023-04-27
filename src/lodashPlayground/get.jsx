import React from 'react'

const Get = () => {
  const object = { a: [{ b: { c: 3 } }] }

  const lodashGet = (object, path, defaultValue)=> {
    // 先確認傳進來的 object 不是 null，如果是則直接回傳 defaultValue
    if (object == null) {
      return defaultValue
    }
  
    let count = 0
    const length = path.length

    console.log(length, 'length')
  
    // 依循路徑一層層走過該物件，以上面的例子來說，會是
    // path[0] 為 'a'，所以第一次迴圈 object 會變成 object['a'] 也就是 [{ b: { c: 3 } }]
    // 第一次迴圈後，count 加 1，所以變成 object[path[1]]
    // 也就是 [object['0']]，意即 { b: { c: 3 } }
    // 接著 count 再加一，所以 object 會成為 object[path[2]]
    // 也就是 object['b']，意即 { c: 3 }
    // 接著 count 再加一，所以 object 會成為 object[path[3]]
    // 也就是 object['c']，意即 3
    // 這時 count 為 4，由於 length 也是 4，因為 4 不小於 4，所以跳出迴圈
    while (object != null && count < length) {
      object = object[path[count++]]
      console.log(object, path[count++], count, object[path[count++]], 'object')
    }
  
    // 因為上面如果 object 是 null 的話，在走完 length 長度前，就會跳出 while 迴圈
    // 這種情況下，就代表依循該路徑，會找不到值，所以會是 undefined
    // 舉例來說，如果 path 是 ['a', '1', 'b', 'c']
    // 因為 object['1'] 會是 undefined，所以這時 while 迴圈會在 count 為 2 時終止
    // 這種情況下就會是 count < length，所以當 count < length，result 會是 undefined
    const result = count && count == length ? object : undefined
  
    // 如果 result 是 undefined，代表依循該路徑，會找不到值，所以回傳預設值
    // 如果依循路徑有找到值，就回傳 result

    console.log(result)
    return result === undefined ? defaultValue : result
  }

  lodashGet(object, 'a[0].b.c')

  //=> 3
  //   console.log(lodashGet(object, 'a[0].b.c'))
  return (
    <div>
        Get
    </div>
  )
}

export default Get
