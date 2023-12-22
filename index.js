
const express = require("express");

const app = express();

const bodyParser = require('body-parser')
const cors = require('cors');

//assigning port to 8000
const PORT = 8000;

const authRoutes = require('./Routes/Auth')

require('dotenv').config();
require('./db')


//middleware
//bodyParser.json() for parsing JSON content types
app.use(bodyParser.json());

//cors for cross domain requests
app.use(cors())

//middleware specific for this route i.e. auth 
app.use('/auth', authRoutes);



app.get('/', (req, res)=>{
    res.json({
        message: 'The app is working'
    })
})

app.listen(PORT, ()=>{
    console.log('Server is running on port ', PORT )
})