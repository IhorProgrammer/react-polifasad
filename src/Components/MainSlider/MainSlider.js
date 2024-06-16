import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useState, useEffect } from "react";
import "./MainSlider.scss";
import Tint from "../Tint/Tint";
import BackgroundImagesAPI from "../../API/BackgroundImagesAPI";


export default function MainSlider(props) {
    const PUBLIC_URL = process.env.PUBLIC_URL;
    const [slideIndex, setSlideIndex] = useState(0);
    const [bgnImageList, setBgnImageList] = useState([])
    useEffect(() => {
        new BackgroundImagesAPI().get().then((message) => { 
            setBgnImageList(message); 
        });
    }, []); 

    const bgnImageListItems = bgnImageList.map( (bgnImL, key) => <img alt="backgraund" key={key} src={`${PUBLIC_URL}/images/bgn_slider_images/${bgnImL.image_name}`} className={slideIndex === key?"play": ""}/>);

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