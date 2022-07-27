import {
    call, put, takeLatest,
} from 'redux-saga/effects'

import {
    GET_FIRST_ACTION
} from './Actiontype'

import {
    getFirstActionSuccess,
    getFirstActionFailure
} from './action'
import axios from 'axios'

const FAKE_DATA = {
    messageid: '0',
    messageDesc: '',
    content: {
      data: '123'
    }
  }

const getFirstActionApi = (postValue) => {
    axios.post('/...', postValue)
    .then((res)=> res.data)
}

function* getFirstActionSaga(payload){
    try {
        const response = yield call(getFirstActionApi, payload)

        if(response.messageid !== '0') throw response

        yield put(getFirstActionSuccess(response))
    }catch(error){
        console.error(error)

        yield put(getFirstActionFailure({
            message: error.message,
        }))
    }
}

function* mySaga() {
    yield takeLatest(
        GET_FIRST_ACTION,
        getFirstActionSaga
    )
  }
  
  export default mySaga