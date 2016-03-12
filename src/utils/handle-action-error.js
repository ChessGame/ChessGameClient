import { SHOW_ERROR } from '../constants/ActionTypes';

export default function handleActionError(dispatch, error, source) {
    return dispatch({
        type: SHOW_ERROR,
        source,
        payload: error
    })
}
