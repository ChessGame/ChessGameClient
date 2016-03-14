import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router'
import '../../main.css';
import 'antd/lib/index.css';
import 'bootstrap/dist/css/bootstrap.css';

import Counter from './../components/CounterComponent';
import * as CounterActions from './../actions/CounterActions';

export default class App extends Component {

    render() {
        return (
            <div>
                <ul className="list-inline">
                    <li className="list-unstyled"><Link to={`/`}>{'首页'}</Link></li>
                    <li className="list-unstyled"><Link to={`/blog`}>{'博客'}</Link></li>
                    <li className="list-unstyled"><Link to={`/changeLog`}>{'更新日志'}</Link></li>
                    <li className="list-unstyled"><Link to={`/about`}>{'关于我'}</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}
