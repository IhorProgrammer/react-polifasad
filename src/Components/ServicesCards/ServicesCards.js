import style from "./ServicesCards.module.css"

export default function ServicesCards(){
    const PUBLIC_URL = process.env.PUBLIC_URL;
    const AllServices = [
        {
            iconSrc: "images/icons/factory-svgrepo-com.svg",
            title: "Власне виробництво",
            describe: "Власне виробництво - гарантія високої якості",
        },
        {
            iconSrc: "images/icons/consultation-svgrepo-com.svg",
            title: "Безкоштовна консультація",
            describe: "Безкоштовна фахова консультація та розрахунок",
        },
        {
            iconSrc: "images/icons/list-verification-symbol-svgrepo-com.svg",
            title: "Надійність",
            describe: "Гарантія 30 років",
        },
        {
            iconSrc: "images/icons/best-price-guarantee-warranty-svgrepo-com.svg",
            title: "Гарантія",
            describe: "Гарантія 30 років з оформленням договору",
        },
    ];

    return (
        <div className={style["services-cards"]}>
            <div className={`${style["container"]} row`}>
                {AllServices.map(({title, describe, iconSrc}, key) => (
                    <div className={`${style["card"]} col s12 m6 l3`} key={key}>
                        <div className={style["content"]}>
                            <img className={style["icon"]} src={`${PUBLIC_URL}/${iconSrc}`} alt=""/>
                            <div className={style["description"]}>
                                <p className={style["title"]}>{title}</p>    
                                <p className={style["describe"]}>{describe}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}