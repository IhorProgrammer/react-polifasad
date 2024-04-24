import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useState, useEffect } from "react";
import OkmColorPicker from "../OkmColorPicker/OkmColorPicker";
import Tint from "../Tint/Tint";
import "./SliderTop.scss"

export default function SliderTop(props) {
    const [selectedColor, setSelectedColor] = useState("ffffff00");
    const [OkmColorPickerUpdate, setOkmColorPickerUpdate] = useState(0);

    const handleResize = () => { setOkmColorPickerUpdate(window.innerWidth); }
    const SelectColorHeadler = (color) => { setSelectedColor(color); }
    const PUBLIC_URL = process.env.PUBLIC_URL;
    const tiles = [
        "images/tile/1.png",
        "images/tile/2.png",
        "images/tile/3.png",
        "images/tile/4.png",
        "images/tile/5.png",
        "images/tile/6.png",
        "images/tile/7.png",
        "images/tile/8.png",
        "images/tile/9.png",
        "images/tile/10.png",
        "images/tile/11.png",
        "images/tile/12.png",
        "images/tile/13.png",
        "images/tile/14.png",
        "images/tile/15.png",
        "images/tile/16.png",
        "images/tile/18.png",
    ]
    const settings = {
        lazyLoad: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        asNavFor: props.asNavFor,
        ref: props.ref,
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };        
    }, []);


    return (
        <div className="slider-top row">
            <div className="slider-container col s12 l5">
                <Tint className="bgn-overflow" style={{backgroundColor: `#${selectedColor}`}}/>
                <div className="slider-number">1</div>
                <Slider {...settings} className="slider-for">
                    {tiles.map((src, key) => <img src={`${PUBLIC_URL}/${src}`} key={key}/>)}
                </Slider>
            </div>
            <OkmColorPicker selectColor={SelectColorHeadler} key={OkmColorPickerUpdate}/>
        </div>
    );
}

