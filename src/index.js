import express from 'express';
import cors from 'cors';
import { route } from './routes/paleta.route.js';
import { connectToDatabase } from './database/database.js'

const port = 3000;
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/paletas', route);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});