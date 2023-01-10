const express = require('express');
const porta = process.env.PORT || 3000;
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.static('public'));

app.get('/home', (req, res)=>{
    res.send('<h1>Aqui é o home</h1>');
})

app.listen(porta, ()=>{console.log('Servidor rodando')});