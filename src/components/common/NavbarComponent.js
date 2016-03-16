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

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SideBar from './SideBarComponent';
import { Router, Route, Link,IndexLink, browserHistory } from 'react-router'
import App from './../../containers/App';
import NotMatch from './../common/NotMatchComponent';
import IndexBlog from './../blog/IndexBlogComponent';
import IndexChangeLog from './../changeLog/IndexChangeLogComponent';
import IndexAbout from './../about/IndexAboutComponent';
import * as IndexActions from './../../actions/IndexActions';
export default class NavBar extends Component {

    state = {
        menus: [],
        name: '',
        path: ''
    };

    componentDidMount() {
        const source = this.props.source;
        console.log("navbar URL:" + source);
        fetch(source)
            .then(result=>result.json())
            .then(data=> {
                this.setState({
                    menus: data.menus
                });
            })
            .catch(err=>console.log(err));
    }

    render() {
        const { menus } = this.state;
        const {loginActions} = this.props;
        if (menus.length > 0) {
            var ms = menus.map(function (menu, index) {
                return (
                    <li className="menu-font active" key={index}>
                        <Link to={menu.path}>{menu.name}</Link>
                    </li>
                );
            });
        }
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <IndexLink className="navbar-brand" to={`/`}>{'小莫'}</IndexLink>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="list-unstyled"><IndexLink to={`/`}>{'首页'}</IndexLink></li>
                            {ms}
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <SideBar actions={loginActions}/>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

}

function mapDispatch(dispatch) {
    return {
        loginActions: bindActionCreators(IndexActions, dispatch)
    };
}
export default connect(mapDispatch)(NavBar);