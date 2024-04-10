import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import "./PhoneListMenu.scss"
export default function PhoneListMenu() {
    return (
        <>
         <Dropdown className="phone-list-menu">
            <Dropdown.Toggle className="phone-btn-trigger" variant="success" id="dropdown-basic">
                Дзвоніть зараз
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu-content">
                <Dropdown.Item href="tel:+380684614655">(068) 46-14-655</Dropdown.Item>
                <Dropdown.Item href="tel:+380687013888">(068) 70-13-888</Dropdown.Item>
                <Dropdown.Item href="tel:+380637739299">(063) 77-39-299</Dropdown.Item>
                <Dropdown.Item href="tel:+380952204938">(095) 22-04-938</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </>
    );
}

