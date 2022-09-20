import { 
  CHANGE_LANG,
  FETCH_DATA_SUCCESS,
  GTE_SAGA_TEST,
  GTE_SAGA_TEST_SUCCESS,

  TEST
} from './actionType'

const defaultState = {
  localeLanguage: 'en',
  data: {},
  content: {},

  testData: false
}

export default (state = defaultState,action)=>{
  switch (action.type) {
  case CHANGE_LANG:{
    const value = action.payload
    return { ...state,  localeLanguage: value }
  }
  case FETCH_DATA_SUCCESS:{
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
  case TEST: {
    return {
      ...state,
      testData: action.payload
    }
  }
  default:
    return state
  }
}