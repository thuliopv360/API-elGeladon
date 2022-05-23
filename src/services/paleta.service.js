const paletas = [{
        id: 1,
        sabor: 'Açaí com Leite Condensado',
        descricao: 'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
        foto: 'assets/images/acai-com-leite-condensado.png',
        preco: 10.0,
    },
    {
        id: 2,
        sabor: 'Banana com Nutella',
        descricao: 'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
        foto: 'assets/images/banana-com-nutella.png',
        preco: 10.0,
    },
    {
        id: 3,
        sabor: 'Chocolate Belga',
        descricao: 'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
        foto: 'assets/images/chocolate-belga.png',
        preco: 7.0,
    },
    {
        id: 4,
        sabor: 'Maracuja com Leite Condensado',
        descricao: 'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
        foto: 'assets/images/maracuja-com-leite-condensado.png',
        preco: 14.0,
    },
];

export const findAllPaletasService = () => {
    return paletas;
};

export const findByIdPaletaService = (parametroId) => {
    return paletas.find((paleta) => paleta.id === parametroId);
};

export const createPaletaService = (newPaleta) => {
    const newId = paletas.length + 1;
    newPaleta.id = newId;
    paletas.push(newPaleta);
    return newPaleta;
};

export const updatePaletaService = (id, paletaEdited) => {
    paletaEdited['id'] = id;
    const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);
    paletas[paletaIndex] = paletaEdited;
    return paletaEdited;
};

export const deletePaletaService = (id) => {
    const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);
    return paletas.splice(paletaIndex, 1);
};