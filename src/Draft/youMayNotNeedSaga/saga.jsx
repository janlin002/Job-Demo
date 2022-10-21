/* eslint-disable import/no-unresolved */
import {
  all, put, takeLatest, call,
} from 'redux-saga/effects'

import {
  GET_USER_INFO
} from 'ActionTypes'

import {
  getUserInfoSuccess,
  getUserInfoFailure
} from './action'
import axios from 'axios'

const getUserInfoApi = (payload) =>{
  return axios.post('xxxxxxxxxx', payload)
    .then((res)=>res.data)
}

function* getUserInfoSaga({ payload }){
  try {
    const response = yield call(getUserInfoApi, payload)

    if(response.messageid !== '0') throw response

    yield put(getUserInfoSuccess(response))
  }catch(error){
    yield put(getUserInfoFailure(error))
  }
}

function* rootSaga() {
  yield all([
    takeLatest(
      GET_USER_INFO,
      getUserInfoSaga,
    ),
  ])
}

export default rootSaga