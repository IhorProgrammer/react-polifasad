import { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import "./PhoneListMenu.scss"
import PhoneAPI from '../../API/PhoneAPI';
export default function PhoneListMenu() {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        new PhoneAPI().get().then((data) => { 
            data = data.sort((a,b) => a.phone_id - b.phone_id );
            setPhones(data); 
        });
    }, []); 
    
    return (
        <>
         <Dropdown className="phone-list-menu">
            <Dropdown.Toggle className="phone-btn-trigger" variant="success" id="dropdown-basic">
                Дзвоніть зараз
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu-content">
                {
                    phones.map((phone, key) => <Dropdown.Item key={key} href={"tel:+" + phone.phone}>+{phone.phone}</Dropdown.Item>)
                }
                <Dropdown.Item>
                    <input type='tel'></input>
                    
                </Dropdown.Item> 

            </Dropdown.Menu>
        </Dropdown>
        </>
    );
}


