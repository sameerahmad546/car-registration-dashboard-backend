const carServices = require('./car.services')

const cars = require('../../models/cars')
const users = require('../../models/users')

/** 
 * Post /add-car
 * Logged in user Add Car
*/
const addCar = async (req,res,next) => {
    try{
        const response = await carServices.addCar(req, users, cars)
        if(response?.error){
           return res.status(400).json(response)
        }
        return res.status(200).json(response)
    }
    catch(err){
        console.log('addCar Error: ', err)
        return next(err)
    }
}

/** 
 * Get /read-car
 * Logged in user Read its Registered Cars
*/
const readCars = async(req, res, next) => {
    try{
        const response = await carServices.readCars(req, users, cars)
        if(response?.error){
           return res.status(400).json(response)
        }
        return res.status(200).json(response)
    }
    catch(err){
        console.log('readCar Error: ', err)
        return next(err)
    }
}
/** 
 * Delete /remove-car
 * Logged in user delete registered Car
*/
const deleteCar = async (req,res, next) => {
    try{
        const response = await carServices.deleteCar(req, cars)
        if(response?.error){
           return res.status(400).json(response)
        }
        return res.status(200).json(response)
    }
    catch(err){
        console.log('deleteCar Error: ', err)
        return next(err)
    }
}
module.exports = {
    addCar,
    readCars,
    deleteCar
}