const express = require('express');
const PORT = 3000;

const expressConfigurator = require('./config/expressConfig');
const hbsConfigurator = require('./config/hbsConfig');
const homeController = require('./controllers/homeController');

const app = express();

expressConfigurator(app);
hbsConfigurator(app);


app.use(homeController);

app.listen(PORT, () => console.log(`The server is running on port ${PORT}...`));