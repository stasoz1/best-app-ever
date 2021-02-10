import React from 'react'
import { connect } from 'react-redux'

const Crypto = (props) => {
    console.log(props)
    let {cryptoName} = props
    return (
        <div className="card" style={{width: '18rem'}}>
            <div className="card-header">
                {cryptoName}
            </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item"></li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        </div>
    )
}

export default connect(
    null,
    null
)(Crypto)