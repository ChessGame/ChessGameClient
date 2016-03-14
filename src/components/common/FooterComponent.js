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
import React, { Component } from 'react';
import LinkList from './LinkListComponent';
import CopyRight from './CopyRightComponent';

export default class Footer extends Component {

    render() {
        return (
            <footer id="footer">
                <LinkList source="/src/data/links.json"/>
                <CopyRight source="/src/data/options.json"/>
            </footer>
        );
    }


}