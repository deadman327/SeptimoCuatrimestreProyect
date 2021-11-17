const express = require('express');
const path = require('path');

// initilizitations
const app = express();


// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.urlencoded({extended: false}));


// Global Variables

// Routes
app.get('/', (req,res) => {
    res.send('Hola mundo desde la pagina');
    console.log('Hola mundo desde la consola :D');
})


// Static files
app.use(express.static(path.join(__dirname, 'views')));

module.exports = app;