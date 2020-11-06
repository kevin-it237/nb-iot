import { SET_FOODS, CLEAR_FOODS } from '../actions/actionsTypes';

const initialState = {
    foods: [],
    tempData: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FOODS:
            return {
                ...state,
                foods: action.foods,
                tempData: action.foods
            };
        case CLEAR_FOODS:
            return {
                ...state,
                foods: [],
                tempData: []
            };
        default:
            return state;
    }
};

export default reducer;
