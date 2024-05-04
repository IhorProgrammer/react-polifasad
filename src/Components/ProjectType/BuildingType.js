import { Link } from "react-router-dom";
import style from "./BuildingType.module.css"
import GetBuildingTypeAPI from "../../API/GetBuildingType";
import { useState, useEffect } from "react";

export default function BuildingType() {
    const PUBLIC_URL = process.env.PUBLIC_URL;
    const [buildingsType, setBuildingsType] = useState([])
    useEffect(() => {
        GetBuildingTypeAPI().then((message) => { setBuildingsType(message); });
    }, []); 

    return (
        <section className={style["project-type"]}>
            <div className="container">
                <div className={style["cards"]}>
                    {
                        buildingsType.map( (buildingType) => (
                            <div className={`${style["card"]} center`} key={buildingType.id}>
                                <div className={style["img-conteiner"]}>
                                    <img alt={buildingType.building_name} src={`${PUBLIC_URL}/images/building_type/${buildingType.image_name}`}/>
                                </div>
                                <div className={style["content"]}>
                                    <div className={style["type"]}>
                                        <p>{buildingType.building_name}</p>
                                    </div>
                                    <Link to={`gallery?building_type=${buildingsType.id}`} className="anm-pulse">ПОДИВИТИСЬ</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}