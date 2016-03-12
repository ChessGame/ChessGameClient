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

export default function changeLog(state = [], action) {
    switch (action.type) {
        case types.LOGIN:
            return state;
        default:
            return state;
    }
}
