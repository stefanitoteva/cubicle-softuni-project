const express = require('express');
const PORT = 3000;

const expressConfigurator = require('./config/expressConfig');
const hbsConfigurator = require('./config/hbsConfig');
const routes = require('./router');


const app = express();

expressConfigurator(app);
hbsConfigurator(app);
app.use(routes);

app.listen(PORT, () => console.log(`The server is running on port ${PORT}...`));