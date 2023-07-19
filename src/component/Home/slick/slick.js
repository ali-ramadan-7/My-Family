import "./slick.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import Title from '../../title/title';
import slick1 from '../../../img/slick-1.jpg'
import slick2 from '../../../img/slick-2.jpg'
import slick3 from '../../../img/slick-3.jpg'
import slick4 from '../../../img/slick-4.png'
import slick5 from '../../../img/slick-5.jpg'
import slick6 from '../../../img/slick-6.jpg'
import slick7 from '../../../img/slick-7.jpg'
import slick8 from '../../../img/slick-8.jpg'
import slick9 from '../../../img/slick-9.jpg'
import React, { Component } from "react";
import Slider from "react-slick";

export default class PauseOnHover extends Component {
render() {
var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
],
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
};
    return (
    <Container className="slick">
        <Title text="Recent Photos"/>
        <Slider {...settings}>
        <div>
            <img src={slick1}
            alt="my family"/>
        </div>
        <div>
            <img src={slick2}
            alt="my family"/>
        </div>
        <div>
            <img src={slick3}
            alt="my family"/>
        </div>
        <div>
            <img src={slick4}
            alt="my family"/>
        </div>
        <div>
            <img src={slick5}
            alt="my family"/>
        </div>
        <div>
            <img src={slick6}
            alt="my family"/>
        </div>
        <div>
            <img src={slick7}
            alt="my family"/>
        </div>
        <div>
            <img src={slick8}
            alt="my family"/>
        </div>
        <div>
            <img src={slick9}
            alt="my family"/>
        </div>
        </Slider>
    </Container>
    );
}
}

