const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');


// initilizitations
const app = express();


// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));


app.engine('.hbs', exphbs.engine ({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
}));    

app.set('view engine', '.hbs');

// Middlewares
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));


// Global Variables

// Routes
//app.get('/', (req,res) => {
    //res.send('Hola mundo desde la pagina');
   // res.render('index');
//console.log('Hola mundo desde la consola :D');
//})

app.use(require('./routes/index.routes'));
app.use(require('./routes/product.routes'));
app.use(require('./routes/category.routes'));
app.use(require('./routes/users.routes'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;