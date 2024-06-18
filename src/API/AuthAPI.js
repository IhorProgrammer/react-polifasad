import API from "./API";


export default class AuthAPI extends API {

    constructor() {
        super("/auth");
    }

    get(login, password) {
        return fetch(`${this._url}?login=${login}&password=${password}`, {
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
                return null;
            }
        })
    }
} 

