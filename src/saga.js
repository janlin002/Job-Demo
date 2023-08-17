
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

const FETCH_DATA = 'FETCH_DATA';
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

import {
  GTE_SAGA_TEST,
  REDUCER_TEST,
} from './Redux/actionType';

import {
  getSagaTestSuccess,
  changeReducerTest
} from './Redux/action';

function* fetchData() {
  console.log('saga say hello');
  const data = yield call(
    () => fetch('https://httpbin.org/get')
      .then(response => response.json()),
  );
  yield put({ type: FETCH_DATA_SUCCESS, payload: { data } });
}

const FAKE_SAGA_API = {
  messageid: '0',
  messageDesc: '',
  content: {
    test: 'success'
  }
};

function getSagaTestApi(){
  return FAKE_SAGA_API;
}

function* getSagaTestSaga() {
  try{
    const response = yield call(getSagaTestApi);
    if(response.messageId !== '0') throw response;

    const resultData = response.content;
    console.log(resultData, 'resultData');

    yield put(getSagaTestSuccess(resultData));
  }catch(err){
    console.error(err);
    const errorMessage = {
      message: err.messageid !== '0' ? err.messageDesc : '',
    };
    // yield put()
  }
}

function* reducerTestSaga(){
  console.log('12345saga');
  try{
    console.log('123');
    yield put(changeReducerTest('234'));
  }catch(error){
    console.error(error);
  }
}

// 當今天 FETCH_DATA 被觸發後，執行fetchData()
export function* mySaga() {
  yield takeLatest(FETCH_DATA, fetchData);
  yield takeLatest(GTE_SAGA_TEST, getSagaTestSaga);
  yield takeLatest(REDUCER_TEST, reducerTestSaga);
}

export default mySaga;