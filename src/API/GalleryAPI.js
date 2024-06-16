import API from "./API";


export default class GalleryAPI extends API {

    constructor() {
        super("/gallery");
    }

    get(search) {
        let url = this._url;
        const type = new URLSearchParams(search).get('type');
        if( type ) url +='?type=' + type; 

        return fetch(url, {
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
} 

