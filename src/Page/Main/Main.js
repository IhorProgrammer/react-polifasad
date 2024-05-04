import MainSliderContent from "../../Components/MainSliderContent/MainSliderContent";
import BuildingType from "../../Components/ProjectType/BuildingType";
import ServicesCards from "../../Components/ServicesCards/ServicesCards";
import BgnParallax from "../../Components/BgnParalax/BgnParallax";
import "./Main.css";
export default function Main() {
    return (
        <main className="main-page">
            <MainSliderContent/>
            <BuildingType/>
            <BgnParallax/>
            <ServicesCards/>
        </main>
    );
}