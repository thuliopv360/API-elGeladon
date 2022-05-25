import mongoose from 'mongoose';

export const connectToDatabase = () => {
    mongoose
        .connect('mongodb://localhost:27017/paletas-db', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('MongoDB CONNECT'))
        .catch((err) =>
            console.log(`Erro ao connectar com o mongodb, erro: ${err}`),
        );
};