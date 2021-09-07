import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import { mySaga } from '../saga'
import { logger } from 'redux-logger'

const sagaMiddleware = createSagaMiddleware();

// const store = createStore(reducer);
const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
export default store

sagaMiddleware.run(mySaga);