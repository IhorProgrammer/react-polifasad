import styles from './Social.module.css';

export default function Social({className}) {
    const PUBLIC_URL = process.env.PUBLIC_URL;
    console.log(`${styles.social} ${className}`)
    return (
        <div className={`${styles.social} ${styles[className]}`}>
            <a aria-label="facebook" href="https://www.facebook.com/teplaosela"><img src={PUBLIC_URL+"/images/icons/facebook.svg"} alt=""/></a>
            <a aria-label="tiktok" href="https://www.tiktok.com/@polifasadolexandria?_t=8k4QzrOa3zp&_r=1"><img src={PUBLIC_URL+"/images/icons/tictok.svg"} alt=""/></a>
            <a aria-label="viber" href="viber://chat?number=%2B380684614655"><img src={PUBLIC_URL+"/images/icons/viber.svg"} alt=""/></a>
            <a aria-label="telegram" href="https://t.me/polifasadolexandriya"><img src={PUBLIC_URL+"/images/icons/telegram.svg"} alt=""/></a>
        </div>
    );
}