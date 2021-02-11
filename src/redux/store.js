import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
const { REACT_APP_ENV } = process.env;

const composedEnhancers = REACT_APP_ENV == 'test' 
    ? compose(applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    : compose(applyMiddleware(thunk))

export default createStore(rootReducer, undefined, composedEnhancers)