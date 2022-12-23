
import export 三步驟:
1. Make a new JS file to put the components in.
2. Export your function component from that file (using either default or named exports).
3. Import it in the file where you’ll use the component (using the corresponding technique for importing default or named exports).

|  Syntax   | Export statement  |  Import statement   |
|  ----  | ----  | ----|
| Default  | export default function Button() {} | import Button from './button.js'; |
| Named  | export function Button() {} | import { Button } from './button.js'; |



[官網連結](https://beta.reactjs.org/learn/importing-and-exporting-components)