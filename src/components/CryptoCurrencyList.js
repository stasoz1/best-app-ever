import { useDispatch, useSelector } from 'react-redux'
import { addCrypto } from '../redux/actions/cryptoActions'
import { useEffect } from 'react'
import Crypto from './Crypto'

const CryptoCurrencyList = () => {
    // const dispatch = useDispatch()
    
    // useEffect(() => {
    //     dispatch(addCrypto())
    // }, [])

    
    const cryptos = useSelector(state => state.cryptosState.cryptos);
    const renderedListItems = Object.keys(cryptos).map((value, key) => {
        var destr = ({cryptoName: value, cryptoCurrency: [Object.keys(cryptos[value])]})
        return (<Crypto cryptos={destr} key={key}/>)
    })
    
    return(
        <div>
            {renderedListItems}
        </div>
    ) 
}

export default CryptoCurrencyList