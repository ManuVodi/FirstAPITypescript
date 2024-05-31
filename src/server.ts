import dotenv from 'dotenv';
import express from 'express';
const userRoute = require('./user/routes/user-route');
const authorRoute = require('./author/routes/author-route');
const categoryRoute = require('./category/routes/category-route');
const genderRoute = require('./gender/routes/gender-route');

const app = express();
dotenv.config();

const PORT = process.env.PORTA || 8000;

app.use(express.json());
app.use(userRoute);
app.use(authorRoute);
app.use(categoryRoute);
app.use(genderRoute);

app.listen(PORT, () => {
    console.log(`O servidor está ouvindo na porta ${PORT}`);
})