import { SET_FOODS, CLEAR_FOODS } from '../actions/actionsTypes';

export const setFood = (foods) => {
    return {
        type: SET_FOODS,
        foods: foods
    };
};

export const clearFood = () => {
    return {
        type: CLEAR_FOODS
    };
};
