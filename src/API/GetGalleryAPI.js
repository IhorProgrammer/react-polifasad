import config from "./config.json"
export default function GetGalleryAPI(search) {
    const building_type = new URLSearchParams(search).get('building_type');
    
    const savedGallery = sessionStorage.getItem('polifasad_gallery');
    const savedPath = sessionStorage.getItem('polifasad_gallery_path');
    if (savedPath === search && savedGallery != null) {
        return new Promise((resolve, reject) => {
            try{
                resolve(JSON.parse(savedGallery));
            } catch (ex) {
                reject(ex);
            }
        }); 
    } 

    let url = config.server + "/gallery";    
    if( building_type ) url +='?building_type=' + building_type; 

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
            sessionStorage.setItem('polifasad_gallery', JSON.stringify(data.data.message));
            sessionStorage.setItem('polifasad_gallery_path', search);
            return data.data.message;
        })
        .catch(error => {
            console.error('Произошла ошибка:', error);
            throw error;
        });
}