const express = require('express')
const router = express.Router()

const exemploModel = require('../models/exemploModel')

router.post('/', (req, res) => {
    console.log(req.body)
    exemploModel.find({'idArduino':{$eq: req.body.idArduino}})
    .exec()
    .then((result)=>{
        if(result == 0){
            newArduino = new exemploModel({
               idArduino: req.body.idArduino,
               cliente: req.body.cliente,
               temp: req.body.temp,
               hum: req.body.hum,
               fotoUrl: req.body.fotoUrl
            })
            newArduino.save()
            .then((error, result) => {
                if(error){
                    res.json({msg: 'Ocorreu um error'})
                    throw error
                }
                console.log(result)
                res.json({msg: 'Objeto criado'})
            })
        }
        else {
            res.json({msg:'Equipamento existente'})
            console.log(result)
        }
    })
})

module.exports = router


