const express = require('express');
const PORT = 3000;

const expressConfigurator = require('./config/expressConfig');
const hbsConfigurator = require('./config/hbsConfig');
const mongooseConnect = require('./config/mongooseConfig');
const routes = require('./router');


const app = express();

mongooseConnect()
    .then(() => console.log('DB is connected successfully!'))
    .catch(err => console.log(`DB error: ${err}`));
expressConfigurator(app);
hbsConfigurator(app);

app.use(routes);
app.listen(PORT, () => console.log(`The server is running on port ${PORT}...`));