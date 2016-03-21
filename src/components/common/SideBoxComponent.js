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
 * @Date: 2016/3/8 17:55
 * @Description: footer
 * @Copyright(©) 2015 by xiaomo.
 **/
import React, {Component} from "react";
import {Carousel} from "antd";
export default class SideBox extends Component {

    render() {
        return (
            <Carousel effect="fade" autoplay="true" dots="true">
                <div><h3><img src="/images/banner0.jpg" alt=""/></h3></div>
                <div><h3><img src="/images/banner1.jpg" alt=""/></h3></div>
                <div><h3><img src="/images/banner2.jpg" alt=""/></h3></div>
                <div><h3><img src="/images/banner3.jpg" alt=""/></h3></div>
            </Carousel>
        );
    }
}