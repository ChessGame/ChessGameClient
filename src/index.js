import React from "react";
import {render} from "react-dom";
import configureStore from "./store/configureStore";
import Root from "./containers/root/Root";
import "babel-polyfill";
import "slick-carousel/slick/slick.css";
const store = configureStore();

render(
    <Root store={store}/>,
    document.getElementById('root')
);
