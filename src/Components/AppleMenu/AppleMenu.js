import { useState } from "react";
import { Link } from "react-router-dom";
import Social from "../Social/Social";
import React from 'react';
import './AppleMenu.scss';
import process from 'process';


export default function AppleMenu(props) {
    const [isOpen, setisOpen] = useState(false)
    const onClickHandler = () => setisOpen((oldState) => !oldState);
    const PUBLIC_URL = process.env.PUBLIC_URL;
    const pages = [
        {name: "Головна", to: "/"},
        {name: "Зразки термоплит", to: "tile"},
        {name: "Галерея", to: "gallery"},
        {name: "Ціна", to: "price"},
    ]

    return (
        <div {...props} className={`apple-menu ${isOpen?"menu-opened":""} ${props.className || ""}`} >
            <div className="menu-top">
                <div className="logo-container">
                    <img src={PUBLIC_URL + "/images/logo/main-logo.svg"} alt="Logo"/>
                    <Link to="/" className="logo-text">Тепла оселя</Link>
                </div>
                <div className="mobile-container" onClick={onClickHandler}>
                    <div id="burger">
                        <div className="bar topBar"></div>
                        <div className="bar btmBar"></div>
                    </div>
                </div>
                <ul className="desktop-container">
                    {pages.map((pages, key) => <li key={key}><Link to={pages.to}>{pages.name}</Link></li>)}<li><Social className="border"/></li>
                </ul>
            </div>
            <ul className="menu">
                {pages.map((pages, key) => <li className="menu-item" key={key}><Link to={pages.to} onClick={onClickHandler}>{pages.name}</Link></li>)}
                <li className="menu-item social"><Social/></li>
            </ul>
        </div>
    );
}