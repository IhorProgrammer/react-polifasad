import MainSlider from "../../Components/MainSlider/MainSlider";
import "./Gallery.scss"
import GetGalleryAPI from "../../API/GetGalleryAPI";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

export default function Gallery() {
    const location = useLocation();
    const [data, setData] = useState([]);

    useEffect(() => {
        GetGalleryAPI(location.search).then((message) => { setData(message); });
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
                {works.map((work, key) => (
                    <div className="card col l3 m4 s6" key={work.id} data-building_type={work.building_type}>
                        <div className="card-container">
                            <img src={`${PUBLIC_URL}/images/gallery/${work.image}`} alt={work.image} loading="lazy"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


function NotingFound() {
    
}