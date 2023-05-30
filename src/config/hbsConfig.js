const express = require('express');
const handlebars = require('express-handlebars');

function hbsConfigurator(app) {
    app.engine('hbs', handlebars.engine({
        extname: 'hbs'
    }));
    app.set('view engine', 'hbs');
    app.set('views', 'src/views');                      // added, because views folder is in src dir, not root dir
};

module.exports = hbsConfigurator;