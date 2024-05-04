import { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import "./PhoneListMenu.scss"
import GetPhonesAPI from '../../API/GetPhonesAPI';
export default function PhoneListMenu() {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        GetPhonesAPI().then((message) => { setPhones(message); });
    }, []); 
    
    return (
        <>
         <Dropdown className="phone-list-menu">
            <Dropdown.Toggle className="phone-btn-trigger" variant="success" id="dropdown-basic">
                Дзвоніть зараз
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu-content">
                {
                    phones.map((phone, key) => <Dropdown.Item key={key} href={"tel:+38" + phone.number}>+38{phone.number}</Dropdown.Item>)
                }
            </Dropdown.Menu>
        </Dropdown>
        </>
    );
}

