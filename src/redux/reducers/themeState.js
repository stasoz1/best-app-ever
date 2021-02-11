import { CHANGE_THEME } from "../actions/actionTypes";

const initialState = {
    isDark: false
};

const themeState = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME: {
            return { ...state, isDark: action.payload } 
        }
        default: return state;
    }
}

export default themeState