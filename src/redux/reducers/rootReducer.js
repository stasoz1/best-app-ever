import { combineReducers } from 'redux'
import themeState from './themeState'
import cryptosState from './cryptosState'

export default combineReducers({ 
    themeState, 
    cryptosState 
})