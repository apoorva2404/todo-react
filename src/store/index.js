import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from "redux";

import reducers from '../reducers';
import rootSaga from '../saga';

console.log("hiiiiiii before")

const logger = createLogger({});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware, logger)
)
console.log('hiiii after')
sagaMiddleware.run(rootSaga);

export default store;
