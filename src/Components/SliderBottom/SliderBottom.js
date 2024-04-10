import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./SliderBottom.css"

export default function SliderBottom() {
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
        arrows: true,
        slidesToShow: 3,
        swipeToSlide: true,
        centerMode: true,
        afterChange: function(index) {
            console.log(
              `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        },
        nextArrow: <SliderBottomNextArrow/>,
        prevArrow: <SliderBottomPrevArrow/>,
    };
    
    return (
        <Slider {...settings} className="slider-bottom">
            {tiles.map((src, key) => <div className="slider-bottom-container" key={key}><img className="slider-bottom-slider" src={`${PUBLIC_URL}/${src}`} /></div>)}
        </Slider>
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