import MainSlider from "../../Components/MainSlider/MainSlider";
import "./Gallery.scss"
import GetGalleryAPI from "../../API/GetGalleryAPI";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import GalleryAPI from "../../API/GalleryAPI";

export default function Gallery() {
    const location = useLocation();
    const [data, setData] = useState([]);

    useEffect(() => {
        
        new GalleryAPI().get(location.search).then( (data) => { setData(data); } )

    }, [location.search]); 

    return (
        <main className="Gallery_page">
            <div>
                <MainSlider className="gallery-slider"></MainSlider>
                <div className="content-container">
                    <h1>Галерея</h1>
                </div>
            </div>
            <div className="Gallery_page__Filters_Card">
                <GalleryCard works={data} />
            </div>

        </main>
    );
}

function GalleryCard({works}) {
   
    const PUBLIC_URL = process.env.PUBLIC_URL;
    return (
        <div className="Gallery_page__Gallery_Card">
            <div className="cards row">
                {works.map((gal, key) => (
                    <div className="card col l3 m4 s6" key={key} data-building_type={gal.id_building_type}>
                        <div className="card-container">
                            <img data-img-id={gal.id_building_type} src={`${PUBLIC_URL}/images/gallery/${gal.image_name}`} alt={gal.image_name} loading="lazy"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


function NotingFound() {
    
}