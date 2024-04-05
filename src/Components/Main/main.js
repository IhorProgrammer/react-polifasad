import AppleMenu from "../AppleMenu/AppleMenu";
import Footer from "../Footer/Footer";
import MainContent from "../MainContent/MainContent";
import MainSlider from "../MainSlider/MainSlider";
import ProjectType from "../ProjectType/ProjectType";
export default function Main() {
    return (
        <>
            <AppleMenu/>
            <main>
                <section style={{height: "700px", overflow: "hidden"}}>
                    <MainSlider/>
                    <MainContent/>
                </section>
                <ProjectType/>
            </main>
            <Footer/>
        </>
    );
    
}