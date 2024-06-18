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
} 

