const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('./public'));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extend: true }));

app.get('/', (req,res) => {
  res.render('index');
});
 
app.get('/form-idade', (req,res) => {
  res.render('form-idade');
});

app.get('/notas', (req,res) => {
  res.render('notas');
});

app.post('/', (req,res) => {
  const nome = req.body.nome;
  const idade = req.body.idade;
  let faixaEtaria = '';
  if (0<=idade<=15){
    return ('Criança');
}
else if (15<=idade<=30){
    return('Jovem');
}
else if(30<=idade<=60){
    return('Adulto');
}
else{ 
    return('Idoso');
}
  res.render('faixa-etaria', {nome: nome, idade: idade, faixaEtaria: faixaEtaria});
});

app.get('/notas', (req,res) => {
  res.render('notas');
});

app.post('/media', (req,res) => {
  const at_lab = req.body.at_lab;
  const prova = req.body.prova;
  const trabalho = req.body.trabalho;
  
  let media = (0.2*at_lab + 0.5* prova + 0.3*trabalho);

  if (media >= 9 && media < 10) {
    mediaFinal = 'A'
  } else if (media >= 8 && media < 9) {
    mediaFinal = 'B'
  } else if (media >= 8 && media < 7) {
    mediaFinal = 'C'
  } else if (media >= 7 && media < 6) {
    mediaFinal = 'D'
  } else if (media >= 6 && media < 5) {
    mediaFinal = 'E'
  } else{
    mediaFinal = 'F'
  }
  res.render('media', {at_lab: at_lab, prova: prova, trabalho: trabalho, media: media, mediaFinal: mediaFinal});
});

app.get('/form', function(req,res){

  res.render("form", {nomeCrud: '', sobrenomeCrud: '', idadeCrud: '', paisCrud: ''})
})

app.post('/form', function(req,res){
  const nomeCrud = req.body.nomeCrud
  const sobrenomeCrud = req.body.sobrenomeCrud
  const idadeCrud = req.body.idadeCrud
  const paisCrud = req.body.paisCrud
  res.render("form", {nomeCrud: nomeCrud, sobrenomeCrud: sobrenomeCrud, idadeCrud: idadeCrud, paisCrud: paisCrud})
})

app.post('/crud', (req, res) => {
  const nomeCrud = req.body.nomeCrud
  const sobrenomeCrud = req.body.sobrenomeCrud
  const idadeCrud = req.body.idadeCrud
  const paisCrud = req.body.paisCrud
  
  res.render('cadastro', {nomeCrud: nomeCrud, sobrenomeCrud: sobrenomeCrud, idadeCrud: idadeCrud, paisCrud: paisCrud})
  
})





app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});