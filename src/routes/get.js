const express = require('express');
const getRoutes = express.Router()


getRoutes.get('/',(req,res) =>{
    res.send('Funcionado')
})

getRoutes.get('/create',async(req,res) =>{
    res.send('Contacto guardado')
})

module.exports = getRoutes;