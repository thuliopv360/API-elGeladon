import mongoose from 'mongoose';
import {
    findAllPaletasService,
    findByIdPaletaService,
    createPaletaService,
    updatePaletaService,
    deletePaletaService,
} from '../services/paleta.service.js';

export const findAllPaletasController = async(req, res) => {
    const allPaletas = await findAllPaletasService();

    if (allPaletas.length == 0) {
        return res
            .status(404)
            .send({ message: 'Nao existe nenhuma paleta cadastrada!' });
    }

    res.send(allPaletas);
};

export const findByIdPaletaController = async(req, res) => {
    const idParam = req.params.id;
    const chosenPaleta = await findByIdPaletaService(idParam);

    if (!chosenPaleta) {
        return res.status(400).send({ message: 'Paleta nao encontrada!!' });
    }

    res.send(chosenPaleta);
};

export const createPaletaController = async(req, res) => {
    const paleta = req.body;
    const newPaleta = await createPaletaService(paleta);
    res.status(201).send(newPaleta);
};

export const updatePaletaController = async(req, res) => {
    const idParam = req.params.id;
    const editPaleta = req.body;
    const updatedPaleta = await updatePaletaService(idParam, editPaleta);
    res.send(updatedPaleta);
};

export const deletePaletaController = async(req, res) => {
    const idParam = req.params.id;
    await deletePaletaService(idParam);
    res.send({ message: 'Paleta deletada com sucesso!' });
};