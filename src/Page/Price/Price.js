import { useState, useEffect } from "react";
import { useLocation} from 'react-router-dom';
import "./Price.scss"
import PriceAPI from "../../API/PiceAPI";

export default function Price() {
    const location = useLocation();
    const [priceInfo, setPriceInfo] = useState(null)
    useEffect(() => {
        new PriceAPI().get(location.search).then((message) => { setPriceInfo(message); });
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
                        <p className="Price-page__info-title">Ціна поліфасадної плитки, ЛЮБОЇ фактури на пенопласті {priceInfo[0].density} щільності:</p>
                        <ul className="Price-page__list browser-default">
                            {
                                priceInfo.map( (item, key) => 
                                    <li className="Price-page__item" key={key}>
                                        {`${item.width} см - ${item.price} грн. метр квадратний`}
                                    </li>
                                )
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