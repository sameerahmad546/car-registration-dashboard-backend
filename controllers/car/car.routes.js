const express = require('express')
const carController = require('./car.controller')

const apikey = require('../../middleware/apiKey')
const authToken = require('../../middleware/authToken')
const userValidate = require('../../middleware/userValidate')

const router = express.Router()

//Routes for Cars CRUD
    router.post('/add-car',[apikey, authToken, userValidate], carController.addCar)
    router.get('/read-cars', [apikey, authToken, userValidate], carController.readCars)
    router.delete('/remove-car/:id',[apikey, authToken, userValidate], carController.deleteCar)

module.exports = router