import express from 'express'
export const route = express.Router();
import { findAllPaletasController, findByIdPaletaController } from '../controller/paleta.controller.js';

route.get('/todas-paletas', findAllPaletasController);
route.get('/paleta/:id', findByIdPaletaController);