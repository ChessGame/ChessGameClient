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
import {Modal, Button} from "antd";

export default class BlogList extends Component {

    state = {
        loading: false,
        blogs: [],
        title: '',
        content: ''
    };

    componentDidMount() {
        const source = this.props.source;
        fetch(source)
            .then(result=>result.json())
            .then(data=> {
                this.setState({
                    blogs: data.blogs
                });
            })
            .catch(err=>console.log(err));
    }


    render() {
        const {visible} = this.state;
        const {blogs, showModal, handleOk, handleCancel} = this.state;
        if (blogs.length > 0) {
            var blogList = blogs.map(function (blog, index) {
                return (
                    <Modal title={blog.title} visible={visible} key={index}
                           onOk={handleOk} onCancel={handleCancel}>
                        {blog.content}
                    </Modal>
                );
            });
        }

        return (
            <div>
                <Button type="primary" onClick={showModal}>
                    显示对话框
                </Button>
                {blogList}
            </div>
        )
    }

}