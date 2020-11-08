import { AUTH_SET_INFO, LOGOUT } from '../actions/actionsTypes';

const initialState = {
    token: null,
    username: '',
    email: '',
    refreshToken: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SET_INFO:
            return {
                ...state,
                token: action.authData.idToken,
                username: action.authData.displayName,
                email: action.authData.email
            };
        case LOGOUT:
            return {
                ...state,
                token: null,
                username: null,
                email: null,
            };
        default:
            return state;
    }
};

export default reducer;
