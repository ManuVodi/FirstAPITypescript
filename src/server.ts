import dotenv from 'dotenv';
import express from 'express';

const app = express();
dotenv.config();

const PORT = process.env.PORTA || 8000;

app.get('/teste', (_, res) => {
    return res.status(200).json(`Deu boa`)
})

app.listen(PORT, () => {
    console.log(`O servidor está ouvindo na porta ${PORT}`);
})