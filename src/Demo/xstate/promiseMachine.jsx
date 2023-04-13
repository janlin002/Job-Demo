import { createMachine, interpret } from 'xstate'

// import { interpret as inter } from 'xstate-ninja'
// const service = interpret(inter)
const promiseMachine = createMachine({
  id: 'promise',
  initial: 'pending',
  states: {
    pending: {
      on: {
        RESOLVE: { target: 'resolved' },
        REJECT: { target: 'rejected' }
      }
    },
    resolved: {
      type: 'final'
    },
    rejected: {
      type: 'final'
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

export default promiseMachine