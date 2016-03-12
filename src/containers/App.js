import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../../main.css';
import 'antd/lib/index.css';
import 'bootstrap/dist/css/bootstrap.css';

import Counter from '../components/CounterComponent';
import Footer from '../components/common/FooterComponent'
import NavBar from '../components/common/NavbarComponent'
import * as CounterActions from '../actions/CounterActions';
import * as LoginActions from '../actions/LoginActions';

class MyApp extends Component {
    render() {
        const {counter,counterActions} = this.props;
        console.log("顶层app的counter:" + counter);
        return (
            <div>
                <Counter counter={counter} actions={counterActions}/>
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

export default connect(mapState, mapDispatch)(MyApp);
