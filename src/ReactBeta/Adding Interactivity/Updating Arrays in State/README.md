[官網連結]()

|  表头   | avoid (mutates the array)  | prefer (returns a new array)  |
|  ----  | ----  |----  |
| adding  | push, unshift |concat, [...arr] spread syntax (example) |
| removing  | pop, shift, splice |filter, slice (example) |
| replacing  | splice, arr[i] = ... assignment |map (example) |
| sorting  | reverse, sort |copy the array first (example) |

跟 Object 一樣提倡 immutable