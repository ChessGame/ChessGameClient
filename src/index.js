import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import 'babel-polyfill';
import Root from './containers/root/Root';
const store = configureStore();

render(
    <Root store={store}/>,
    document.getElementById('root')
);
