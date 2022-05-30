import express from 'express';
export const route = express.Router();
import {
    findAllPaletasController,
    findByIdPaletaController,
    createPaletaController,
    updatePaletaController,
    deletePaletaController,
} from '../controller/paleta.controller.js';
import {
    findAllCarrinhoController,
    createManyItemsCarrinhoController,
    deleteAllItemsCarrinhoController,
} from '../controller/carrinho.controller.js';
import { validId, validObjectBody, validObjectBodyCarrinho } from '../middlewares/paleta.middleware.js';

route.get('/all-paletas', findAllPaletasController);
route.get('/one-paleta/:id', validId, findByIdPaletaController);
route.post('/create-paleta', validObjectBody, createPaletaController);
route.put(
    '/update-paleta/:id',
    validId,
    validObjectBody,
    updatePaletaController,
);
route.delete('/delete-paleta/:id', validId, deletePaletaController);



route.get('/all-carrinho', findAllCarrinhoController);
route.post('/create-carrinho', validObjectBodyCarrinho, createManyItemsCarrinhoController);
route.delete('/finish-carrinho', deleteAllItemsCarrinhoController);