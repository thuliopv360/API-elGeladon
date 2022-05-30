import mongoose from 'mongoose';

export const connectToDatabase = () => {
    mongoose
        .connect(process.env.URI_DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('MongoDB Atlas Conectado!'))
        .catch((err) =>
            console.log(`Erro ao connectar com o mongodb, erro: ${err}`),
        );
};