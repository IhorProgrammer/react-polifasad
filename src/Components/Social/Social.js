import GetSocialAPI from '../../API/GetSocialAPI';
import styles from './Social.module.css';
import { useState, useEffect } from 'react';
export default function Social({className}) {

    const [social, setSocial] = useState([])
    useEffect(() => {
        GetSocialAPI().then((message) => { setSocial(message); });
    }, []); 

    const PUBLIC_URL = process.env.PUBLIC_URL;
    return (
        <div className={`${styles.social} ${styles[className]}`}>
            {
                social.map( (soc) => 
                    <a aria-label={soc.social_name} href={soc.ref}><img src={`${PUBLIC_URL}/images/icons/${soc.image_name}`} alt={soc.social_name}/></a>
                )
            }
        </div>
    );
}