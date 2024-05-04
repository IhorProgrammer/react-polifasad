import config from "./config.json"
export default function GetPhonesAPI() {
    let url = config.server + "/phones";    

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const savedPhones = sessionStorage.getItem('polifasad_phones');
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
            sessionStorage.setItem('polifasad_phones', JSON.stringify(data.data.message));
            return data.data.message;
        })
        .catch(error => {
            console.error('Произошла ошибка:', error);
            throw error;
        });
}