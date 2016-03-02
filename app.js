var express = require('express');
var app = express();
var config = require('./config.js');
var sass = require('node-sass-middleware');
var compileSass = require('express-compile-sass');
var root = process.cwd();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(sass({
src: './',
dest: './',
debug: true,
outputStyle: 'compressed'
}));

app.use(express.static(root));

app.use('/', require('./homeRoute.js'));

app.listen(config.port);
