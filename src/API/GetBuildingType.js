import config from "./config.json"
export default function GetBuildingTypeAPI() {
    let url = config.server + "/BuildingType";  
    const sessionStorageName = 'polifasad_buildingType';
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const savedPhones = sessionStorage.getItem(sessionStorageName);
    if (savedPhones) {
        return new Promise((resolve, reject) => {
            try{
                resolve(JSON.parse(savedPhones));
            } catch (ex) {
                reject(ex);
            }
        }); 
    } 

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
            return data.data.message;
        })
        .catch(error => {
            console.error('Произошла ошибка:', error);
            throw error;
        });
}