const express = require('express');
const app = express();
const mysql = require('mysql2');
const bodyParser = require ('body-parser')
const db = require('./db')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router)

app.listen(3000,function(erro){
    if (erro){
        console.log ('Ocorreu um erro')
    }else {
        console.log('Servidor iniciado com sucesso');
    }
})