import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MyApp from './../App';

export default class Root extends Component {
    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <MyApp/>
            </Provider>
        );
    }
}
