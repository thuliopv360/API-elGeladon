import { findAllPaletasService, findByIdPaletaService } from '../services/paleta.service.js';

export const findAllPaletasController = (req, res) => {
    const paletas = findAllPaletasService();
    res.send(paletas);
};

export const findByIdPaletaController = (req, res) => {
    const parametroId = Number(req.params.id);
    const escolhaPaleta = findByIdPaletaService(parametroId);
    res.send(escolhaPaleta);
};