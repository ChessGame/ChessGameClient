import * as types from '../constants/ActionTypes';

export function increment() {
    return {
        type: types.INCREMENT_COUNTER,
        index: 1
    };
}

export function decrement() {
    return {
        type: types.DECREMENT_COUNTER,
        index: 2
    };
}

export function incrementIfOdd() {
    return (dispatch, getState) => {
        const { counter } = getState();
        if (counter % 2 === 0) {
            return;
        }
        dispatch(increment());
    };
}

export function incrementAsync() {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment());
        }, 1000);
    };
}
