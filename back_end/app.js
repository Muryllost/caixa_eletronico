import express from 'express'
import cors from 'cors'
import sql from './database.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/login/:usuario/:senha',(req, res)=>{
    const { usuario, senha} = req.params
    const consulta = sql`select * from usuario where
    email = ${usuario} and senha = ${senha}`

    return res.status(200).json(consulta);
})

app.listen(3000,()=>{
    console.log('Rodando!')
})

