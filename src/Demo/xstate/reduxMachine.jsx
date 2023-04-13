import {
  createMachine,
  interpret
} from 'xstate'

const reduxMachine = createMachine({
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
  
const promiseService = interpret(reduxMachine).onTransition((state) =>
  console.log(state.value)
)
  
// Start the service
promiseService.start()
// => 'pending'
  
promiseService.send({ type: 'RESOLVE' })
// => 'resolved'