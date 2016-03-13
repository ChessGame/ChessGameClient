import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router'
import DevTools from './DevTools';

import App from '../App';
import indexAbout from '../../components/about/IndexAboutComponent';
import indexBlog from '../../components/blog/IndexBlogComponent';
import indexChangeLog from '../../components/changeLog/IndexChangeLogComponent';
import NotMatch from '../../components/common/NotMatchComponent';

export default class Root extends Component {
    render() {
        const routes = (
            <Route path="/" component={App}>
                <Route path="blog" component={indexBlog}/>
                <Route path="changeLog" component={indexChangeLog}/>
                <Route path="about" component={indexAbout}/>
                <Route path="*" component={NotMatch}/>
            </Route>
        );
        const component = (
            <Router history={browserHistory}>
                {routes}
            </Router>
        );
        const { store } = this.props;
        return (
            <Provider store={store}>
                <div>
                    {component}
                    <DevTools />
                </div>
            </Provider>
        );
    }
}
