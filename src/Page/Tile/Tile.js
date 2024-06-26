import "./SliderTop.scss"
import "./SliderBottom.scss"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./Tile.scss"

import { useEffect, useState, useRef } from "react";
import TileAPI from "../../API/TileAPI";

export default function Tile() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    const [sliderNum, setSliderNum] = useState(0); 
    const PUBLIC_URL = process.env.PUBLIC_URL;
    const [tiles, setTiles] = useState([]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        setNav1(sliderRef1);
        setNav2(sliderRef2);
        new TileAPI().get().then((data) => { setTiles(data.sort((a, b) => a.number - b.number)); });
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const topSliderSettings = {
        lazyLoad: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        asNavFor: nav1,
        ref: slider => (sliderRef2 = slider),
        beforeChange: (current, next) => {
            setSliderNum(next);
        },
    };
    const bottomSliderSettings = {
        lazyLoad: true,
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        swipeToSlide: true,
        centerMode: true,
        asNavFor: nav2,
        ref: slider => (sliderRef1 = slider),

        nextArrow: <SliderBottomNextArrow/>,
        prevArrow: <SliderBottomPrevArrow/>,
    };


    return (
        <main className="tile-page">
            <section className="image-picker">
                <div className="title">
                    <h1>Зразки термоплит</h1>
                </div>
                {/* <SliderDesktop sliderNum={sliderNum} topSliderSettings={topSliderSettings} bottomSliderSettings={bottomSliderSettings} tiles={tiles}/> */}
                {
                    windowWidth < 600 ?
                    <SliderMobile sliderNum={sliderNum} topSliderSettings={topSliderSettings} tiles={tiles}/>
                    :
                    <SliderDesktop sliderNum={sliderNum} topSliderSettings={topSliderSettings} bottomSliderSettings={bottomSliderSettings} tiles={tiles}/>

                }
                
            </section>
        </main>
    );
}

function SliderBottomNextArrow(props) {
    const { className, styles, onClick } = props;
    const PUBLIC_URL = process.env.PUBLIC_URL;
  
    return (
        <div className="next-arrow-container" onClick={onClick}>
            <img className={className} style={{...styles}} src={`${PUBLIC_URL}/images/icons/navigate_next.svg`}/>
        </div>
    );
} 
function SliderBottomPrevArrow(props) {
    const { className, styles, onClick } = props;
    const PUBLIC_URL = process.env.PUBLIC_URL;
  
    return (
        <div className="prev-arrow-container" onClick={onClick}>
            <img  className={className} style={{...styles}} src={`${PUBLIC_URL}/images/icons/navigate_back.svg`}/>
        </div>
    );
}

function SliderDesktop({sliderNum, topSliderSettings, bottomSliderSettings, tiles}) {
    const PUBLIC_URL = process.env.PUBLIC_URL;


    return (
        <>
            <div className="slider-top row">
                <div className="slider-container col s12 l5">
                    <div className="slider-number">{sliderNum + 1}</div>
                    <Slider {...topSliderSettings} className="slider-for">
                        {tiles.map((tile) => <img src={`${PUBLIC_URL}/images/tile/${tile.image_name}`} key={tile.number} data-num={tile.number}/>)}
                    </Slider>
                </div>
                {/* <OkmColorPicker selectColor={SelectColorHeadler} key={OkmColorPickerUpdate}/> */}
            </div>
            <Slider {...bottomSliderSettings} className="slider-bottom">
                {tiles.map((tile) => <div className="slider-bottom-container" key={tile.number}><img className="slider-bottom-slider" src={`${PUBLIC_URL}/images/tile/${tile.image_name}`} /></div>)}
            </Slider>
        </>
    );
}

function SliderMobile({sliderNum, topSliderSettings, tiles}) {
    const PUBLIC_URL = process.env.PUBLIC_URL;
    topSliderSettings = {
        ...topSliderSettings, 
        asNavFor: null,
        arrows: true,

        nextArrow: <SliderBottomNextArrow/>,
        prevArrow: <SliderBottomPrevArrow/>,
    }
    return (
        <div className="slider-top row">
            <div className="slider-container col s12 l5">
                <div className="slider-number">{sliderNum + 1}</div>
                <Slider {...topSliderSettings} className="slider-mobile">
                    {tiles.map((src, key) => <img src={`${PUBLIC_URL}/${src}`} key={key}/>)}
                </Slider>
            </div>
        </div>
    );
}