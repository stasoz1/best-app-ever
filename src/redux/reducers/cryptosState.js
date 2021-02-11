import { GET_CRYPTO_SUCCESS, GET_CRYPTO_STARTED, GET_CRYPTO_ENDED, GET_CRYPTO_FAILURE } from '../actions/actionTypes'

const initialState = {
    cryptos: [],
    loading: null,
    error: null
};

const cryptosState = (state = initialState, action) => {
    switch (action.type) {
        case GET_CRYPTO_SUCCESS: {
            return { ...state, cryptos: action.payload } 
        }
        case GET_CRYPTO_STARTED: {
            return { ...state, loading: action.payload }
        }
        case GET_CRYPTO_ENDED: {
            return { ...state, loading: action.payload }
        }
        case GET_CRYPTO_FAILURE: {
            return { ...state, error: action.payload}
        }
        default: return state;
    }
}

export default cryptosState