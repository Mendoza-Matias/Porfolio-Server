const express = require('express');
const dotenv = require('dotenv').config();
const mongoDatabase = require('./database/database');
const getRoutes = require('./routes/get');
const postRoutes = require('./routes/contactData');
const cors = require('cors')

const app = express()

//Middleware

app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(cors({
    origin:["http://localhost:8083","https://porfolio-j9go.onrender.com"]
}))
//Routes
app.use(getRoutes);
app.use(postRoutes);

//Database
mongoDatabase()

//Server
const PORT = process.env.PORT;
app.listen(PORT,async()=>{
    try {
        console.log(`Funcionando en el ${PORT}`)
    } catch (error) {
        console.log(`Algo esta mal ${error}`)
    }
})
