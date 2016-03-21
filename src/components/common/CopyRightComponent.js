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

export default class CopyRight extends Component {
    state = {
        copyright: {},
        year: 0,
        siteName: '',
        recordNumber: '',
        beian: ''
    };

    componentDidMount() {
        const source = this.props.source;
        fetch(source)
            .then(result=>result.json())
            .then(data => {
                this.setState({
                    copyright: data
                })
            })
            .catch(err=>console.log(err));
    }

    render() {
        const {copyright}  = this.state;
        return (
            <div>
                CopyRight © { copyright.year } { copyright.siteName },Inc. All Rights Reserved.
                备案号：<a href={copyright.beian}>{ copyright.recordNumber }</a>
            </div>
        );
    }
}