const express = require('express')
const router = express.Router()

const exemploModel = require('../models/exemploModel')

router.post('/', (req, res) => {
    exemploModel.findOneAndUpdate(
        {'idArduino':{$eq: req.body.idArduino}}) //incompleto

})

module.exports = router