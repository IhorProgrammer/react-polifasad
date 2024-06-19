import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import BuildingTypeAPI from "../../API/BuildingTypeAPI";
import "./BuildingType.scss"

export default function BuildingType() {
    const PUBLIC_URL = process.env.PUBLIC_URL;
    let fileInputRef = useRef(null);
    const [buildingsType, setBuildingsType] = useState([])
    useEffect(() => {
        update();
    }, []); 

    const update = () => {
        new BuildingTypeAPI().get().then((data) => { 
            setBuildingsType(data); 
        });
    }

    const change = ( cardElement ) => {
        const id = cardElement.getAttribute("data-building-type-id");
        const title = cardElement.querySelector('[data-building-type-title]').getAttribute("data-building-type-title");
        const imageName = cardElement.querySelector('[data-building-type-image]').getAttribute("data-building-type-image");

        const selectedFile = fileInputRef.files[0];
        new BuildingTypeAPI().replace( id, title, imageName, selectedFile).then(res => {
            if( res === true ) {
                console.log("HAPPY");
            } 
        });
    }

    const changeImageDbClick = (e) => {
        fileInputRef.click();
        const cardElement = e.target.closest('.card');
        change(cardElement);
    }

    
    const changeTextDbClick = (e) => {
        change(e.target.closest(".card"));
    }

    return (
        <section className="project-type-component">
            <div className="container">
                <div className="cards">
                    {
                        buildingsType.map( (buildingType) => (
                            <div className="card center" key={buildingType.id} data-building-type-id={buildingType.id} >
                                <div className="img-conteiner">
                                    <img data-building-type-image={buildingType.image_name} alt={buildingType.building_name} src={`${PUBLIC_URL}/images/building_type/${buildingType.image_name?buildingType.image_name:"noimage.jpg"}`} onClick={changeImageDbClick}/>
                                </div>
                                <div className="content">
                                    <div className="type">
                                        <p data-building-type-title={buildingType.building_name} >{buildingType.building_name}</p>
                                    </div>
                                    <Link to={`gallery?type=${buildingType.id}`} className="anm-pulse">ПОДИВИТИСЬ</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <input 
                    type="file" 
                    accept="image/jpeg, image/png, image/jpg" 
                    style={{ display: 'none' }} 
                    ref={fileInput => fileInputRef = fileInput}
            />
        </section>
    );
}