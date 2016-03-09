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
    state = {
        links: [],
        name: '',
        href: ''
    };

    componentDidMount() {
        this.getJSON();
    }

    getJSON() {
        $.get(this.props.source, function (result) {
            this.setState({
                links: result.links
            });
        }.bind(this));
    }

    render() {
        const { links } = this.state;
        if (links.length > 0) {
            var lk = links.map(function (link, index) {
                return (
                    <li key={index}>
                        <a href={ link.href }>
                            { link.name }
                        </a>
                    </li>
                );
            });
        }
        return (
            <ul>
                {lk}
            </ul>
        );
    }


}