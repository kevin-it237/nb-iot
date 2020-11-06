import { LOADING_FINISH, LOADING_START } from '../actions/actionsTypes';

const initialState = {
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_START:
            return {
                loading: true
            };
        case LOADING_FINISH:
            return {
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;
