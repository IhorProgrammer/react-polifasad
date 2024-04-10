import SliderTop from "../SliderTop/SliderTop";
import SliderBottom from "../SliderBottom/SliderBottom";
import "./Tile.css"
import { useEffect, useState } from "react";
export default function Tile() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <main>
            <section className="image-picker">
                <div className="title">
                    <h1>Зразки термоплит</h1>
                </div>
                <SliderTop/>
                { windowWidth < 992 || <SliderBottom/>}
            </section>
        </main>
    );
}