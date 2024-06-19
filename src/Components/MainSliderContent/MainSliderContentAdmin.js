import { useRef, useState, useEffect } from "react";
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
    const [slideIndex, setSlideIndex] = useState(null);
    const [idImageBackground, setIdImageBackground] = useState(null);
    const [bgnImageList, setBgnImageList] = useState([])
    const [isUpdate, setIsUpdate] = useState(true)

    useEffect(() => {
        if(isUpdate === true) {
            update();
            setIsUpdate(false);

        }
    }, [isUpdate]); 

    useEffect(() => {
        if ( sliderRef && slideIndex != null ) {
            sliderRef.slickGoTo( slideIndex );
        }
        if( idImageBackground === null ) {
        }
    }, [bgnImageList]); 

    const update = () => {
        new BackgroundImagesAPI().get().then((message) => { 
            setBgnImageList(message); 
        });
    }


    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    const addImage = () => {
        fileInputRef.click();
    };

    const deleteImage = () => {
        const confirmed = window.confirm("Видалити фото?");
        if (!confirmed) { return; } 
        if( !idImageBackground ) {
            alert('Будь ласка, виберіть картину');
            return;
        }
        new BackgroundImagesAPI().remove( idImageBackground ).then(res => {
            if( res === true ) {
                setIsUpdate(true);
            } 
        });

    };
    
    const handleFileChange = (e) => {
        e.preventDefault();
        const selectedFile = fileInputRef.files[0];
        if (selectedFile) {
            new BackgroundImagesAPI().add(selectedFile).then(res => {
                if( res === true ) {
                    setSlideIndex( bgnImageList.length )
                    setIsUpdate(true);
                } 
            });
        } else {
            alert('Будь ласка, виберіть файл перед відправкою.');
        }
    }

    const replacePrev = (e) => {
        const centerSlide = document.querySelector('.slick-active');
        const nextIdImage = centerSlide.previousElementSibling.querySelector('[data-backgraund-image-id]').getAttribute('data-backgraund-image-id');
        const currentIdImage = idImageBackground;
        
        if ( currentIdImage && nextIdImage ) {
            new BackgroundImagesAPI().replace(currentIdImage, nextIdImage).then(res => {
                if( res === true ) {
                    setSlideIndex( (old) => {
                        if( old - 1 < 0 ) {
                            return bgnImageList.length - 1;
                        }
                        return old - 1;
                    } )
                    setIdImageBackground(nextIdImage);
                    setIsUpdate(true);

                } 
            });
        } 
    } 

    const replaceNext = (e) => {
        const centerSlide = document.querySelector('.slick-active');
        const nextIdImage = centerSlide.nextElementSibling.querySelector('[data-backgraund-image-id]').getAttribute('data-backgraund-image-id');
        const currentIdImage = idImageBackground;
        
        if ( currentIdImage && nextIdImage ) {
            new BackgroundImagesAPI().replace(currentIdImage, nextIdImage).then(res => {
                if( res === true ) {
                    setSlideIndex( (old) => {
                        if( old + 1 == bgnImageList.length ) {
                            return 0;
                        }
                        return old + 1;
                    } )
                    setIdImageBackground(nextIdImage);
                    setIsUpdate(true);

                } 
            });
        } 
    }

    var settings = {
        infinite: true,
        speed: 500,
        fade: false,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "non-animation",
        afterChange: (current) => handleAfterChange(current),
    }

    const handleAfterChange = (current) => {
        const centerSlide = document.querySelector('.slick-active');
        if( centerSlide == null ) return;
        const dataImage = centerSlide.querySelector('[data-backgraund-image-id]').getAttribute('data-backgraund-image-id');
        setIdImageBackground(dataImage);
        setSlideIndex(current);
    };

    return (
        <>
            <MainSlider items={bgnImageList} refSlider={slider => { sliderRef = slider; if(!idImageBackground) handleAfterChange(0);  }} settings={settings} slideIndex={slideIndex}/>
            <input 
                    type="file" 
                    accept="image/jpeg, image/png, image/jpg" 
                    onChange={handleFileChange} 
                    style={{ display: 'none' }} 
                    ref={fileInput => fileInputRef = fileInput}
            />
            <div className="control-panel">
                <div className="center-panel">
                    <button className="control-btn" id="moveLeftBtn" onClick={previous}>    
                        <img src="images/icons/navigate_back.svg"/>
                    </button>
                    <button className="control-btn" id="editLeftBtn" onClick={replacePrev}> 
                        <img src="images/icons/swap-left.svg"/>
                    </button>
                    <button className="control-btn" id="addBtn" onClick={addImage}>         
                        <img src="images/icons/add.svg"/>
                    </button>
                    <button className="control-btn" id="deleteBtn" onClick={deleteImage}>   
                        <img src="images/icons/delete.svg"/>
                    </button>
                    <button className="control-btn" id="editRightBtn" onClick={replaceNext}>
                        <img src="images/icons/swap-right.svg"/>
                    </button>
                    <button className="control-btn" id="moveRightBtn" onClick={next}>       
                        <img src="images/icons/navigate_next.svg"/>
                    </button>
                </div>
            </div>
            <div className="image-number-container">
                <p>{slideIndex + 1}</p>
            </div>
        </>
    );
}