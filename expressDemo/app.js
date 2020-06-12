const express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));
// define routes here..
app.get('/', function (req, res) {
    res.send('<html><body><h1>Hello World</h1></body></html>');
});
app.get('/testHtml', function (req, res) {
    res.sendFile(__dirname + '/test.html');
});
app.get('/login', function (req, res) {
    res.sendFile(__dirname + '/login.html');
});

app.post('/doLogin', (req, res) => {
    let name = req.body.txtName;
    let password = req.body.txtPassword;
    if (password == '123@') {
        res.end('Login Ok');
    } else {
        res.end('Login failed!');
    }
})

app.post('/createProrduct', (req, res) => {
    let ID = req.body.txtId;
    let name = req.body.txtName;

    res.end("you're create product ID: " + ID + " and " + "Name: " + name);
})

var server = app.listen(2000, function () {
    console.log('Node server is running..');
})