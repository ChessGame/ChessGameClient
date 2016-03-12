import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import 'antd/lib/index.css';
import '../../main.css';
import 'bootstrap/dist/css/bootstrap.css';

import Counter from '../components/CounterComponent';
import Footer from '../components/common/FooterComponent'
import NavBar from '../components/common/NavbarComponent'
import * as CounterActions from '../actions/CounterActions';
import * as LoginActions from '../actions/LoginActions';

class MyApp extends Component {
    render() {
        const {counter} = this.props;
        return (
            <div>
                <NavBar source="/src/data/KV/menu.json"/>
                <Counter counter={counter}/>
                <Footer/>
            </div>
        );
    }
}

function select(state) {
    return {
        counter: state.counter
    };
}

function dispatch(dispatch) {
    return {
        actions: bindActionCreators(CounterActions, dispatch)
    };
}

export default connect(select, dispatch)(MyApp);
