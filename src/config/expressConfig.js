const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const { auth } = require('../middlewares/authMiddleware');

function expressConfigurator(app) {
    app.use(express.static(path.resolve(__dirname, '../public')));
    app.use(express.urlencoded({ extended: false }));               // this global parser helps with received data from form - transform it in object, that can be access by req.body
    app.use(cookieParser());
    app.use(auth);
}

module.exports = expressConfigurator;