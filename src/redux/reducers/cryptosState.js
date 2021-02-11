import { GET_CRYPTO_SUCCESS, GET_CRYPTO_STARTED, GET_CRYPTO_ENDED } from '../actions/actionTypes'

const initialState = {
    cryptos: {
        BTC: {
            USD: 47681.7,
            UAH: 1289.36
        },
        LTC: {
            USD: 172.74,
            UAH: 4673
        },
        ETH: {
            USD: 172.74,
            UAH: 4673
        },
        LOLIk: {
            USD: 172.74,
            UAH: 4673
        }
    },
    
    loading: null
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
        default: return state;
    }
}

export default cryptosState