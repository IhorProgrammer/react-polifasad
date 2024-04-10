import MainSliderContent from "../MainSliderContent/MainSliderContent";
import ProjectType from "../ProjectType/ProjectType";
import ServicesCards from "../ServicesCards/ServicesCards";
import BgnParallax from "../BgnParalax/BgnParallax";
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