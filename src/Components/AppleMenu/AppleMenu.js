import { useState } from "react";
import Social from "../Social/Social";
import "./AppleMenu.css"

export default function AppleMenu() {
    const [isOpen, setisOpen] = useState(false)
    const onClickHandler = () => setisOpen((oldState) => !oldState);
    const PUBLIC_URL = process.env.PUBLIC_URL;

    return (
        <div className={"apple-menu" + (isOpen?" menu-opened":"")}>
            <div className="menu-top">
                <div className="logo-container">
                    <img src={PUBLIC_URL + "/images/logo/main-logo.svg"} alt="Logo"/>
                    <a href="index.html" className="logo-text">Тепла оселя</a>
                </div>
                <div className="mobile-container" onClick={onClickHandler}>
                    <div id="burger">
                        <div className="bar topBar"></div>
                        <div className="bar btmBar"></div>
                    </div>
                </div>
                <ul className="desktop-container">
                    <li><a href="main">Головна</a></li>
                    <li><a href="tile">Зразки термоплит</a></li>
                    <li><a href="galery">Галерея</a></li>
                    <li><a href="price">Ціна</a></li>
                    <li><Social/></li>
                </ul>
            </div>
            <ul className="menu">
                <li className="menu-item"><a href="main">Головна</a></li>
                <li className="menu-item"><a href="tile">Зразки термоплит</a></li>
                <li className="menu-item"><a href="galert">Галерея</a></li>
                <li className="menu-item"><a href="price">Ціна</a></li>
                <li className="menu-item social"><Social/></li>
            </ul>
        </div>
    );
}