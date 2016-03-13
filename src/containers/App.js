import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router'

import '../../main.css';
import 'antd/lib/index.css';
import 'bootstrap/dist/css/bootstrap.css';

import Counter from './../components/CounterComponent';
import * as CounterActions from './../actions/CounterActions';

export class XiaoMo extends Component {

    render() {
        const {counter,counterActions} = this.props;
        console.log("顶层app的counter:" + counter);
        return (
            <div>
                <div>
                    <ul>
                        <li ><Link to={`/`}>{'首页'}</Link></li>
                        <li ><Link to={`/blog`}>{'博客'}</Link></li>
                        <li ><Link to={`/changeLog`}>{'更新日志'}</Link></li>
                        <li ><Link to={`/about`}>{'关于我'}</Link></li>
                    </ul>
                    {this.props.children}
                    <div>
                        <Counter counter={counter} actions={counterActions}/>
                    </div>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    return {
        counter: state.counter
    };
}

function mapDispatch(dispatch) {
    return {
        counterActions: bindActionCreators(CounterActions, dispatch)
    };
}

export default connect(mapState, mapDispatch)(XiaoMo);
