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

import React, {Component} from 'react';
import $ from 'jquery';

export default class SideBar extends Component {

    state = {
        user: {},
        name: '',
        headPhoto: ''
    };

    componentDidMount() {
        this.getJSON();
    }

    getJSON() {
        $.get(this.props.source, function (result) {
            this.setState({
                user: result
            });
        }.bind(this));
    }

    render() {
        const {user} = this.state;
        console.log(user.headPhoto);
        return (
            <div className="right headPhotoBox">
                <img src={user.headPhoto} alt="" className="headPhoto"/>
            </div>
        )
    }

}