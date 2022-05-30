import mongoose from 'mongoose';

export const validId = (req, res, next) => {
    const idParam = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(idParam)) {
        return res.status(400).send({ message: 'Id invalido!!' });
    }
    next();
};

export const validObjectBody = (req, res, next) => {
    const paleta = req.body;

    if (!paleta ||
        !paleta.sabor ||
        !paleta.descricao ||
        !paleta.foto ||
        !paleta.preco
    ) {
        return res.status(400).send({ message: 'Envie todos os campos da paleta' });
    }
    next();
};
export const validObjectBodyCarrinho = (req, res, next) => {
    const carrinho = req.body;


    carrinho.forEach((item) => {
        if (!item || !item.paletaId || !item.quantidade) {
            return res
                .status(400)
                .send({ message: 'Envie todos os campos das paletas' });
        }
    });

    next();
};
// export default (validId, validObjectBody);