const mongoose = require('mongoose')
const {Schema} = mongoose;

const contactSchema = new Schema({
    nombre:String,
    correo:String,
    telefono:Number,
    propuesta:String
})

module.exports = mongoose.model('contact', contactSchema)