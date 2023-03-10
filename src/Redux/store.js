import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import { mySaga } from '../saga'
import { logger } from 'redux-logger'
// import { configureStore } from '@reduxjs/toolkit'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()

// const store = createStore(reducer);
const store = createStore(
  reducer, composeEnhancers(
    applyMiddleware(sagaMiddleware, logger)
  )
)
// const store = configureStore(reducer)
export default store

sagaMiddleware.run(mySaga)