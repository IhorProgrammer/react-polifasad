import API from "./API";


export default class BuildingTypeAPI extends API {

    constructor() {
        super("/building_type");
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

