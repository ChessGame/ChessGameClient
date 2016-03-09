import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/XiaoMo';
import * as CounterActions from '../actions/CounterActions';

class MyApp extends Component {
    render() {
        const { counter, dispatch } = this.props;
        return (
            <Counter counter={counter}
                {...bindActionCreators(CounterActions, dispatch)} />
        );
    }
}

function select(state) {
    return {
        counter: state.counter
    };
}

export default connect(select)(MyApp);
