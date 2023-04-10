const getController = {};
const contactSchema = require('../models/contact');


getController.create = async(req,res) =>{
    try {
        
        const nuevoContacto = contactSchema(req.body)
        
        const guardar = await nuevoContacto.save()

        console.log(guardar)
        
        res.status(202).json(guardar)

    } catch (error) {
        
        res.status(404).json(error)
    }
}

module.exports =  getController;