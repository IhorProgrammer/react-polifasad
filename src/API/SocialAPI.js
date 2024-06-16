import API from "./API";


export default class SocialAPI extends API {

    constructor() {
        super("/social");
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
} 

