/* eslint-disable import/no-unresolved */
import {
  GET_USER_INFO,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILURE,
  RESET_USER_INFO
} from 'ActionTypes'

export const initialState = {
  userInfo: {},
  userInfoLoading: null,
  userInfoError: null,
}

function reducer(state = initialState, action) {
  switch(action.type){
  case GET_USER_INFO:
    return {
      ...state,
      userInfo: {},
      userInfoLoading: true,
      userInfoError: null,
    }
  case GET_USER_INFO_SUCCESS:
    return {
      ...state,
      userInfo: action.payload,
      userInfoLoading: false,
      userInfoError: null,
    }
  case GET_USER_INFO_FAILURE:
    return {
      ...state,
      userInfoLoading: false,
      userInfoError: action.error,
    }
  case RESET_USER_INFO:
    return {
      userInfo: {},
      userInfoLoading: null,
      userInfoError: null,
    }

  default: return state
  }
  
}

export default reducer