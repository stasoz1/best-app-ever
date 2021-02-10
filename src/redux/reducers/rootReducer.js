import { combineReducers } from 'redux'
import theme from './theme'
import cryptosState from './cryptosState'

export default combineReducers({ 
    theme, 
    cryptosState 
})