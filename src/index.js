const express = require('express');
const PORT = 3000;

const expressConfigurator = require('./config/expressConfig');
const hbsConfigurator = require('./config/hbsConfig');

const app = express();

expressConfigurator(app);
hbsConfigurator(app);


app.get('/', (req, res) => {
    res.render('index');
})

app.listen(PORT, () => console.log(`The server is running on port ${PORT}...`));