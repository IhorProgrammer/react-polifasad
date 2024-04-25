import { useState, useEffect } from "react";
import { useLocation} from 'react-router-dom';
import "./Price.scss"
export default function Price() {
    const [priceInfo, setPriceInfo] = useState(null)
    const location = useLocation();
    
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const timer = setTimeout(() => { 
            const density = searchParams.get('density')
            const api = GetPriceAPI(density?density:35);
            setPriceInfo(api) 
        }, 1)
        return () => {
            clearTimeout(timer);
        }
    }, [location.search]);

    
    return (
        <div className="Price-page">
            <div className="Price-page__title">
                <h1>Ціна</h1>
                <p>Ціни на кожний об’єкт обговорюється окремо</p>
            </div>
            <div className="Price-page__info">
                {
                    priceInfo == null
                    ||
                    <>
                        <p className="Price-page__info-title">Ціна поліфасадної плитки, ЛЮБОЇ фактури на пенопласті {priceInfo.density} щільності:</p>
                        <ul className="Price-page__list browser-default">
                            {
                                priceInfo.prices.map( item => {
                                    for (const key in item) {
                                        if (item.hasOwnProperty(key)) {
                                            return <li className="Price-page__item" key={key}>
                                                {`${key}${priceInfo.measurement} - ${item[key]} ${priceInfo.currency} метр квадратний`}
                                            </li>
                                        }
                                    }
                                })
                            }
                        </ul>
                    </>
                }
            </div>
            <hr/>
            <iframe width="1028" height="578" src="https://www.youtube.com/embed/gAhW8YFKDZg" title="Якісне утеплення будинків термопанелями Поліфасад від &quot; Тепла Оселя &quot;. Поліфасад Олександрія." frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    );
}

function GetPriceAPI(density) {
    switch (density + "") {
        case "35": return {measurement: "см", prices: [ {3:240}, {5:240}, {10:240} ], currency: "UAN", density: density}
        case "25": return {measurement: "см", prices: [ {3:240}, {5:240}, {10:240} ], currency: "UAN", density: density}
        case "50": return {measurement: "см", prices: [ {3:240}, {5:240}, {10:240} ], currency: "UAN", density: density}
    }     
}