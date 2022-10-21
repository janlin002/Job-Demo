/* eslint-disable import/no-unresolved */
import {
  GET_USER_INFO,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILURE,
  RESET_USER_INFO
} from 'ActionTypes'

export const getUserInfo = (payload) =>({
  type: GET_USER_INFO,
  payload
})
export const getUserInfoSuccess = (payload) =>({
  type: GET_USER_INFO_SUCCESS,
  payload
})
export const getUserInfoFailure = (payload) =>({
  type: GET_USER_INFO_FAILURE,
  payload
})
export const resetUserInfo = (payload) =>({
  type: RESET_USER_INFO,
  payload
})