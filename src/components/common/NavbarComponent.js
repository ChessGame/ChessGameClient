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
import Menu from './MenuComponent';
import Logo from './LogoComponent';


export default class NavBar extends Component {

    render() {
        return (
            <Navbar>
                <Logo source="src/data/Array/options.json"/>
                <Menu source="/src/data/KV/menu.json"/>
            </Navbar>
        )
    }

}