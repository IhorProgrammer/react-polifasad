const data = [
    { id: 10, file_name: "11.04.2024__TeplyDim__10.jpg", type_tile: 1, texture: 1, type_home: 2 },
    { id: 11, file_name: "11.04.2024__TeplyDim__11.jpg", type_tile: 2, texture: 2, type_home: 2 },
    { id: 12, file_name: "11.04.2024__TeplyDim__12.jpg", type_tile: 3, texture: 3, type_home: 2 },
    { id: 13, file_name: "11.04.2024__TeplyDim__13.jpg", type_tile: 4, texture: 3, type_home: 1 },
    { id: 14, file_name: "11.04.2024__TeplyDim__14.jpg", type_tile: 5, texture: 2, type_home: 1 },
    { id: 15, file_name: "11.04.2024__TeplyDim__15.jpg", type_tile: 5, texture: 3, type_home: 1 },
    { id: 16, file_name: "11.04.2024__TeplyDim__16.jpg", type_tile: 6, texture: 3, type_home: 1 },
    { id: 17, file_name: "11.04.2024__TeplyDim__17.jpg", type_tile: 7, texture: 3, type_home: 2 },
    { id: 18, file_name: "11.04.2024__TeplyDim__18.jpg", type_tile: 8, texture: 3, type_home: 2 },
    { id: 19, file_name: "11.04.2024__TeplyDim__19.jpg", type_tile: 9, texture: 3, type_home: 2 },
    { id: 20, file_name: "11.04.2024__TeplyDim__20.jpg", type_tile: 2, texture: 3, type_home: 2 },
    { id: 21, file_name: "11.04.2024__TeplyDim__21.jpg", type_tile: 2, texture: 3, type_home: 2 },
    { id: 22, file_name: "11.04.2024__TeplyDim__22.jpg", type_tile: 2, texture: 3, type_home: 2 },
    { id: 23, file_name: "11.04.2024__TeplyDim__23.jpg", type_tile: 2, texture: 3, type_home: 2 },
    { id: 24, file_name: "11.04.2024__TeplyDim__24.jpg", type_tile: 4, texture: 3, type_home: 2 },
    { id: 25, file_name: "11.04.2024__TeplyDim__25.jpg", type_tile: 5, texture: 3, type_home: 2 },
    { id: 26, file_name: "11.04.2024__TeplyDim__26.jpg", type_tile: 6, texture: 3, type_home: 1 },
    { id: 27, file_name: "11.04.2024__TeplyDim__27.jpg", type_tile: 7, texture: 3, type_home: 1 },
    { id: 28, file_name: "11.04.2024__TeplyDim__28.jpg", type_tile: 8, texture: 3, type_home: 2 },
    { id: 29, file_name: "11.04.2024__TeplyDim__29.jpg", type_tile: 9, texture: 3, type_home: 2 },
    { id: 31, file_name: "11.04.2024__TeplyDim__31.jpg", type_tile: 12, texture:3, type_home: 2 },
    { id: 33, file_name: "11.04.2024__TeplyDim__33.jpg", type_tile: 14, texture:2, type_home: 1 },
    { id: 34, file_name: "11.04.2024__TeplyDim__34.jpg", type_tile: 15, texture:2, type_home: 2 },
    { id: 35, file_name: "11.04.2024__TeplyDim__35.jpg", type_tile: 16, texture:2, type_home: 2 },
    { id: 36, file_name: "11.04.2024__TeplyDim__36.jpg", type_tile: 17, texture:2, type_home: 1 },
    { id: 38, file_name: "11.04.2024__TeplyDim__38.jpg", type_tile: 18, texture:2, type_home: 2 },
    { id: 39, file_name: "11.04.2024__TeplyDim__39.jpg", type_tile: 1, texture: 2, type_home: 2 },
]

export default function APIGetGallery(search) {
    
    const searchParams = new URLSearchParams(search);

    const type_tile = searchParams.get('type_tile') ? searchParams.get('type_tile').split(',').map(Number) : [];
    const textures = searchParams.get('texture') ? searchParams.get('texture').split(',').map(Number) : [];
    const type_home = searchParams.get('type_home') ? searchParams.get('type_home').split(',').map(Number) : [];
    const filteredData = data.filter(item => 
        (type_tile.length === 0 || type_tile.includes(item.type_tile)) 
        && (textures.length === 0 || textures.includes(item.texture)) 
        && (type_home.length === 0 || type_home.includes(item.type_home))
    );
  
    return filteredData;
}