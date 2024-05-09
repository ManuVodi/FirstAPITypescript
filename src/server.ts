import dotenv from 'dotenv';
import express from 'express';
const userRoute = require('./user/routes/userRoute')

const app = express();
dotenv.config();

const PORT = process.env.PORTA || 8000;

app.use(express.json());
app.use(userRoute)

app.listen(PORT, () => {
    console.log(`O servidor está ouvindo na porta ${PORT}`);
})