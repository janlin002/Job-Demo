import { CHANGE_LANG } from './actionType'

export const changeLang = ( value)=>{
  return {
    type: CHANGE_LANG,
    payload:value
  }
}