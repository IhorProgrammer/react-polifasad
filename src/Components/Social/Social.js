import SocialAPI from '../../API/SocialAPI';
import styles from './Social.module.css';
import { useState, useEffect } from 'react';

export default function Social({className}) {

    const [social, setSocial] = useState([])
    useEffect(() => {
        new SocialAPI().get().then((data) => { setSocial(data); });
    }, []); 

    const PUBLIC_URL = process.env.PUBLIC_URL;
    return (
        <div className={`${styles.social} ${styles[className]}`}>
            {
                social.map( (soc, key) => 
                    <a key={key} aria-label={soc.social_name} href={soc.ref}><img src={`${PUBLIC_URL}/images/icons/${soc.image_name}`} alt={soc.social_name}/></a>
                )
            }
        </div>
    );
}