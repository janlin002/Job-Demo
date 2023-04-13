import { useMachine } from '@xstate/react'

import promiseMachine from './promiseMachine'

const Learn = () => {
  const [state, send] = useMachine(promiseMachine)

  // console.log(state.matches('pending'), 'pending')
  // console.log(state.matches('rejected'), 'rejected')
  // console.log(state.matches('resolved'), 'resolved')
  // console.log(state.value, 'initialState') // 當前狀態

  return (
    <div>
      {/** You can listen to what state the service is in */}
      {state.matches('pending') && <p>Loading...</p>}
      {state.matches('rejected') && <p>Promise Rejected</p>}
      {state.matches('resolved') && <p>Promise Resolved</p>}
      <div>
        {/** You can send events to the running service */}
        <button onClick={() => send('RESOLVE')}>Resolve</button>
        <button onClick={() => send('REJECT')}>Reject</button>
      </div>
    </div>
  )
}

export default Learn