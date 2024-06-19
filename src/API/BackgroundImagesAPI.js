import API from "./API";


export default class BackgroundImagesAPI extends API {

    constructor() {
        super("/background_images");
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

    add( selectedFile ) {
        const formData = new FormData();
        formData.append('background_image', selectedFile);

        return fetch(this._url, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + super.getToken() 
            },
            body: formData
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

    remove ( idImage ) {
        return fetch(this._url + "?id=" + idImage, {
            method: 'DELETE',
            headers: {
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

