import { GET_CRYPTO_FAILURE, GET_CRYPTO_STARTED, GET_CRYPTO_SUCCESS, GET_CRYPTO_ENDED } from './actionTypes'
import axios from 'axios';

export const addCrypto = () => {
    return dispatch => {
      dispatch(getCryptoStarted());
      axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,LTC,ETH,XRP&tsyms=USD,UAH')
        .then(res => {
          dispatch(getCryptoSuccess(res.data));
        })
        .then(() => dispatch(getCryptoEnded()))
        .catch(err => {
          dispatch(getCryptoFailure(err.message));
        });
    };
  };

const getCryptoSuccess = crypto => ({
    type: GET_CRYPTO_SUCCESS,
    payload: { 
      ...crypto 
    }
})

const getCryptoStarted = () => ({
    type: GET_CRYPTO_STARTED,
    payload: {
      loading: true
    }
});

const getCryptoEnded = () => ({
  type: GET_CRYPTO_ENDED,
  payload: {
    loading: false
  }
});
  
const getCryptoFailure = error => ({
    type: GET_CRYPTO_FAILURE,
    payload: {
      error
    }
});