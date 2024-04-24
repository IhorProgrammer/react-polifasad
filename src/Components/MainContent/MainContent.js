import PhoneListMenu from "../PhoneListMenu/PhoneListMenu";
import styles from "./MainContent.module.css"
export default function MainContent() {
    const PUBLIC_URL = process.env.PUBLIC_URL;
    return (
        <div className={styles["main-content"]}>
            <div className={styles["main-content-container"]}>
                <div className={styles["main-content-left"]}>
                    <h1>Поліфасад</h1>
                    <div>
                        <p>Новий престижний вигляд вашої оселі <br/> економія на опаленні до 60%</p>
                    </div>
                    
                    <PhoneListMenu/>
                </div>
                {/* <img className={styles["main-content-right"]} src={`${PUBLIC_URL}/images/images/photo/worker.png`} alt=""/> */}
            </div>
        </div>    
    );
}