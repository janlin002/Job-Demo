import { 
  CHANGE_LANG,
  FETCH_DATA_SUCCESS,
  GTE_SAGA_TEST,
  GTE_SAGA_TEST_SUCCESS,

  TEST,

  REDUCER_TEST,
  CHANGE_REDUCER_TEST,

  REDUX_CHECK,
} from './actionType';

const defaultState = {
  localeLanguage: 'en',
  data: {},
  content: {},

  testData: false,

  me: {
    name: '',
    age: '',
    sex: '',
    job: ''
  },

  reduxCheckData: 0
};

export default (state = defaultState,action)=>{
  switch (action.type) {
  case CHANGE_LANG:{
    const value = action.payload;
    return { ...state,  localeLanguage: value };
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
    };
  }
  case GTE_SAGA_TEST_SUCCESS: {
    return {
      ...state,
      content: action.payload
    };
  }
  case TEST: {
    return {
      ...state,
      testData: action.payload
    };
  }

  case REDUCER_TEST: 
    console.log('12345reducer');
    return {
      ...state,
      me: {
        ...state.me,
        age: action.payload
      }
    };

  case CHANGE_REDUCER_TEST:
    return {
      ...state,
      me: {
        ...state.me,
        age: action.payload
      }
    };

  case REDUX_CHECK:
    console.log(state.reduxCheckData, action.payload, 'reducer');
    return {
      ...state,
      reduxCheckData: state.reduxCheckData+=1
    };
  
  default:
    return state;
  }
};