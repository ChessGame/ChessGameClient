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
 * @Date: 2016/3/8 17:24
 * @Description: 登录
 * @Copyright(©) 2015 by xiaomo.
 **/

import React, {PropTypes,Component} from 'react';

export default class SideBar extends Component {
    static propTypes = {
        login: PropTypes.func.isRequired
    };

    state = {
        user: {},
        nickName: '',
        headPhoto: ''
    };

    render() {
        const {user} = this.props;
        console.log(user.headPhoto);
        return (
            <div className="headPhotoBox">
                <a href=""><img src={user.headPhoto} alt={user.nickName}/></a>
            </div>
        )
    }

}