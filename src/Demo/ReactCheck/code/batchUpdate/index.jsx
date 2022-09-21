import React, { useState } from 'react'

function Parent() {
  let [count, setCount] = useState(0);
  return (
    <div onClick={() => setCount(count + 1)}>
        Parent clicked {count} times
      <Child />
    </div>
  );
}
  
function Child() {
  let [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
    Child clicked {count} times
    </button>
  );
}

export default Parent