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
import {Timeline} from "antd";

export default class IndexChangeLog extends Component {

    render() {
        return (
            <div class="container">
                <Timeline>
                    <Timeline.Item color="green">2015-09-01</Timeline.Item>
                    <Timeline.Item color="green"> 2015-09-01</Timeline.Item>
                    <Timeline.Item color="red">
                        <p>1基本测试版本</p>
                        <p>初步排除网络异常2</p>
                        <p>初步排除网络异常3 2015-09-01</p>
                    </Timeline.Item>
                    <Timeline.Item>
                        <p>1基本测试版本</p>
                        <p>1基本测试版本 </p>
                        <p>技术测试异常3 2015-09-01</p>
                    </Timeline.Item>
                </Timeline>
            </div>
        )
    }

}