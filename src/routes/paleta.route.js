import express from 'express';
export const route = express.Router();
import {
    findAllPaletasController,
    findByIdPaletaController,
    createPaletaController,
    updatePaletaController,
    deletePaletaController,
} from '../controller/paleta.controller.js';
import { validId, validObjectBody } from '../middlewares/paleta.middleware.js'

route.get('/all-paletas', findAllPaletasController);
route.get('/one-paleta/:id', validId, findByIdPaletaController);
route.post('/create-paleta', validObjectBody, createPaletaController);
route.put('/update-paleta/:id', validId, validObjectBody, updatePaletaController);
route.delete('/delete-paleta/:id', validId, deletePaletaController);