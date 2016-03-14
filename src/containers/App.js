import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, Link,IndexLink, browserHistory } from 'react-router'
import '../../main.css';
import 'antd/lib/index.css';
import 'bootstrap/dist/css/bootstrap.css';

import Counter from './../components/CounterComponent';
import Footer from './../components/common/FooterComponent';
import Navbar from './../components/common/NavbarComponent';
import * as CounterActions from './../actions/CounterActions';

export default class App extends Component {

    render() {
        return (
            <div>
                <Navbar source="/src/data/menu.json"/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}
