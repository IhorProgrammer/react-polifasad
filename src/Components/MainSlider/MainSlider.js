import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useState } from "react";
import "./MainSlider.scss";
import Tint from "../Tint/Tint";

export default function MainSlider(props) {
    const PUBLIC_URL = process.env.PUBLIC_URL;
    const [slideIndex, setSlideIndex] = useState(0);
    const bgnImageListItems = props.items.map( (bgnImL, key) => <img alt="backgraund" key={key} src={`${PUBLIC_URL}/images/bgn_slider_images/${bgnImL.image_name}`} className={slideIndex === key?"play": ""} data-backgraund-image-id={bgnImL.id}
    />);

    
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
        },
        ...props.settings
    };


    return (
        <div className={`main-slider ${props.className || ""}` } >
            <Slider {...settings} ref={props.refSlider}>
                {bgnImageListItems} 
            </Slider>
            <Tint/>
        </div>
    );
}