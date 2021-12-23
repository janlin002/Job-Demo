import { 
  CHANGE_LANG,
  FETCH_DATA,
  GTE_SAGA_TEST,
  GTE_SAGA_TEST_SUCCESS
} from './actionType'

export const changeLang = ( value)=>{
  return {
    type: CHANGE_LANG,
    payload:value
  }
}

export const checkSaga = () =>{
  return {
    type: FETCH_DATA,
  }
}

export const getSagaTest = (payload) =>({
  type: GTE_SAGA_TEST,
  payload
})

export const getSagaTestSuccess = (payload) =>({
  type: GTE_SAGA_TEST_SUCCESS,
  payload
})