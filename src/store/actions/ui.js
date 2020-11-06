import { LOADING_FINISH, LOADING_START } from './actionsTypes';

export const startLoading = () => {
    return {
        type: LOADING_START
    }
}

export const stopLoading = () => {
    return {
        type: LOADING_FINISH
    }
}