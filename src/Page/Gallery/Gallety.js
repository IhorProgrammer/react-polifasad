import MainSlider from "../../Components/MainSlider/MainSlider";
import {Accordion, Form, Offcanvas } from 'react-bootstrap';
import "./Gallery.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import APIGetFilters from "./gallery_list_filters";
import APIGetGallery from "./gallery_list_card";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

export default function Gallery() {
    const filtres = APIGetFilters();
    const location = useLocation();
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(APIGetGallery(location.search))
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
                <FormGalleryMobile groups={filtres}/>
                <GalleryCard works={data} filtres={filtres}/>
            </div>

        </main>
    );
}

function FormGalleryDesktop(props) {
    return <FormGallery {...props} style={{width: "300px"}} />
}

function FormGalleryMobile(props) {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    return (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Фільтри</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <FormGallery {...props}/>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

function FormGallery({groups}) {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const navigate = useNavigate();

    const [checkboxStates, setCheckboxStates] = useState(
        groups.reduce((acc, group) => {
            acc[group.name] = {}
            const searchGroup = searchParams.get(group.name) ? searchParams.get(group.name).split(',').map(Number) : [];
            group.options.forEach(option => {
                if( searchGroup && searchGroup.some( item => item === Number(option.id)) )
                    acc[group.name][option.id] = true;
            });
            return acc;
        }, {})
    );
    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        if (isFirstRender) {
            setIsFirstRender(false);
            return;
        }
        const urlParams = Object.entries(checkboxStates).map(([key, value]) => {
            const subKeys = Object.keys(value).join(',');
            if(subKeys.trim().length != 0)
                return `${key}=${subKeys}`;
            return '';
        }).filter(value => {
            if(value.length > 0)
                return value
        })
        if(urlParams.length > 0) navigate(`/gallery?${ urlParams.join('&') }`);
        else navigate(`/gallery`)
    }, [checkboxStates])

    const handleChange = (event) => {
        const { name, checked, value } = event.target;
        setCheckboxStates(prev => {
            const copyPrev = {...prev}
            copyPrev[name][value] = checked;
            if( copyPrev[name][value] === false) delete copyPrev[name][value]; 
            return copyPrev;
        });
    };

    return (
        <Form className="Gallery_page__Form_Gallery">
            <Accordion defaultActiveKey={[0,1,2,3]} alwaysOpen>
                {
                    groups.map( (group, key) => (
                        <Accordion.Item eventKey={key} key={key} >
                            <Accordion.Header>
                                <span>{group.label} <sup className="length">{group.options.length}</sup> </span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul className="filter-group">
                                    {
                                        group.options.map( (option, key) => (
                                            <li key={key}>
                                                <label>
                                                    <input type="checkbox" className="filled-in" onChange={handleChange} name={group.name} value={option.id} checked={checkboxStates[group.name][option.id] || false}/>
                                                    <span>{option.label}</span>
                                                </label>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))
                }
            </Accordion>
        </Form>
    );
}

function GalleryCard({works, filtres}) {
   
    const PUBLIC_URL = process.env.PUBLIC_URL;

    return (
        <div className="Gallery_page__Gallery_Card">
            <div className="cards row">
                {works.map((work, key) => (
                    <div className="card col l3 m4 s6" key={key}>
                        <div className="card-container">
                            <img src={`${PUBLIC_URL}/images/gallery/short/${work.file_name}`} alt={work.file_name} loading="lazy"/>
                            <div className="description">
                                {filtres.map((filter, key) => (
                                        <span key={key}>
                                            {
                                                filter.options.find(item => item.id === work[filter.name]).label
                                            }
                                            ,
                                        </span>                                        
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}