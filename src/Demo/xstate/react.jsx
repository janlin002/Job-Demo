import { useMachine } from '@xstate/react'
import { createMachine, interpret } from 'xstate'

const promiseMachine = createMachine({
  id: 'redux-data-flow',
  initial: 'view',
  states: {
    view: {
      on: {
        DISPATCH: { target: 'action' }
      }
    },
    action: {
      on: {
        SEND: { target: 'state' }
      }
    },
    state: {
      on: {
        SEND_TO_REDUCER: { target: 'reducer' },
        SEND_TO_SAGA: { target: 'saga' }
      }
    },
    reducer: {
      on: {
        CHANGE_VIEW: { target: 'view' }
      }
    },
    saga: {
      on: {
        CHANGE_REDUCER: { target: 'reducer' }
      }
    }
  }
})

const promiseService = interpret(promiseMachine).onTransition((state) =>
  console.log(state.value)
)

// Start the service
promiseService.start()
// => 'pending'

promiseService.send({ type: 'RESOLVE' })
// => 'resolved'

// const ReactXstate = () => {
//   const [state, send] = useMachine(promiseMachine)

//   return (
//     <div>
//       {/** You can listen to what state the service is in */}
//       {state.matches('pending') && <p>Loading...</p>}
//       {state.matches('rejected') && <p>Promise Rejected</p>}
//       {state.matches('resolved') && <p>Promise Resolved</p>}
//       <div>
//         {/** You can send events to the running service */}
//         <button onClick={() => send('RESOLVE')}>Resolve</button>
//         <button onClick={() => send('REJECT')}>Reject</button>
//       </div>
//     </div>
//   )
// }

// export default ReactXstate