import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../redux/actions/themeActions'
import { WiMoonAltWaxingCrescent5, WiMoonAltWaningGibbous5 } from 'react-icons/wi';
import { Wave, Random } from 'react-animated-text';

const Header = () => {
    const isDark = useSelector(state => state.themeState.isDark)
    const dispatch = useDispatch()

    const onChangeThemeBtnClick = () => {
        dispatch(changeTheme(!isDark))
    }

    return (
        <div className="header">
            <h1 className="logo" align="center">
                <Random text="Crypto father" />
                {isDark 
                    ? <WiMoonAltWaningGibbous5 style={{float:"right", marginRight:"30px"}} onClick={onChangeThemeBtnClick}/> 
                    : <WiMoonAltWaxingCrescent5 style={{float:"right", marginRight:"30px"}} onClick={onChangeThemeBtnClick}/>
                }
            </h1>
        </div>
    )
}

export default Header