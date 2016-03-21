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
import React, {PropTypes, Component} from "react";
import Slider from "react-slick";

export default class SideBox extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <div><h3><img src="/images/banner0.jpg" alt=""/></h3></div>
                <div><h3><img src="/images/banner1.jpg" alt=""/></h3></div>
                <div><h3><img src="/images/banner2.jpg" alt=""/></h3></div>
                <div><h3><img src="/images/banner3.jpg" alt=""/></h3></div>
            </Slider>
        );
    }

}