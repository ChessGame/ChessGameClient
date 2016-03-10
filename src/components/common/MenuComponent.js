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
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import $ from 'jquery';

export default class Menu extends Component {

    state = {
        menus: [],
        siteName: '',
        siteUrl: ''
    };

    componentDidMount() {
        this.getJSON();
    }

    getJSON() {
        $.get(this.props.source, function (result) {
            this.setState({
                menus: result.menus
            });
        }.bind(this));
    }

    render() {
        const { menus } = this.state;
        if (menus.length > 0) {
            var ms = menus.map(function (menu, index) {
                return (
                    <MenuItem key={index} eventKey={index} href={ menu.path }>
                        { menu.name }
                    </MenuItem>
                );
            });
        }
        return (
            <Navbar.Collapse>
                <Nav>
                    {ms}
                </Nav>
            </Navbar.Collapse>
        )
    }

}