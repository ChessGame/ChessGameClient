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

export default class NavBar extends Component {

    state = {
        menus: [],
        name: '',
        path: ''
    };

    componentDidMount() {
        this.getJSON();
    }

    getJSON() {
        $.get(this.props.source, function (result) {
            this.setState({
                links: result.links
            });
        }.bind(this));
    }

    render() {
        const { menus } = this.state;
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar">1</span>
                            <span className="icon-bar">2</span>
                            <span className="icon-bar">3</span>
                        </button>
                        <a className="navbar-brand" href="#">小莫</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">链接 <span className="sr-only">(current)</span></a></li>
                            <li><a href="#">链接</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

}