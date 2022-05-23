import {
    findAllPaletasService,
    findByIdPaletaService,
    createPaletaService,
    updatePaletaService,
    deletePaletaService,
} from '../services/paleta.service.js';

export const findAllPaletasController = (req, res) => {
    const paletas = findAllPaletasService();

    if (paletas.length == 0) {
        return res
            .status(404)
            .send({ message: 'Nao existe nenhuma paleta cadastrada!' });
    }

    res.send(paletas);
};

export const findByIdPaletaController = (req, res) => {
    const parametroId = Number(req.params.id);

    if (!parametroId) {
        return res.status(400).send({ message: 'Id invalido!!' });
    }

    const escolhaPaleta = findByIdPaletaService(parametroId);

    if (!escolhaPaleta) {
        return res.status(400).send({ message: 'Paleta nao encontrada!!' });
    }

    res.send(escolhaPaleta);
};

export const createPaletaController = (req, res) => {
    const paleta = req.body;

    if (!paleta ||
        !paleta.sabor ||
        !paleta.descricao ||
        !paleta.foto ||
        !paleta.preco
    ) {
        return res.status(400).send({ message: 'Envie todos os campos da paleta' });
    }
    const newPaleta = createPaletaService(paleta);
    res.status(201).send(newPaleta);
};

export const updatePaletaController = (req, res) => {
    const idParam = Number(req.params.id);
    if (!idParam) {
        return res.status(400).send({ message: 'Id invalido!!' });
    }
    const paletaEdit = req.body;
    if (!paletaEdit ||
        !paletaEdit.sabor ||
        !paletaEdit.descricao ||
        !paletaEdit.foto ||
        !paletaEdit.preco
    ) {
        return res.status(400).send({ message: 'Envie todos os campos da paleta' });
    }
    const updatedPaleta = updatePaletaService(idParam, paletaEdit);
    res.send(updatedPaleta);
};

export const deletePaletaController = (req, res) => {
    const idParam = Number(req.params.id);
    if (!idParam) {
        return res.status(400).send({ message: 'Id invalido!!' });
    }
    deletePaletaService(idParam);
    res.send({ message: 'Paleta deletada com sucesso!' });
};