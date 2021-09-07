import { CHANGE_LANG, FETCH_DATA_SUCCESS } from './actionType'

const defaultState = {
  localeLanguage: 'en',
  data: {}
}

export default (state = defaultState,action)=>{
  switch (action.type) {
  case CHANGE_LANG:{
    const value = action.payload
    return { ...state,  localeLanguage: value }
  }
  case FETCH_DATA_SUCCESS:{
    console.log('hello')
    return {
      ...state,
      data: action.payload.data,
    };
  }
    
  default:
    return state
  }
}