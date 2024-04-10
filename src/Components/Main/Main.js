import MainSliderContent from "../MainSliderContent/MainSliderContent";
import ProjectType from "../ProjectType/ProjectType";
import ServicesCards from "../ServicesCards/ServicesCards";
import BgnParallax from "../BgnParalax/BgnParallax";

export default function Main() {
    return (
        <main>
            <MainSliderContent/>
            <ProjectType/>
            <BgnParallax/>
            <ServicesCards/>
        </main>
    );
}