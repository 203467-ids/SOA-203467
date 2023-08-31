import express from 'express';
import indexRoutes from './routes/index'
const app= express();


//middlewares
app.use(express.json());
app.use(indexRoutes);
app.use(express.urlencoded({extended:true}));

app.listen(4000);
console.log('server on port', 4000)