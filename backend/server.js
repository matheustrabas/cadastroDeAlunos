const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
//criar conexão com o banco
const conexao = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'escola'
    }
);
//criar nota para salvar aluno
app.post("/salvar",(req, res)=> {
    let nome = req.body.Nome;
    let idade = req.body.Idade;
    let sql = "INSERT INTO alunos (nome, idade) VALUES (?, ?)";

    conexao.query(sql, [nome, idade], (erro,resultado) => {
        if (erro){
            console.log(erro);

            } else {
                res.send('aluno salvo com sucesso')

            }
            
        });
    });
