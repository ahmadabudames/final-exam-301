'use strict';

const express = require('express') // require the express package
const app = express() // initialize your express app instance
const cors = require('cors');
require('dotenv').config();
const mongoose = require("mongoose");

const drinksData=require('./controllers/DrinksController')
const crud=require('./controllers/DrinksCrudController')

mongoose.connect('mongodb://localhost:27017/drinks', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});



app.use(cors()) // after you initialize your express app instance
app.use(express.json())
const PORT=process.env.PORT

// a server endpoint 
app.get('/drinks',drinksData.getData)

app.post('/drinks/favorite',crud.createNewItem)
app.get('/drinks/favorite',crud.getNewItem)
app.delete('/drinks/favorite/:strDrink',crud.deleteNewItem)
app.put('/drinks/favorite/:strDrink',crud.updateNewItem)

app.get('/', // our endpoint name
    function (req, res) { // callback function of what we should do with our request
        res.send('hello ') // our endpoint function response
    })

app.listen(PORT) // kick start the express server to work