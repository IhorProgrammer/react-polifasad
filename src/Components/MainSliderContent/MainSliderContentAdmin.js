import { useRef } from "react";
import MainContent from "../MainContent/MainContent";
import MainSlider from "../MainSlider/MainSlider";
import "./MainSliderContent.scss"
import BackgroundImagesAPI from "../../API/BackgroundImagesAPI";
export default function MainSliderContent(){
    return (
        <section className="main-slider-content-component admin">
            <MainContent/>
            <SliderControlPanel/>
        </section>
    );
}

function SliderControlPanel() {
    let sliderRef = useRef(null);
    let fileInputRef = useRef(null);

    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    const addImage = () => {
        fileInputRef.click();
    };

    const handleFileChange = () => {
        const selectedFile = fileInputRef.files[0];
        if (selectedFile) {
            new BackgroundImagesAPI().add(selectedFile).then(res => {
                if( res === true ) {
                    console.log("Nice");
                } 
            });
        } else {
            alert('Будь ласка, виберіть файл перед відправкою.');
        }
    }

    var settings = {
        infinite: true,
        speed: 500,
        fade: false,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "100px",
        centerMode: true,
        className: "non-animation",
    }

    return (
        <>
            <MainSlider refSlider={slider => { sliderRef = slider; }} settings={settings}/>
            <input 
                    type="file" 
                    accept="image/jpeg, image/png, image/jpg" 
                    onChange={handleFileChange} 
                    style={{ display: 'none' }} 
                    ref={fileInput => fileInputRef = fileInput}
            />
            <div className="control-panel">
                <div className="center-panel">
                    <button className="control-btn" id="moveLeftBtn" onClick={previous}>Влево</button>
                    <button className="control-btn" id="editLeftBtn">Влево изменить</button>
                    <button className="control-btn" id="addBtn" onClick={addImage}>Добавить</button>
                    <button className="control-btn" id="deleteBtn">Удалить</button>
                    <button className="control-btn" id="editRightBtn">Вправо изменить</button>
                    <button className="control-btn" id="moveRightBtn" onClick={next}>Вправо</button>
                </div>
            </div>
        </>
    );
}