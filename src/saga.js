
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

const FETCH_DATA = 'FETCH_DATA';
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

function* fetchData() {
  console.log('saga say hello')
  const data = yield call(
    () => fetch('https://httpbin.org/get')
      .then(response => response.json()),
  );
  yield put({ type: FETCH_DATA_SUCCESS, payload: { data } });
}

// 當今天 FETCH_DATA 被觸發後，執行fetchData()
export function* mySaga() {
  yield takeLatest(FETCH_DATA, fetchData);
}

export default mySaga;