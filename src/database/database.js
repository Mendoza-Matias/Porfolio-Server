const mongoose = require('mongoose');
const mongoClient = process.env.MONGO;


const conectar = async () => {
    try {
        mongoose.connect(mongoClient)

        console.log('Base de datos conectada')
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = conectar;