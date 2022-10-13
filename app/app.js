const express = require('express');
const app = express();
const ejs = require('ejs');
const morgan = require('morgan');
const router = require("../routes/routes");


// use middleware to set payload and url encoding
app.use(express.json()); 
app.use(express.urlencoded({ extended: true}));

// use middleware for logging
app.use(morgan('dev'));

// ejs middleware
app.set('view engine','ejs');
app.engine('ejs', ejs.__express);

// declare static file locations
app.use(express.static('views'));
app.use(express.static('public'));

// use middleware to set our router
app.use('/', router);


module.exports = app;