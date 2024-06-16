import Social from "../Social/Social";
import style from "./Footer.module.css"
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import PhoneAPI from "../../API/PhoneAPI";

export default function Footer() {
    const PUBLIC_URL = process.env.PUBLIC_URL;
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        new PhoneAPI().get().then((data) => { setPhones(data); });

    }, []); 
    


    return (
        <footer className={style.footer}>
            <div className={`${style.container} row inherit`}>
                <div className="map col s12 l6 inherit">
                    <iframe title="GoogleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465.81901409183405!2d33.12213982135697!3d48.66589883859664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40da76240b615555%3A0xa325d21e99a65fd5!2z0J_QvtC70LjRhNCw0YHQsNC0INCQ0LvQtdC60YHQsNC90LTRgNC40Y8!5e0!3m2!1sru!2sua!4v1708374843628!5m2!1sru!2sua"  style={{width:"600", height:"450",border:0}} loading="lazy"></iframe>
                    <a href="https://www.google.com/maps?ll=48.665925,33.122334&z=18&t=m&hl=ru&gl=UA&mapclient=embed&cid=11756033431189217237" className={style.info}>
                        <p>Вул. Братська 75 (Калініна) / м. Олександрія / Кіровоградська область</p>
                        <img className={`${style.icon} inherit`} src={`${PUBLIC_URL}/images/icons/location.svg`} alt=""/>
                    </a> 
                </div>
                <div className="right col l5 s12">
                    <div className="col s12 m6 l7">
                        <p className="center">Навігація</p>
                        <ul>
                            <li><Link to="/">Головна</Link></li>
                            <li><Link to="price">Ціни</Link></li>
                            <li><Link to="tile">Зразки термоплит</Link></li>
                            <li>
                                <Link to="galery">Галерея робіт</Link>
                                <ul className="browser-default" type="disc">
                                    <li><Link to="gallery?type_home=1">БАГАТОПОВЕРХОВІ  БУДИНКИ</Link></li> 
                                    <li><Link to="gallery?type_home=2">ПРИВАТНІ  БУДИНКИ</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className={`${style["contacts"]} col s12 m6 l5`}>
                        <p>Номера телефонів</p>
                        <ul className={style["phone-list"]}>
                            {phones.map((phone, key) => <li key={key}><a href={"tel:+" + phone.phone}>+{phone.phone}</a></li>)}
                        </ul>
                        <hr/>
                        <p>Соц. мережі</p>
                        <div className={style["social-container"]}>
                            <Social/>
                        </div>
                    </div>
                </div> 
            </div>
        </footer> 
    );
}