import { Link } from "react-router-dom";
import style from "./ProjectType.module.css"

export default function ProjectType() {
    const PUBLIC_URL = process.env.PUBLIC_URL;
    const cards = [
        {url:"images/images/photo/h2.jpg", name: "БАГАТОПОВЕРХОВІ  БУДИНКИ", href:"gallery?type_home=1"}, 
        {url:"images/images/photo/h1.jpg", name: "ПРИВАТНІ  БУДИНКИ",  href:"gallery?type_home=2"},
    ];

    return (
        <section className={style["project-type"]}>
            <div className="container">
                <div className={style["cards"]}>
                    {
                        cards.map( (card, key) => (
                            <div className={`${style["card"]} center`} key={key}>
                                <div className={style["img-conteiner"]}>
                                    <img alt={card.name} src={`${PUBLIC_URL}/${card.url}`}/>
                                </div>
                                <div className={style["content"]}>
                                    <div className={style["type"]}>
                                        <p>{card.name}</p>
                                    </div>
                                    <Link to={`${card.href}`} className="anm-pulse">ПОДИВИТСЬ</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}