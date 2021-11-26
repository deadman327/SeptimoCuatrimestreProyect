const express = require('express');
//const morgan = require('morgan');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')


//const User = require('./models/user')

dotenv.config()

const app = express()

mongoose.connect(
process.env.DATABASE,
{useNewURLParser: true, useUnifiedTopology: true})

.then(db => console.log('Database is Connect'))
.catch(err => console.log(err));

// Middlewares
//app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Require APIs

// const productRoutes = require('./routes/product');

const { compareSync } = require('bcryptjs');
//app.use('/api', productRoutes)

// GET - Recibir data del servidor
app.get('/', (req,res) => {
    res.json("Hola mundo")
})

// POST - Enviar data del frontend al backend
app.post('/', (req,res) => {
    let user = new User()
    user.name = req.body.name
    user.email = req.body.email
    user.password = req.body.password

    user.save(err => {
        if(err){
            res.json(err)
        } else {
            res.json("successfully saved")
        }
    })
})

app.listen(3000, (err) => {
    if(err){
        console.log(err)
    } else {
        console.log("Listening on the PORT", 3000)
    }
})