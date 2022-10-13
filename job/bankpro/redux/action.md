''`js
import {
  GET_FIRST_ACTION,
  GET_FIRST_ACTION_SUCCESS,
  GET_FIRST_ACTION_FAILURE,
  RESET_FIRST_ACTION,
} from './Actiontype'

export const getFirstAction = (payload) => ({
  type: GET_FIRST_ACTION,
  payload,
})
export const getFirstActionSuccess = (payload) => ({
  type: GET_FIRST_ACTION_SUCCESS,
  payload,
})
export const getFirstActionFailure = (payload) => ({
  type: GET_FIRST_ACTION_FAILURE,
  payload,
})
export const resetFirstAction = (payload) => ({
  type: RESET_FIRST_ACTION,
  payload,
})
```
