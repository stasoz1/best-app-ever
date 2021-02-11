import React from 'react'
import NumberFormat from 'react-number-format';
import { useSelector } from 'react-redux'

const cardStyleWhite = {
    backgroundColor: "#f1f1f1"
}

const cardStyleBlack = {
    backgroundColor: "#403b3b"
}

const textStyleWhite = {
    color: "#f1f1f1"
}

const textStyleBlack = {
    color: "#403b3b"
}

const Crypto = (props) => {
    let { cryptoName, cryptoCurrencies } = props.cryptos
    let isDark = useSelector(state => state.themeState.isDark)

    return (
        <div className="column" style={ isDark ? textStyleWhite : textStyleBlack }>
            <div className="card" style={ isDark ? cardStyleBlack : cardStyleWhite }>
                <div>
                    <h2><b>{cryptoName}</b></h2>
                </div>
                <ul className="card-group">
                    {cryptoCurrencies.map((cryptoCurrency, index) => {
                        return <NumberFormat value={cryptoCurrency[1]} displayType={'text'} thousandSeparator={true} renderText={value => <li key={index}>{cryptoCurrency[0]}: {value}</li>} />
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Crypto