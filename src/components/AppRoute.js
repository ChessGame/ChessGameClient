/**
 * 把今天最好的表现当作明天最新的起点．．～
 * いま 最高の表現 として 明日最新の始発．．～
 * Today the best performance  as tomorrow newest starter!
 * Created by IntelliJ IDEA.
 *
 * @author: xiaomo
 * @github: https://github.com/qq83387856
 * @email: hupengbest@163.com
 * @QQ_NO: 83387856
 * @Date: 2016/3/12 17:15
 * @Description: routes
 * @Copyright(©) 2015 by xiaomo.
 **/
import { Router, Route, Link, browserHistory } from 'react-router'
import indexAbout from 'about/IndexAboutComponent';
import indexBlog from 'blog/IndexBlogComponent';
import indexChangeLog from 'changeLog/IndexChangeLogComponent';
import NotMatch from 'common/NotMatchComponent';
import App from '../containers/App;
const Routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="blog" component={indexBlog}/>
            <Route path="changeLog" component={indexChangeLog}/>
            <Route path="about" component={indexAbout}/>
            <Route path="*" component={NotMatch}/>
        </Route>
    </Router>
);