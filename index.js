import React from "react";
import {render} from "react-dom";
import configureStore from "./src/store/configureStore";
import Root from "./src/containers/root/Root";
import "babel-polyfill";
const store = configureStore();

render(
    <Root store={store}/>,
    document.getElementById('root')
);
