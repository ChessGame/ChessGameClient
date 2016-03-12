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
import $ from 'jquery';
import SideBar from './SideBarComponent';
import { Router, Route,IndexRoute, Link, browserHistory } from 'react-router'
import App from './../../containers/App';
import NotMatch from './../common/NotMatchComponent';
import IndexBlog from './../blog/IndexBlogComponent';
import IndexChangeLog from './../changeLog/IndexChangeLogComponent';
import IndexAbout from './../about/IndexAboutComponent';

export default class NavBar extends Component {

    state = {
        menus: [],
        name: '',
        path: '',
        component: ''
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
                    <li key={index}>
                        <Link to={menu.path} className="menu-font active">{menu.name}</Link>
                    </li>
                );
            });
        }
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">小莫</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            {ms}
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <SideBar source="/src/data/KV/user.json"/>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

}