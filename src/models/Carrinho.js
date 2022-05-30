import mongoose from 'mongoose';

const CarrinhoSchema = new mongoose.Schema({
    paletaId: {
        type: String,
        required: true,
    },
    quantidade: {
        type: Number,
        required: true,
    }
});

const Carrinho = mongoose.model('carrinho', CarrinhoSchema);

export default Carrinho;