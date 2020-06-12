const express = require('express');
const engines = require('consolidate');
const app = express();

//npm i handlebars consolidate --save
app.engine('hbs',engines.handlebars);
app.set('views','./views');
app.set('view engine','hbs');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req, res) {
    res.render('index',{name:"Mr.Bean", email:"hungtvgh18506@fpt.edu.vn"});

});

app.get('/login', (req,res)=>{
    res.render('login');
})

app.post('/doLogin', (req,res)=>{
    let inputName = req.body.txtName;
    let inputEmail = req.body.txtEmail;
    res.render('index',{name:inputName, email:inputEmail});
})

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});