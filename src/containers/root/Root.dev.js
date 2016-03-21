import React, {Component} from "react";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import DevTools from "./DevTools";
import App from "../App";
import indexChangeLog from "../../components/changeLog/IndexChangeLogComponent";
import IndexBlog from "../../components/blog/IndexBlogComponent";
import indexAbout from "../../components/about/IndexAboutComponent";
import indexXiaoMo from "../../components/index/IndexComponent";
import NotMatch from "../../components/common/NotMatchComponent";

export default class Root extends Component {

    render() {
        var components = (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={indexXiaoMo}/>
                    <Route path='/blog' component={IndexBlog}/>
                    <Route path='/changeLog' component={indexChangeLog}/>
                    <Route path='/about' component={indexAbout}/>
                    <Route path="*" component={NotMatch}/>
                </Route>
            </Router>
        );
        
        const {store} = this.props;
        return (
            <Provider store={store}>
                <div>
                    {components}
                    <DevTools />
                </div>
            </Provider>
        );
    }
}
