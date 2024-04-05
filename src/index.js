import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Main from './Components/Main/main';
// import Main from "./pages/main"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><Main/></React.StrictMode>);

reportWebVitals();