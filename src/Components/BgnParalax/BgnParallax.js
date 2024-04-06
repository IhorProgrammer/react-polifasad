import { Parallax } from "react-parallax";
import Tint from "../Tint/Tint";
import style from "./BgnParallax.module.css";
import "./BgnParallax.css";


export default function BgnParallax() {
    const PUBLIC_URL = process.env.PUBLIC_URL;

    return (
        <section className={style["bgn-parallax"]}>
                <Tint/>
                <Parallax bgImage={`${PUBLIC_URL}/images/logo/logo.svg`} bgImageAlt="logo" bgImageStyle={{opacity: '1'}}>
                    <a href="https://www.youtube.com/watch?v=gAhW8YFKDZg" className={style["parallax-container-content"]}>
                        <div className={style["icon-bgn"]}>
                            <img alt="play" src={PUBLIC_URL + "/images/icons/play-video.svg"} className={style["icon"]}></img>
                        </div>
                        <span className={style["btn-outline1"]}></span>
                        <span className={style["btn-outline2"]}></span>
                    </a>
                </Parallax>
        </section>
    );
} 