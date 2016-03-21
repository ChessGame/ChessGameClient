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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class SideBox extends Component {

    render() {
        var settings = {
            className: '',
            accessibility: true,
            adaptiveHeight: false,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 3000,
            centerMode: true,
            centerPadding: '50px',
            cssEase: 'ease',
            dots: false,
            dotsClass: 'slick-dots',
            draggable: true,
            easing: 'linear',
            edgeFriction: 0.35,
            fade: false,
            focusOnSelect: false,
            infinite: true,
            initialSlide: 0,
            lazyLoad: true,
            pauseOnHover: false,
            responsive: null,
            rtl: false,
            slide: 'div',
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: true,
            swipeToSlide: false,
            touchMove: true,
            touchThreshold: 5,
            useCSS: true,
            variableWidth: false,
            vertical: false,
            waitForAnimate: true,
            afterChange: null,
            beforeChange: null,
            edgeEvent: null,
            init: null,
            swipeEvent: null,
            nextArrow: null,
            prevArrow: null
        };
        return (
            <Slider {...settings}>
                <div><h5><img src="/images/banner0.jpg" alt=""/></h5></div>
                <div><h5><img src="/images/banner1.jpg" alt=""/></h5></div>
                <div><h5><img src="/images/banner2.jpg" alt=""/></h5></div>
                <div><h5><img src="/images/banner3.jpg" alt=""/></h5></div>
            </Slider>
        );
    }

}