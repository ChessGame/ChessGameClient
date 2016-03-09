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
 * @Date: 2016/3/8 17:57
 * @Description: todo
 * @Copyright(©) 2015 by xiaomo.
 **/
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
        name: PropTypes.string.isRequired,
        recordNumber: PropTypes.string.isRequired
    };

    getJSON() {
        $.get(this.props.source, function (result) {
            this.setState({
                year: result.year,
                name: result.name,
                recordNumber: result.recordNumber
            });
        }.bind(this));
    }

    render() {
        const { year,name,recordNumber } = this.state;
        return (
            <div className="copyright">
                CopyRight © { year } { name },Inc. All Rights Reserved.
                备案号：{ recordNumber }
            </div>
        );
    }


}