import API from "./API";


export default class PhoneAPI extends API {

    constructor() {
        super("/phone");
    }

    get() {
        return fetch(this._url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json())
        .then(r => {
            if(r.meta.status === "200" ) {
                return r.data;                
            }
            else {
                console.error(r.meta.message);
                return [];
            }
        })
    }

    add( phoneNumber ) {
        const data = new FormData();
        data.append( "phone", phoneNumber);
        data.append( "token", "1245678" );
        return fetch(this._url, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + super.getToken() 
            },
            body: data
        }).then(r => r.json())
        .then(r => {
            if(r.meta.status === "200" ) {
                return true;                
            }
            else {
                console.error(r.meta.message);
                return false;
            }
        })
    }

    remove( id ) {
        return fetch(`${this._url}?phone_id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + super.getToken() 
            }
        }).then(r => r.json())
        .then(r => {
            if(r.meta.status === "200" ) {
                return true;                
            }
            else {
                console.error(r.meta.message);
                return false;
            }
        })
    }

    replace( oldId, newId ) {
        const data = {
            "id_from": oldId,
            "id_to": newId
        };
        return fetch(`${this._url}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + super.getToken() 
            },
            body: JSON.stringify(data)
        }).then(r => r.json())
        .then(r => {
            if(r.meta.status === "200" ) {
                return true;                
            }
            else {
                console.error(r.meta.message);
                return false;
            }
        })
    }
} 

