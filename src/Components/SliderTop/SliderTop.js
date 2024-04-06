import Slider from "react-slick";
import "./SliderTop.css"
import Tint from "../Tint/Tint";
export default function SliderTop() {
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
    };
    return (
        <div className="slider-top">
            <div className="slider-container">
                <Tint className="bgn-overflow"/>
                <div className="slider-number">1</div>
                <Slider {...settings} className="slider-for">
                    {tiles.map((src, key) => <img src={`${PUBLIC_URL}/${src}`} key={key}/>)}
                </Slider>
            </div>
        </div>
    );
}

// <div className="colorPicker-container">
//     <div className="Okm-colorPicker square">
//         <div id="colorPicker"></div>
//         <div id="colorPickerViewColor" className="viewColor square" >
//             <div id="colorPickerTarget" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
//             </div>
//         </div>
//     </div>
// </div>