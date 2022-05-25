import express from 'express';
export const route = express.Router();
import {
    findAllPaletasController,
    findByIdPaletaController,
    createPaletaController,
    updatePaletaController,
    deletePaletaController,
} from '../controller/paleta.controller.js';

route.get('/all-paletas', findAllPaletasController);
route.get('/one-paleta/:id', findByIdPaletaController);
route.post('/create-paleta', createPaletaController);
route.put('/update-paleta/:id', updatePaletaController);
route.delete('/delete-paleta/:id', deletePaletaController);