import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'

const composedEnhancers = compose(
    applyMiddleware(thunk))

export default createStore(rootReducer, undefined, composedEnhancers)