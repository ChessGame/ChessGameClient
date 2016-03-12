import * as types from '../constants/ActionTypes';

export default function counter(state = 0, action) {
    switch (action.type) {
        case types.INCREMENT_COUNTER:
            console.log("reducer中的counter:" + (state + 1));
            return state + 1;
        case types.DECREMENT_COUNTER:
            console.log("reducer中的counter:" + (state - 1));
            return state - 1;
        default:
            return state;
    }
}
