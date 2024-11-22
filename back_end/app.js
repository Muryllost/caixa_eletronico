
import express from 'express'
import cors from 'cors'
import sql from './database.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/login/:usuario/:senha', async (req, res)=>{
    const { usuario, senha } = req.params

    const consulta = await sql`select * from usuario where
    email = ${usuario} and senha = ${senha}`

    if(consulta != null && consulta != '')
        return res.status(200).json(consulta);
    else
        return res.status(401).json('Usuario ou senha incorretos')
});

app.post('/usuario/novo', async(req, res)=>{
    
});


app.listen(3000,()=>{
    console.log('Running!!')
});