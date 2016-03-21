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
 * @Date: 2016/3/8 17:24
 * @Description: 导航
 * @Copyright(©) 2015 by xiaomo.
 **/

import React, {Component} from "react";
import Blog from "../blog/BlogComponent";
import {Breadcrumb, Icon} from "antd";

export default class IndexBlog extends Component {

    render() {
        return (
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item href="">
                        <Icon type="home"/>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                        <Icon type="user"/>
                        应用列表
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        应用
                    </Breadcrumb.Item>
                </Breadcrumb>
                <Blog/>
            </div>
        )
    }

}