import { createMachine, interpret } from 'xstate'

const ExecutionContextMachine = createMachine({
  id: 'execution-context',
  initial: 'ExecutionContext',
  states: {
    ExecutionContext:{
      on: {
        GLOBAL: { target: 'GlobalExecutionContext' },
        FUNCTION: { target: 'FunctionExecutionContext' }
      }
    },
    GlobalExecutionContext: {
      on: {
        CREATE_THIS_WINDOW: { target:'CreationPhase' }
      }
    },
    FunctionExecutionContext: {
      on: {
        JS_READ_CODE_HOISTING: { target: 'CreationPhase' }
      }
    },
    CreationPhase: {
      on: {
        CALL_STACH_CALL_QUEUE: { target: 'ExecutePhase' }
      }
    },
    ExecutePhase: {
      type: 'final'
    }
  }
})

export default ExecutionContextMachine