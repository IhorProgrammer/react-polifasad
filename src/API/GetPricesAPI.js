import config from "./config.json"
export default function GetPriceAPI(search) {
    const sessionStorageName = "polifasad_prices";

    const savedPrice = sessionStorage.getItem(sessionStorageName);
    const savedPath = sessionStorage.getItem(sessionStorageName + '_path');
    if (savedPath === search && savedPrice != null) {
        return new Promise((resolve, reject) => {
            try{
                resolve(JSON.parse(savedPrice));
            } catch (ex) {
                reject(ex);
            }
        }); 
    } 

    let url = config.server + "/prices";
    const density = new URLSearchParams(search).get('density');
    if( density ) url +='?density=' + density; 

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка HTTP: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            if(data.data.status === 0) {
                throw new Error(data.data.message);
            }
            sessionStorage.setItem(sessionStorageName, JSON.stringify(data.data.message));
            sessionStorage.setItem(sessionStorageName+'_path', search);
            return data.data.message;
        })
        .catch(error => {
            console.error('Произошла ошибка:', error);
            throw error;
        });
}