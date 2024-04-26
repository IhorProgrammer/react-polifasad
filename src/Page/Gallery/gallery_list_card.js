const data = [
    { id: 10, file_name: "Polifasad_26.01.24_001.jpg", type_home: 1 },
    { id: 11, file_name: "Polifasad_26.01.24_002.jpg", type_home: 1 },
    { id: 12, file_name: "Polifasad_26.01.24_003.jpg", type_home: 1 },
    { id: 13, file_name: "Polifasad_26.01.24_004.jpg", type_home: 1 },
    { id: 14, file_name: "Polifasad_26.01.24_005.jpg", type_home: 1 },
    { id: 15, file_name: "Polifasad_26.01.24_006.jpg", type_home: 1 },
    { id: 16, file_name: "Polifasad_26.01.24_007.jpg", type_home: 1 },
    { id: 17, file_name: "Polifasad_26.01.24_008.jpg", type_home: 1 },
    { id: 18, file_name: "Polifasad_26.01.24_009.jpg", type_home: 1 },
    { id: 19, file_name: "Polifasad_26.01.24_010.jpg", type_home: 1 },
    { id: 20, file_name: "Polifasad_26.01.24_011.jpg", type_home: 1 },
    { id: 21, file_name: "Polifasad_26.01.24_012.jpg", type_home: 1 },
    { id: 23, file_name: "Polifasad_26.01.24_014.jpg", type_home: 1 },
    { id: 25, file_name: "Polifasad_26.01.24_016.jpg", type_home: 1 },
    { id: 26, file_name: "Polifasad_26.01.24_017.jpg", type_home: 2 },
    { id: 27, file_name: "Polifasad_26.01.24_018.jpg", type_home: 2 },
    { id: 28, file_name: "Polifasad_26.01.24_019.jpg", type_home: 2 },
    { id: 29, file_name: "Polifasad_26.01.24_020.jpg", type_home: 2 },
    { id: 30, file_name: "Polifasad_26.01.24_021.jpg", type_home: 2 },
    { id: 32, file_name: "Polifasad_26.01.24_023.jpg", type_home: 2 },
    { id: 33, file_name: "Polifasad_26.01.24_024.jpg", type_home: 1 },
    { id: 35, file_name: "Polifasad_26.01.24_026.jpg", type_home: 1 },
    { id: 36, file_name: "Polifasad_26.01.24_027.jpg", type_home: 1 },
    { id: 37, file_name: "Polifasad_26.01.24_028.jpg", type_home: 2 },
    { id: 39, file_name: "Polifasad_26.01.24_030.jpg", type_home: 2 },
    { id: 40, file_name: "Polifasad_26.01.24_031.jpg", type_home: 2 },
    { id: 41, file_name: "Polifasad_26.01.24_032.jpg", type_home: 2 },
    { id: 42, file_name: "Polifasad_26.01.24_033.jpg", type_home: 2 },
    { id: 43, file_name: "Polifasad_26.01.24_034.jpg", type_home: 2 },
    { id: 44, file_name: "Polifasad_26.01.24_035.jpg", type_home: 2 },
    { id: 45, file_name: "Polifasad_26.01.24_036.jpg", type_home: 2 },
    { id: 46, file_name: "Polifasad_26.01.24_037.jpg", type_home: 2 },
    { id: 47, file_name: "Polifasad_26.01.24_038.jpg", type_home: 2 },
    { id: 48, file_name: "Polifasad_26.01.24_039.jpg", type_home: 2 },
    { id: 49, file_name: "Polifasad_26.01.24_040.jpg", type_home: 2 },
    { id: 50, file_name: "Polifasad_26.01.24_041.jpeg", type_home: 1 },
    { id: 51, file_name: "Polifasad_26.01.24_042.jpeg", type_home: 1 },
    { id: 52, file_name: "Polifasad_26.01.24_043.jpeg", type_home: 1 },
    { id: 53, file_name: "Polifasad_26.01.24_044.jpeg", type_home: 1 },
    { id: 54, file_name: "Polifasad_26.01.24_045.jpeg", type_home: 1 },
    { id: 55, file_name: "Polifasad_26.01.24_046.jpeg", type_home: 1 },
    { id: 56, file_name: "Polifasad_26.01.24_047.jpeg", type_home: 1 },
    { id: 57, file_name: "Polifasad_26.01.24_048.jpeg", type_home: 1 },
    { id: 58, file_name: "Polifasad_26.01.24_049.jpeg", type_home: 1 },
    { id: 59, file_name: "Polifasad_26.01.24_050.jpeg", type_home: 1 },
    { id: 60, file_name: "Polifasad_26.01.24_051.jpeg", type_home: 1 },
    { id: 61, file_name: "Polifasad_26.01.24_052.jpeg", type_home: 1 },
    { id: 62, file_name: "Polifasad_26.01.24_053.jpeg", type_home: 2 },
    { id: 63, file_name: "Polifasad_26.01.24_054.jpeg", type_home: 2 },
    { id: 64, file_name: "Polifasad_26.01.24_055.jpeg", type_home: 2 },
    { id: 65, file_name: "Polifasad_26.01.24_056.jpeg", type_home: 2 },
    { id: 66, file_name: "Polifasad_26.01.24_057.jpeg", type_home: 2 },
    { id: 67, file_name: "Polifasad_26.01.24_058.jpeg", type_home: 2 },
    { id: 68, file_name: "Polifasad_26.01.24_059.jpeg", type_home: 2 },
    { id: 69, file_name: "Polifasad_26.01.24_060.jpeg", type_home: 2 },
    { id: 70, file_name: "Polifasad_26.01.24_061.jpeg", type_home: 2 },
    { id: 71, file_name: "Polifasad_26.01.24_062.jpeg", type_home: 2 },
    { id: 72, file_name: "Polifasad_26.01.24_063.jpeg", type_home: 2 },
    { id: 73, file_name: "Polifasad_26.01.24_064.jpeg", type_home: 2 },
    { id: 74, file_name: "Polifasad_26.01.24_065.jpeg", type_home: 2 },
    { id: 75, file_name: "Polifasad_26.01.24_066.jpeg", type_home: 2 },
    { id: 76, file_name: "Polifasad_26.01.24_067.jpeg", type_home: 2 },
    { id: 77, file_name: "Polifasad_26.01.24_068.jpeg", type_home: 2 },
    { id: 78, file_name: "Polifasad_26.01.24_069.jpeg", type_home: 2 },
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