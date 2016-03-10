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
 * @Description: 导航
 * @Copyright(©) 2015 by xiaomo.
 **/

import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';
import $ from 'jquery';

export default class Logo extends Component {

    state = {
        options: [],
        siteName: '',
        logoUrl: '',
        siteUrl: ''
    };

    componentDidMount() {
        this.getJSON();
    }

    getJSON() {
        $.get(this.props.source, function (result) {
            this.setState({
                options: result
            });
        }.bind(this));
    }

    render() {
        const { options } = this.state;
        return (
            <Navbar.Header>
                <Navbar.Brand>
                    <a href={options.siteUrl} className="change-logo-position"><img src={options.logoUrl}
                                                                                    alt={options.siteName}
                                                                                    className="logo"/></a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>

        )
    }

}