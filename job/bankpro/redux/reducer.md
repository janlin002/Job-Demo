```js
import {
  GET_FIRST_ACTION,
  GET_FIRST_ACTION_SUCCESS,
  GET_FIRST_ACTION_FAILURE,
  RESET_FIRST_ACTION,
} from './Actiontype'

const defaultState = {
  actionData: [],
  actionDataLoading: null,
  actionDataError: null,
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_FIRST_ACTION:
      return {
        ...state,
        actionData: [],
        actionDataLoading: true,
        actionDataError: null,
      }
    case GET_FIRST_ACTION_SUCCESS:
      return {
        ...state,
        actionData: action.payload,
        actionDataLoading: false,
        actionDataError: null,
      }
    case GET_FIRST_ACTION_FAILURE:
      return {
        ...state,
        actionDataLoading: false,
        actionDataError: action.error,
      }
    case RESET_FIRST_ACTION:
      return {
        ...state,
        actionData: [],
        actionDataLoading: null,
        actionDataError: null,
      }

    default:
      return state
  }
}

// combineRedcuer
```