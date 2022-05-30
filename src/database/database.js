import mongoose from 'mongoose';

export const connectToDatabase = () => {
    mongoose
        .connect('mongodb+srv://root:admin@api-elgeladon.b7ci2rr.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('MongoDB CONNECT'))
        .catch((err) =>
            console.log(`Erro ao connectar com o mongodb, erro: ${err}`),
        );
};