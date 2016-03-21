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
 * @Date: 2016/3/8 17:05
 * @Description: 博客组件
 * @Copyright(©) 2015 by xiaomo.
 **/
import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import BlogList from "../blog/BlogListComponent";
import * as BlogActions from "./../../actions/BlogActions";
export default class Blog extends Component {

    render() {
        const {visible, blogActions} = this.props;
        console.log(blogActions);
        return (
            <BlogList source="/src/data/blogs.json" visible={visible} actions={blogActions}/>
        )
    }

}

function mapState(state) {
    return {
        visible: state.visible
    };
}

function mapDispatch(dispatch) {
    return {
        blogActions: bindActionCreators(BlogActions, dispatch)
    };
}

export default connect(mapState, mapDispatch)(Blog);