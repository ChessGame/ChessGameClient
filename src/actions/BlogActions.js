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

import * as types from "../constants/ActionTypes";


/**
 * 显示模块内容
 * @returns {{type, index: number}}
 */
export function showModal() {
    return {
        type: types.SHOW_MODAL,
        visible,
        index: 1
    };
}

/**
 * ok
 * @returns {{type, index: number}}
 */
export function handleOk() {
    return {
        type: types.HANDLE_OK,
        visible,
        index: 2
    };
}

/**
 * cancel
 * @returns {{type, index: number}}
 */
export function handleCancel() {
    return {
        type: types.HANDLE_CANCEL,
        visible,
        index: 3
    };

}