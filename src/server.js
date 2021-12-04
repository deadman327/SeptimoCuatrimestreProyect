const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');  



// initilizitations
const app = express();
require('./config/passport'); 


// Settings

// Procesa y envia a Index.js el puerto para poder conectarse al localhost o host
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
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'))

app.use(session({
    secret: 'secret',
    resave: true,
    //saveUnitializated: true
}));

app.use(passport.initialize()); 
app.use(passport.session());
app.use(flash());




// Global Variables
app.use((req, res, next) => {
    res.locals.user = req.user || null;
    next();
});


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
app.use(require('./routes/owner.routes'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;