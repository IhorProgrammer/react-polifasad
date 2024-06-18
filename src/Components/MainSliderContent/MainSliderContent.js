import MainContent from "../MainContent/MainContent";
import MainSlider from "../MainSlider/MainSlider";
import "./MainSliderContent.scss"
export default function MainSliderContent(){
    return (
        <section className="main-slider-content-component">
            <MainSlider/>
            <MainContent/>
        </section>
    );
}
