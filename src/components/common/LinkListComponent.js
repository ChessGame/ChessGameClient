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

export default class LinkList extends Component {
    state = {
        links: [],
        name: '',
        href: ''
    };

    componentDidMount() {
        const source = this.props.source;
        fetch(source)
            .then(result=>result.json())
            .then(result=> {
                this.setState({
                    links: result.links
                });
            })
            .catch(err=>console.log(err));
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
            <div>
                <ul className="list-unstyled list-inline">
                    友情链接：{lk}
                </ul>
            </div>
        );
    }


}