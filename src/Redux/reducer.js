import { CHANGE_LANG } from './actionType'

const defaultState = {
  localeLanguage: 'en'
}

export default (state = defaultState,action)=>{
  switch (action.type) {
  case CHANGE_LANG:{
    const value = action.payload
    return { ...state,  localeLanguage: value }
  }
    
  default:
    return state
  }
}