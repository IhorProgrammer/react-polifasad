import Slider from "react-slick";

export default function DefaultSlider({children, settings, className}) {   
    return <Slider {...settings} className={className || ""}> {children} </Slider>
}
