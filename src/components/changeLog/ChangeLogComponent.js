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
 * @Description: 更新日志
 * @Copyright(©) 2015 by xiaomo.
 **/

import React, {Component} from "react";
import {Timeline} from "antd";

export default class ChangeLog extends Component {

    state = {
        logs: [],
        name: '',
        time: '',
        color: ''
    };

    componentDidMount() {
        const source = this.props.source;
        fetch(source)
            .then(result=>result.json())
            .then(data=> {
                this.setState({
                    logs: data.changeLogs
                });
            })
            .catch(err=>console.log(err));
    }

    render() {
        const {logs} = this.state;
        if (logs.length > 0) {
            var changeLogs = logs.map(function (log, index) {
                return (
                    <Timeline.Item key={index} color={log.color}>{log.time} {log.name}</Timeline.Item>
                );
            });
        }
        return (
            <div class="container">
                <Timeline>
                    {changeLogs}
                </Timeline>
            </div>
        )
    }

}