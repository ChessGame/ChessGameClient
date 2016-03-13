import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

import '../../main.css';
import 'antd/lib/index.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class App extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li ><Link to={`/`}>{'首页'}</Link></li>
                    <li ><Link to={`/blog`}>{'博客'}</Link></li>
                    <li ><Link to={`/changeLog`}>{'更新日志'}</Link></li>
                    <li ><Link to={`/about`}>{'关于我'}</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}
