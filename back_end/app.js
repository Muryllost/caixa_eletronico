
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
   
    try
    {
        const  {email, senha, nome_usuario} = req.body;
        if(senha.length != 8)
        {
           return res.status(400).json('senha deve ter 8 caracteres!')
        }
        const insert = await sql`insert into usuario (email, senha, nome_usuario, nivel, usuario_status) 
        values(${email},${senha},${nome_usuario},1,1)`
        console.log(insert)
        return res.status(200).json('ok')
    }
    catch(error)
    {
        console.log(error)
        return res.status(500).json('erro ao cadastrar usuario!')
    }

});


app.listen(3000,()=>{
    console.log('Running!!')
});