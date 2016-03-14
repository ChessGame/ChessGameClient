import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route,IndexRoute,IndexLink, Link, browserHistory } from 'react-router'
import DevTools from './DevTools';

import App from '../App';
import indexAbout from '../../components/about/IndexAboutComponent';
import indexBlog from '../../components/blog/IndexBlogComponent';
import indexChangeLog from '../../components/changeLog/IndexChangeLogComponent';
import indexXiaoMo from '../../components/index/IndexComponent';
import NotMatch from '../../components/common/NotMatchComponent';

export default class Root extends Component {

    state = {
        source: '/src/data/menu.json',
        menus: [],
        name: '',
        path: ''
    };

    componentDidMount() {
        const source = this.props.source;
        fetch(source)
            .then(result=>result.json())
            .then(data=> {
                this.setState({
                    menus: data.menus
                });
            })
            .catch(err=>console.log(err));
    }

    render() {
        const { menus } = this.state;
        if (menus.length > 0) {
            var rs = menus.map(function (menu, index) {
                return (
                    <Route path={menu.path} key={index} component={indexBlog}/>
                );
            });
        }

        const { store } = this.props;
        return (
            <Provider store={store}>
                <div>
                    <Router history={browserHistory}>
                        <Route path="/" component={App}>
                            <IndexRoute component={indexXiaoMo}/>
                            {rs}
                            <Route path="*" component={NotMatch}/>
                        </Route>
                    </Router>
                    <DevTools />
                </div>
            </Provider>
        );
    }
}
