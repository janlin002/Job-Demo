import React, { useState } from 'react'

// test components
import BatchUpdate from './code/batchUpdate'

const ReactCheck = () => {
  let [count, setCount] = useState(0);
  return (
    <BatchUpdate />
  );
}

export default ReactCheck