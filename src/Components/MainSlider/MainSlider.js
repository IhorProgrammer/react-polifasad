import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useState } from "react";
import "./MainSlider.scss";

import Tint from "../Tint/Tint";

export default function MainSlider(props) {
    const [slideIndex, setSlideIndex] = useState(0);

    const PUBLIC_URL = process.env.PUBLIC_URL;
    const bgnImageList = [
        "/images/images/photo/bgn1.jpg",
        "/images/images/photo/bgn2.jpg",
        "/images/images/photo/bgn3.jpg",
        "/images/images/photo/bgn4.jpg",
        "/images/images/photo/bgn5.jpg",
    ];

    const bgnImageListItems = bgnImageList.map( (url, key) => <img alt="backgraund" key={key} src={PUBLIC_URL + url } className={slideIndex === key?"play": ""}/>);

    const settings = {
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'ease-out',
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false,
        beforeChange: function(oldIndex, newIndex) {
            setSlideIndex(newIndex)
        }

    };

    return (
        <div className={`main-slider ${props.className || ""}` } >
            <Slider {...settings}>
                {bgnImageListItems}
            </Slider>
            <Tint/>
        </div>
    );
}