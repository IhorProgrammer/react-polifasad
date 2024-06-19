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

    replace( id, title, imageName, file = null) {
        const formData = new FormData();
        if( file ) formData.append('image', file);
        formData.append( 'id', id );
        formData.append( 'title', title );
        formData.append( 'imageName', imageName );
        return fetch(`${this._url}`, {
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

