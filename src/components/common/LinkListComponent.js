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

export default class LinkList extends Component {
    static propTypes = {
        links: PropTypes.array.isRequired,
        name: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
    };


    getJSON() {
        $.get(this.props.source, function (result) {
            this.setState({
                links: result.links
            });
        }.bind(this));
    }

    render() {
        const { links } = this.state;
        var lk = links.map(function (link) {
            return (
                <li>
                    <a href={ link.href }>
                        { link.name }
                    </a>
                </li>
            );
        });
        return (
            <ul>
                {lk}
            </ul>
        );
    }


}