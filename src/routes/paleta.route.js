import express from 'express';
export const route = express.Router();
import {
    findAllPaletasController,
    findByIdPaletaController,
    createPaletaController,
    updatePaletaController,
    deletePaletaController,
} from '../controller/paleta.controller.js';

route.get('/todas-paletas', findAllPaletasController);
route.get('/paleta/:id', findByIdPaletaController);
route.post('/create', createPaletaController);
route.put('/update/:id', updatePaletaController);
route.delete('/delete/:id', deletePaletaController);