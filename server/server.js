var express = require('express');
var router = require('./routes/routes.js')
var path = require('path');
require('dotenv').config();
//var bodyParser = require('body-parser');
var app = express();

var mongoose = require('mongoose');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));


mongoose.connect(process.env.MONGODB_URI);

app.use('/', router);

module.exports=app;