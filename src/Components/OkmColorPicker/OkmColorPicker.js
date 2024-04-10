import "./OkmColorPicker.scss";
import React, { useEffect, useState, useRef } from "react";

function OkmColorPicker(props) {
    const parentRef = useRef(null);
    const [parentWidth, setParentWidth] = useState(null);
    const [selectedColor, setSelectedColor] = useState("ffffff");

    const windowWidth = window.innerWidth;
    let rangeCircleColorPicker = 90;
    if (windowWidth < 400 ) rangeCircleColorPicker = 60;
    else if (windowWidth < 500 ) rangeCircleColorPicker = 70;
    else if (windowWidth < 600 ) rangeCircleColorPicker = 90;
    else if (windowWidth < 992) rangeCircleColorPicker = 140;

    useEffect(() => {
        setParentWidth(parentRef.current.offsetWidth);
        return () => {
        };        
    }, []);

    const colorPickerColors = [
        ["9C709E33","9AA63A33","6580AD33","7379A933","E9B16433","E19A6233","C7A25E33","9B753733","C77F5933","C0785533","95684133","81614233","4A443833"],
        ["B081AB33","B1C93D33","7292BB33","818DB533","EAB86F33","EEA76F33","D4AE6D33","B2874233","CE8D6533","D38A5733","A5764C33","93715033","59514433"],
        ["C092B733","BFD99C33","80A3C333","93A0C233","F7CB8433","F4B78433","EBBF7E33","D0A76933","E0A17833","D88E6833","B6875933","A4805E33","84726433"],
    ];

   

    const SectorClickHandler = (color) => {
        setSelectedColor(color.substring(0,6));
        props.selectColor(color);
    } 

    return (
        <div className="colorPicker-container col s12 l5">                
            <div className="Okm-colorPicker square">
                <div id="colorPicker" ref={parentRef}>
                    {
                        parentWidth
                        &&
                        colorPickerColors.map( (colors, key) => (
                            <div style={{width: `${parentWidth - rangeCircleColorPicker * key}px`}} className="circle" key={key}>
                                {
                                    colors.map( (color, key) => 
                                        <div 
                                            className="sector"
                                            id={color} 
                                            key={key}
                                            onClick={() => SectorClickHandler(color)}
                                            style={{
                                                transform: `rotate(${(360 / colors.length) * key}deg) skew(${(90 - 360 / colors.length - 1)}deg)`,
                                                boxShadow: `#${color.substring(0, 6)} 5px 0px 20px -10px`,
                                                backgroundColor: "#"+color.substring(0, 6),
                                            }}>
                                        </div>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
                <div id="colorPickerViewColor" className="view-color square" >
                    <div className="colorPickerTarget" style={{backgroundColor: `#${selectedColor}`}}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
} 

export default OkmColorPicker;