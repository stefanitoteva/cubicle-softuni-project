const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.resolve(__dirname, 'public')));

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');                      // added, because views folder is in src dir, not root dir

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(PORT, () => console.log(`The server is running on port ${PORT}...`));