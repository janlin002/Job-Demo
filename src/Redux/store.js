import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import { mySaga } from '../saga'
import { logger } from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit'

const sagaMiddleware = createSagaMiddleware()

// const store = createStore(reducer);
const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger))
// const store = configureStore(reducer)
export default store

sagaMiddleware.run(mySaga)