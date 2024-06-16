import API from "./API";


export default class PriceAPI extends API {

    constructor() {
        super("/prices");
    }

    get(search) {
        let url = this._url;
        const density = new URLSearchParams(search).get('density');
        if( density ) url +='?density=' + density; 

        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json())
        .then(data => {
            console.log(data)
        })
    }
} 

