import MainSliderContent from "../../Components/MainSliderContent/MainSliderContent";
import ProjectType from "../../Components/ProjectType/ProjectType";
import ServicesCards from "../../Components/ServicesCards/ServicesCards";
import BgnParallax from "../../Components/BgnParalax/BgnParallax";
import "./Main.css";
export default function Main() {
    return (
        <main className="main-page">
            <MainSliderContent/>
            <ProjectType/>
            <BgnParallax/>
            <ServicesCards/>
        </main>
    );
}