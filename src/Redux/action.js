import { CHANGE_LANG, FETCH_DATA } from './actionType'

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