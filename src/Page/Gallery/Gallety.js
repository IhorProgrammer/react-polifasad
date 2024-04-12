import MainSlider from "../../Components/MainSlider/MainSlider";
import {Accordion, ListGroup, Form } from 'react-bootstrap';
import "./Gallery.scss"
//import 'bootstrap/dist/css/bootstrap.min.css';

import APIGetFilters from "./gallery_list_filters";
import APIGetGallery from "./gallery_list_card";
import GetJsonTypeTexture from "./gallery_list_type_texture";
import { useState } from "react";
import { useLocation } from 'react-router-dom';

export default function Gallery() {
    const groups = APIGetFilters();
    const location = useLocation();
    // gallery?type=1,2&texture=1
    // Отримую такий запрос після чого я змінюю вміст. 
    // Розбираємо це і потім відправляємо у вигляді посилання на API там розбирається і видає результат
    const works = APIGetGallery(location.search); 
    return (
        <main className="Gallery_page">
            <div>
                <MainSlider className="gallery-slider"></MainSlider>
                <div className="content-container">
                    <h1>Галерея</h1>
                </div>
            </div>
            <div className="Gallery_page__Filters_Card">
                <FormGalleryDesktop groups={groups}/>
                <GalleryCard works={works}/>
            </div>

        </main>
    );
}


function FormGalleryDesktop({groups}) {
    const [checkboxStates, setCheckboxStates] = useState(
        groups.reduce((acc, group) => {
            acc[group.name] = {}
            group.options.forEach(option => {
                acc[group.name][option.id] = false;
            });
            return acc;
        }, {})
    );

    const handleChange = (event) => {
        const { name, checked, value } = event.target;
        setCheckboxStates(prev => {
            const copyPrev = {...prev}
            copyPrev[name][value] = checked;  
            return copyPrev
        });
    };

    // Функція для обробки відправлення форми
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(checkboxStates);
        // Відправка даних на сервер тут
    };

    return (
        <Form className="Gallery_page__Filters_Gallery">
            <p className="title">Фільтри</p>
            <hr/>
            <Accordion defaultActiveKey="0" alwaysOpen>
                {
                    groups.map( (group, key) => (
                        <Accordion.Item eventKey={key} key={key}>
                            <Accordion.Header>
                                <span>{group.label} <sup className="length">{group.options.length}</sup> </span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul className="filter-group">
                                    {
                                        group.options.map( (option, key) => (
                                            <li key={key}>
                                                <label>
                                                    <input type="checkbox" className="filled-in" onChange={handleChange} name={group.name} value={option.id}/>
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



function GalleryCard({works}) {
    const PUBLIC_URL = process.env.PUBLIC_URL;
    const typeTexture = GetJsonTypeTexture();
    return (
        <div className="Gallery_page__Gallery_Card">
            <div className="cards row">
                {works.map((work, key) => (
                    <div className="card col xl3 l4 m6 s12" key={key}>
                        <div className="card-container">
                            <img src={`${PUBLIC_URL}/images/gallery/short/${work.file_name}`} alt={work.file_name} loading="lazy"/>
                            <div className="description">
                                <span>{typeTexture.type.find(item => item.id === work.type).name}</span>
                                ,
                                <span>{typeTexture.texture.find(item => item.id === work.texture).name}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}