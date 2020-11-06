import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { AUTH_SET_INFO, AUTH_SET_TOKEN, LOGOUT, SOCIAL_AUTH_SET_INFO } from './actionsTypes';
import { startLoading, stopLoading} from './index';

const API_KEY = "AIzaSyBnzstF821RxAEGO2YNbGJySxJGNUP5KMY";

/** Social Account */
export const socialAuthSetData = (authData, token) => {
    return {
        type: SOCIAL_AUTH_SET_INFO,
        authData: authData,
        token: token
    }
}

export const socialAuthStartStoreData = (authData, token) => {
    return dispatch => {
        dispatch(socialAuthSetData(authData, token));
        AsyncStorage.setItem('auth:data', JSON.stringify(authData))
        AsyncStorage.setItem('auth:token', token)
        // AsyncStorage.setItem('auth:refreshToken', authData.refreshToken)
    }
}
/** */


export const authSetData = (authData, expiryDate) => {
    return {
        type: AUTH_SET_INFO,
        authData: authData,
        expiryDate: expiryDate
    }
}

export const authStartStoreData = (authData) => {
    return dispatch => {
        const expiresIn = authData.expiresIn;
        const now = new Date();
        const expiresDate = now.getTime() + expiresIn * 1000;
        dispatch(authSetData(authData, expiresDate));
        AsyncStorage.setItem('auth:expiryDate', expiresDate.toString())
        AsyncStorage.setItem('auth:data', JSON.stringify(authData))
        AsyncStorage.setItem('auth:token', authData.idToken)
        AsyncStorage.setItem('auth:refreshToken', authData.refreshToken)
    }
}

// Use when refresh token
export const authSetToken= (token, expiryDate) => {
    return {
        type: AUTH_SET_TOKEN,
        token: token,
        expiryDate: expiryDate
    }
}

// Use when refresh token
export const authStartStoreToken = (token ,expiresIn, refreshToken) => {
    return dispatch => {
        const now = new Date();
        const expiresDate = now.getTime() + expiresIn * 1000;
        dispatch(authSetToken(token, expiresDate));
        AsyncStorage.setItem('auth:expiryDate', expiresDate.toString())
        AsyncStorage.setItem('auth:token', token)
        AsyncStorage.setItem('auth:refreshToken', refreshToken)
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
            // Create a list for users (Optional) 
            // fetch("https://kamerfood-52bd2.firebaseio.com/users.json", {
            //     method:'POST',
            //     body: JSON.stringify({
            //         email: authData.email,
            //         displayName: authData.username
            //     })
            // }).catch(err => {})
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

export const authGetToken = () => {
    return (dispatch, getState) => {
        const promise = new Promise((resolve, reject) => {
            const token = getState().auth.token;
            const expiryDate = getState().auth.expiryDate;
            if(!token || new Date(expiryDate) <= new Date()) {
                let fetchedData;
                AsyncStorage.getItem('auth:data')
                .then(dataFromStorage => {
                    fetchedData = JSON.parse(dataFromStorage);
                    if (!fetchedData.idToken || !fetchedData) {
                        reject()
                        return;
                    }
                    return AsyncStorage.getItem('auth:expiryDate')
                })
                .then(expiryDate => {
                    const parsedExpiryDate = new Date(parseInt(expiryDate));
                    const now = new Date();
                    if(parsedExpiryDate > now) {
                        dispatch(authSetData(fetchedData));
                        resolve(fetchedData.idToken)
                    } else {
                        reject()
                    }
                })
                .catch(err => reject())
            } else {
                resolve(token)
            }
        });
        return promise
        .catch(err => { 
            return AsyncStorage.getItem('auth:refreshToken')
            .then(refreshToken => {
                return fetch('https://securetoken.googleapis.com/v1/token?key=' + API_KEY, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: "grant_type=refresh_token&refresh_token="+ refreshToken
                })
            })
            .then(res =>  res.json())
            .then(parsedData => {
                if(parsedData.id_token) {
                    // console.log('Refresh token work');
                    dispatch(authStartStoreToken(parsedData.id_token, parsedData.expires_in, parsedData.refresh_token))
                    return parsedData.id_token;
                } else {
                    dispatch(authClearStorage())
                }
            })
            .catch(err => {
                // console.log('Nothing')
                reject()
                dispatch(authClearStorage())
            })
        })
        .then(token => {
            if(!token) {
                throw(new Error())
            } else {
                return token;
            }
        })
    }
}

export const authAutoSignIn = () => {
    return dispatch => {
        dispatch(authGetToken())
        .then(token => {

        })
        .catch(err => {
            console.log("Can not auth")
            // Try with Social account
        });
    }
}

export const authClearStorage = () => {
    return dispatch => {
        AsyncStorage.removeItem('auth:expiryDate')
        AsyncStorage.removeItem('auth:data')
        AsyncStorage.removeItem('auth:token')
        AsyncStorage.removeItem('auth:refreshToken')
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