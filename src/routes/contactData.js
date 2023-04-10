const express = require('express');
const getController = require('../controllers/getController');
const postRoutes = express.Router()

postRoutes.post('/create', getController.create)

module.exports = postRoutes;