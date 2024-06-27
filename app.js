import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './src/router/books.routes.js';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/api', router)


app.listen(PORT, () => {
    console.log(`Servidor corriendo el en puerto: ${PORT}`);
});