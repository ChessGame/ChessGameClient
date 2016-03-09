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
import LinkList from './LinkListComponent';
import CopyRight from './CopyRightComponent';

export default class Footer extends Component {
    static propTypes = {
        links: PropTypes.array.isRequired,
        copyright: PropTypes.array.isRequired
    };

    render() {
        const {links,copyright} = this.props;
        return (
            <footer className='footer'>
                <LinkList links={links}/>
                <CopyRight copyright={copyright}/>
            </footer>
        );
    }


}