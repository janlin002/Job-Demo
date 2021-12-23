import { 
  CHANGE_LANG,
  FETCH_DATA_SUCCESS,
  GTE_SAGA_TEST,
  GTE_SAGA_TEST_SUCCESS
} from './actionType'

const defaultState = {
  localeLanguage: 'en',
  data: {},
  content: {}
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
  case GTE_SAGA_TEST: {
    return {
      ...state,
      content: {}
    }
  }
  case GTE_SAGA_TEST_SUCCESS: {
    return {
      ...state,
      content: action.payload
    }
  }
  default:
    return state
  }
}