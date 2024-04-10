import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppleMenu from "./Components/AppleMenu/AppleMenu";
import Footer from "./Components/Footer/Footer";
import Main from './Components/Main/Main.js';
import Tile from './Components/Tile/Tile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <>  
            <Pages>
                <Main/>
            </Pages>
        </>
    </React.StrictMode>);

reportWebVitals();

function Pages(props) {

    return (
        <>
            <AppleMenu/>
                {props.children}
            <Footer/>
        </>
    );
}