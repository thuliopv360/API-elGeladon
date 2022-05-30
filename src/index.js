import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { route } from './routes/route.js';
import { connectToDatabase } from './database/database.js'

const port = process.env.PORT || 3000;
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/paletas', route);

app.listen(port, () => {
    console.log(`Servidor rodando em na porta ${port}`);
});