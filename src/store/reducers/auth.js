import { AUTH_SET_INFO, AUTH_SET_TOKEN, LOGOUT, SOCIAL_AUTH_SET_INFO } from '../actions/actionsTypes';

const initialState = {
    token: null,
    username: '',
    email: '',
    refreshToken: '',
    expiryDate: '',
    photoURL: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SET_INFO:
            return {
                ...state,
                token: action.authData.idToken,
                username: action.authData.displayName,
                email: action.authData.email,
                refreshToken: action.authData.refreshToken,
                expiryDate: action.expiryDate
            };
        case SOCIAL_AUTH_SET_INFO:
            return {
                ...state,
                token: action.token,
                username: action.authData.displayName,
                email: action.authData.email,
                photoURL: action.authData.photoURL,
            };
        case AUTH_SET_TOKEN:
            return {
                ...state,
                token: action.token,
                expiryDate: action.expiryDate
            };
        case LOGOUT:
            return {
                ...state,
                token: null,
                username: null,
                email: null,
                refreshToken: null,
                expiryDate: null
            };
        default:
            return state;
    }
};

export default reducer;
