import MainContent from "../MainContent/MainContent";
import MainSlider from "../MainSlider/MainSlider";
import style from "./MainSliderContent.module.css"
export default function MainSliderContent(){
    return (
        <section className={style["main-slider-content"]}>
            <MainSlider/>
            <MainContent/>
        </section>
    );
}