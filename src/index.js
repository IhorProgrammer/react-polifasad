import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppleMenu from "./Components/AppleMenu/AppleMenu";
import Footer from "./Components/Footer/Footer";
import Main from './Page/Main/Main.js';
import Tile from './Page/Tile/Tile.js';
import Page from './Page/Price/Price.js';

import { BrowserRouter ,Route, Routes } from "react-router-dom";
import Galley from './Page/Gallery/Gallety.js';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
            <BrowserRouter>    
                <Pages/>
            </BrowserRouter>
    </React.StrictMode>);

reportWebVitals();

function Pages(props) {
    return (
        <>
            <AppleMenu/>
                <ScrollToTop/>
                <Routes>
                    <Route path="/gallery/*" element={<Galley/>} />
                    <Route path="/" element={<Main/>} />
                    <Route path="/tile" element={<Tile/>} />
                    <Route path="/price" element={<Page/>} />
                </Routes>
            <Footer/>
        </>
    );
}