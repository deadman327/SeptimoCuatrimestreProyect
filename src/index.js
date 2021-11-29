require('dotenv').config();

// Esto es lo que establece la conexión con la BD
const app = require('./server');
require('./database');

// Esta parte es la que permite ejecutar el servidor en el puerto destinado: 4000
app.listen(app.get('port'),() =>{
    console.log('Server on port :D', app.get('port'))
})

