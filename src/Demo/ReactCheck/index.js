import React, { useState } from 'react'

// test components
import BatchUpdate from './code/batchUpdate'
import UnControl from './code/uncontrol';
import RederProps from './code/renderProps'
import CantChangeProps from './code/cantChangeProps'
import DataBinding from './code/dataBinding'

const ReactCheck = () => {
  let [count, setCount] = useState(0);
  return (
    <>
      <DataBinding />
      {/* <div>React-Check</div> */}
    </>
  );
}

export default ReactCheck