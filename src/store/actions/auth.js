import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTH_SET_INFO, LOGOUT } from './actionsTypes';
import { startLoading, stopLoading} from './index';

const API_KEY = "AIzaSyBnzstF821RxAEGO2YNbGJySxJGNUP5KMY";

export const authSetData = (authData) => {
    return {
        type: AUTH_SET_INFO,
        authData: authData
    }
}

export const clearAuth = () => {
    return {
        type: LOGOUT
    }
}

export const authStartStoreData = (authData) => {
    return dispatch => {
        dispatch(authSetData(authData));
        AsyncStorage.setItem('auth:data', JSON.stringify(authData))
        AsyncStorage.setItem('auth:token', authData.idToken)
    }
}

// when click on login or signup
export const tryAuth = (authData, authMode) => {
    return dispatch =>  {
        dispatch(startLoading());
        let url = "";
        let data = null;
        if(authMode === "signin") {
            url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" + API_KEY;
            data = {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true 
            };
        } else {
            url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=" + API_KEY;
            data = {
                email: authData.email,
                displayName: authData.username,
                password: authData.password,
                returnSecureToken: true
            };
        } 
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res =>  res.json())
        .then(parseRes => {
            dispatch(stopLoading())
            if(!parseRes.idToken) {
                if (parseRes.error.message == "EMAIL_NOT_FOUND") {
                    alert("Email introuvable. Veuillez vous inscrire.")
                } else if (parseRes.error.message == "EMAIL_EXISTS") {
                    alert("Adresse Email déja utilisée.")
                }else if (parseRes.error.message == "INVALID_PASSWORD") {
                    alert("Mot de passe invalide.")
                } else {
                    alert("Une érreur s'est produite. Veuillez réessayez.")
                }
            } else {
                // Succeful login or singup
                dispatch(authStartStoreData(parseRes))
                ToastAndroid.show('Vous êtes connecté !', ToastAndroid.SHORT);
            }
        })
        .catch(err => {
            dispatch(stopLoading())
            alert("Erreur de connection. Veuillez reéssayez.")
        });
    }
}

export const authClearStorage = () => {
    return dispatch => {
        AsyncStorage.removeItem('auth:data')
        AsyncStorage.removeItem('auth:token')
    }
}

// Logout
export const logout = () => {
    return dispatch => {
        dispatch(authClearStorage())
        .then(() => {
            // go to a screen
            alert('Vous êtes déconnecté!')
        })
        dispatch(authLogout())
    }
}

// Logout
export const authLogout = () => {
    return {
        type: LOGOUT
    }
}