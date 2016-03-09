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
import React, { PropTypes, Component } from 'react';
import Link from './LinkComponent';
import $ from 'jquery';

export default class CopyRight extends Component {
    static propTypes = {
        year: PropTypes.number.isRequired,
        siteName: PropTypes.string.isRequired,
        recordNumber: PropTypes.string.isRequired
    };

    getJSON() {
        $.get(this.props.source, function (result) {
            this.setState({
                year: result.year,
                siteName: result.siteName,
                recordNumber: result.recordNumber
            });
        }.bind(this));
    }

    render() {
        const { year,siteName,recordNumber } = this.state;
        return (
            <div>
                CopyRight © { year } { siteName },Inc. All Rights Reserved.
                备案号：{ recordNumber }
            </div>
        );
    }


}