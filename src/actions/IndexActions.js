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
 * @Date: 2016/3/11 9:54
 * @Description: 首页操作
 * @Copyright(©) 2015 by xiaomo.
 **/

import * as actionTypes from '../constants/ActionTypes';

export function login() {
    return {
        type: actionTypes.LOGIN,
        index: 1
    };
}

export function loginFetch() {
    return {
        types: [actionTypes.LOGIN, actionTypes.LOGIN_SUCCESS, actionTypes.LOGIN_FAIL],
        promise: (fetch('http://www.xiaomo.info/api/login')
                .then(result=>result.json())
        )
    };
}

export function logout() {
    return {
        types: [actionTypes.LOGOUT, actionTypes.LOGOUT_SUCCESS, actionTypes.LOGOUT_FAIL],
        promise: (fetch('http://www.xiaomo.info/api/logout')
                .then(result=>result.json())
        )
    };
}

