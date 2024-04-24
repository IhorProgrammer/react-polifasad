import "./SliderTop.scss"
import "./SliderBottom.scss"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./Tile.scss"

import { useEffect, useState, useRef } from "react";
import Tint from "../../Components/Tint/Tint";
import OkmColorPicker from "../../Components/OkmColorPicker/OkmColorPicker";
export default function Tile() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setOkmColorPickerUpdate(window.innerWidth);
    };

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        setNav1(sliderRef1);
        setNav2(sliderRef2);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [selectedColor, setSelectedColor] = useState("ffffff00");
    const [OkmColorPickerUpdate, setOkmColorPickerUpdate] = useState(0);

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
    const topSliderSettings = {
        lazyLoad: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        asNavFor: nav1,
        ref: slider => (sliderRef2 = slider),
    };
    const bottomSliderSettings = {
        lazyLoad: true,
        infinite: true,
        arrows: true,
        slidesToShow: 5,
        swipeToSlide: true,
        centerMode: true,
        asNavFor: nav2,
        ref: slider => (sliderRef1 = slider),
        afterChange: function(index) {
            console.log(
              `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        },

        nextArrow: <SliderBottomNextArrow/>,
        prevArrow: <SliderBottomPrevArrow/>,
    };

    return (
        <main className="tile-page">
            <section className="image-picker">
                <div className="title">
                    <h1>Зразки термоплит</h1>
                </div>
                <div className="slider-top row">
                    <div className="slider-container col s12 l5">
                        <Tint className="bgn-overflow" style={{backgroundColor: `#${selectedColor}`}}/>
                        <div className="slider-number">1</div>
                        <Slider {...topSliderSettings} className="slider-for">
                            {tiles.map((src, key) => <img src={`${PUBLIC_URL}/${src}`} key={key}/>)}
                        </Slider>
                    </div>
                    <OkmColorPicker selectColor={SelectColorHeadler} key={OkmColorPickerUpdate}/>
                </div>

                { windowWidth < 992 || 
                    <Slider {...bottomSliderSettings} className="slider-bottom">
                        {tiles.map((src, key) => <div className="slider-bottom-container" key={key}><img className="slider-bottom-slider" src={`${PUBLIC_URL}/${src}`} /></div>)}
                    </Slider>
                }
            </section>
        </main>
    );
}

function SliderBottomNextArrow(props) {
    const { className, styles, onClick } = props;
    const PUBLIC_URL = process.env.PUBLIC_URL;
  
    return (
      <img onClick={onClick} className={className} style={{...styles}} src={`${PUBLIC_URL}/images/icons/navigate_next.svg`}/>
    );
} 
function SliderBottomPrevArrow(props) {
    const { className, styles, onClick } = props;
    const PUBLIC_URL = process.env.PUBLIC_URL;
  
    return (
        <img onClick={onClick} className={className} style={{...styles}} src={`${PUBLIC_URL}/images/icons/navigate_back.svg`}/>
    );
}