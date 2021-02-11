import { CHANGE_THEME } from './actionTypes'

export const changeTheme = isDark => ({
    type: CHANGE_THEME,
    payload: isDark
})