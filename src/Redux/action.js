import { 
  CHANGE_LANG,
  FETCH_DATA,
  GTE_SAGA_TEST,
  GTE_SAGA_TEST_SUCCESS,

  TEST,
  REDUCER_TEST,
  CHANGE_REDUCER_TEST,

  REDUX_CHECK
} from './actionType';

export const changeLang = ( value)=>{
  return {
    type: CHANGE_LANG,
    payload:value
  };
};

export const checkSaga = () =>{
  return {
    type: FETCH_DATA,
  };
};

export const getSagaTest = (payload) =>({
  type: GTE_SAGA_TEST,
  payload
});

export const getSagaTestSuccess = (payload) =>({
  type: GTE_SAGA_TEST_SUCCESS,
  payload
});

export const test = (payload) =>({
  type: TEST,
  payload
});

export const reducerTest = (payload) =>({
  type: REDUCER_TEST,
  payload
});
export const changeReducerTest = (payload) =>({
  type: CHANGE_REDUCER_TEST,
  payload
});

export const reduxCheck = (payload) =>({
  type: REDUX_CHECK,
  payload
});