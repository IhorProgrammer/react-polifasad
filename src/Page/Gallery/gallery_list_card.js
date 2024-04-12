const data = [
    { id: 10, file_name: "11.04.2024__TeplyDim__10.jpg", type: 1, texture: 1 },
    { id: 11, file_name: "11.04.2024__TeplyDim__11.jpg", type: 2, texture: 2 },
    { id: 12, file_name: "11.04.2024__TeplyDim__12.jpg", type: 3, texture: 3 },
    { id: 13, file_name: "11.04.2024__TeplyDim__13.jpg", type: 4, texture: 3 },
    { id: 14, file_name: "11.04.2024__TeplyDim__14.jpg", type: 5, texture: 2 },
    { id: 15, file_name: "11.04.2024__TeplyDim__15.jpg", type: 5, texture: 3 },
    { id: 16, file_name: "11.04.2024__TeplyDim__16.jpg", type: 6, texture: 3 },
    { id: 17, file_name: "11.04.2024__TeplyDim__17.jpg", type: 7, texture: 3 },
    { id: 18, file_name: "11.04.2024__TeplyDim__18.jpg", type: 8, texture: 3 },
    { id: 19, file_name: "11.04.2024__TeplyDim__19.jpg", type: 9, texture: 3 },
    { id: 20, file_name: "11.04.2024__TeplyDim__20.jpg", type: 2, texture: 3 },
    { id: 21, file_name: "11.04.2024__TeplyDim__21.jpg", type: 2, texture: 3 },
    { id: 22, file_name: "11.04.2024__TeplyDim__22.jpg", type: 2, texture: 3 },
    { id: 23, file_name: "11.04.2024__TeplyDim__23.jpg", type: 2, texture: 3 },
    { id: 24, file_name: "11.04.2024__TeplyDim__24.jpg", type: 4, texture: 3 },
    { id: 25, file_name: "11.04.2024__TeplyDim__25.jpg", type: 5, texture: 3 },
    { id: 26, file_name: "11.04.2024__TeplyDim__26.jpg", type: 6, texture: 3 },
    { id: 27, file_name: "11.04.2024__TeplyDim__27.jpg", type: 7, texture: 3 },
    { id: 28, file_name: "11.04.2024__TeplyDim__28.jpg", type: 8, texture: 3 },
    { id: 29, file_name: "11.04.2024__TeplyDim__29.jpg", type: 9, texture: 3 },
    { id: 31, file_name: "11.04.2024__TeplyDim__31.jpg", type: 12, texture: 3 },
    { id: 32, file_name: "11.04.2024__TeplyDim__32.jpg", type: 13, texture: 3 },
    { id: 33, file_name: "11.04.2024__TeplyDim__33.jpg", type: 14, texture: 2 },
    { id: 34, file_name: "11.04.2024__TeplyDim__34.jpg", type: 15, texture: 2 },
    { id: 35, file_name: "11.04.2024__TeplyDim__35.jpg", type: 16, texture: 2 },
    { id: 36, file_name: "11.04.2024__TeplyDim__36.jpg", type: 17, texture: 2 },
    { id: 38, file_name: "11.04.2024__TeplyDim__38.jpg", type: 18, texture: 2 },
    { id: 39, file_name: "11.04.2024__TeplyDim__39.jpg", type: 1, texture: 2 },
]

export default function APIGetGallery(search) {
    
    const searchParams = new URLSearchParams(search);
    const type = searchParams.get('type');
    const texture = searchParams.get('texture');

    const types = type ? type.split(',').map(Number) : [];
    const textures = texture ? texture.split(',').map(Number) : [];
    
    const filteredData = data.filter(item => 
        (types.length === 0 || types.includes(item.type)) &&
        (textures.length === 0 || textures.includes(item.texture))
    );
  
    return filteredData;
}