import express from 'express';
import cors from 'cors';
import { route } from './routes/paleta.route.js';

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/paletas', route);

//get all = pega tudo
// app.get('/paletas/todas-paletas', (req, res) => {
//     res.send(paletas);
// });
//get by id = pega por id
// app.get('/paletas/paleta/:id', (req, res) => {
//     const parametroId = Number(req.params.id);
//     const escolhaPaleta = paletas.find((paleta) => paleta.id === parametroId);
//     res.send(escolhaPaleta);
// });

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});