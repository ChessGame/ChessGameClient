import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/CounterComponent';
import Footer from '../components/common/FooterComponent'
import NavBar from '../components/common/NavbarComponent'
import * as CounterActions from '../actions/CounterActions';
import * as LoginActions from '../actions/LoginActions';

class MyApp extends Component {
    render() {
        const {counter, dispatch } = this.props;
        return (
            <div>
                <NavBar source="/src/data/KV/menu.json"/>
                <Counter counter={counter}
                    {...bindActionCreators(CounterActions, dispatch)} />
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

export default connect(select)(MyApp);
