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
    
    function addPhone() {
        const phone_add_input = document.getElementById("phone_add_input");
        if(  /^\d+$/.test(phone_add_input.value) ) {
            new PhoneAPI().add(phone_add_input.value).then(( res ) => {
                if( !res ) return;

                new PhoneAPI().get().then((data) => { 
                    data = data.sort((a,b) => a.phone_id - b.phone_id );
                    setPhones(data); 
                });
            });
        }
    }
    function deletePhone(event) {
        const phone_id = event.target.closest("[data-phone-id]").getAttribute("data-phone-id");
        new PhoneAPI().remove(phone_id).then(( res ) => {
            if( !res ) return;

            new PhoneAPI().get().then((data) => { 
                data = data.sort((a,b) => a.phone_id - b.phone_id );
                setPhones(data); 
            });
        });
        event.stopPropagation();
    }

    function replacePhones(event) {
        
        const this_phone_id = event.target.getAttribute("data-phone-id");
        const next_phone_id = event.target.nextElementSibling.getAttribute("data-phone-id");
        if( !next_phone_id ) return;
        new PhoneAPI().replace(this_phone_id, next_phone_id).then(( res ) => {
            if( !res ) return;
            new PhoneAPI().get().then((data) => { 
                data = data.sort((a,b) => a.phone_id - b.phone_id );
                setPhones(data); 
            });
        });
    }

    return (
        <>
         <Dropdown className="phone-list-menu admin" autoClose={false}>
            <Dropdown.Toggle className="phone-btn-trigger" variant="success" id="dropdown-basic">
                Дзвоніть зараз
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu-content" data-phone-list="dropdown">
                {
                    phones.map(
                        (phone, key) => 
                        <Dropdown.Item key={key} data-phone-id={phone.phone_id} onClick={replacePhones}>
                            ▼ 
                            +{phone.phone}
                            <img src="images/icons/delete.svg" onClick={deletePhone}/> 
                        </Dropdown.Item >
                    )
                }
                <Dropdown.Item >
                <div className="row phone-add-container">
                    <input type="tel" id="phone_add_input" className="phone-add-input col s10"/>
                    <div className="waves-effect waves-light phone-add-button red col s2" onClick={addPhone}>
                        +
                    </div>
                </div>
                </Dropdown.Item> 
            </Dropdown.Menu>
        </Dropdown>
        </>
    );
}


