import MainSliderContent from "./Components/MainSliderContent/MainSliderContent";
import ProjectType from "./Components/ProjectType/ProjectType";
import ServicesCards from "./Components/ServicesCards/ServicesCards";
import BgnParallax from "./Components/BgnParalax/BgnParallax";

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