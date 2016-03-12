/**
 * 把今天最好的表现当作明天最新的起点．．～
 * いま 最高の表現 として 明日最新の始発．．～
 * Today the best performance  as tomorrow newest starter!
 * Created by IntelliJ IDEA.
 *
 * @author: xiaomo
 * @github: https://github.com/qq83387856
 * @email: hupengbest@163.com
 * @QQ_NO: 83387856
 * @Date: 2016/3/11 9:56
 * @Description: 登录reducer
 * @Copyright(©) 2015 by xiaomo.
 **/

import * as types from '../constants/ActionTypes';
import fetch from 'whatwg-fetch';
import handleActionError from '../utils/handle-action-error'
import processResponse from '../utils/process-response'

const LOGIN_API = 'https://www.xiaomo.info';

export default function login(state = [], action) {
    switch (action.type) {
        case types.LOGIN:
            fetch({LOGIN_API}
                .then(processResponse)
                .then(res => dispatch({
                    type: types.LOGIN,
                    user: res
                }))
                .catch(error => handleActionError(dispatch, error, types.LOGIN)));
            return user;
        default:
            return state;
    }
}
