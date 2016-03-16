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

export const login = ()=> {
    return (dispatch)=> {
        loginFetch(dispatch);
    }
};

export function loginFetch(dispatch) {
    fetch("http://www.xiaomo.info/api/qq")
        .then(response=>response.json())
        .then(data=> {
            dispatch({
                type: actionTypes.LOGIN_SUCCESS,
                result: data
            })
        })
        .catch(e=> {
            dispatch({
                type: actionTypes.LOGIN_FAIL,
                err: e
            })
        })
}

