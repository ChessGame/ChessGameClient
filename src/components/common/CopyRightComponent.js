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

export default class CopyRight extends Component {
    static propTypes = {
        copyright: PropTypes.array.isRequired,
        year: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        recordNumber: PropTypes.string.isRequired
    };

    render() {
        const { copyright } = this.props;
        return (
            <div className="copyright">
                CopyRight © { copyright.year } { copyright.name },Inc. All Rights Reserved.
                备案号：{ copyright.recordNumber }
            </div>
        );
    }


}