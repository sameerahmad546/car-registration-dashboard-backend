const addCar = async (req, userModel, carModel) => {
    try {

        const { category, make, model, color, registration_number } = req.body
        const user = await userModel.findOne({ email: req.user }) //Read User using email that was got Valid through JWT token in userValid Middleware
        
        const car = await carModel.create({ category: category, make: make, model: model, color: color, registration_number: registration_number, createdBy: user._id }) //Register Car of Logged in User
        if (car) {
            return { error: false, car: car, message: 'Car Created by user' }
        }
    }
    catch (err) {
        console.log('addCar Service Error: ', err)
        return { error: true, message: 'Server not responding, Please try again later' }
    }
}

const readCars = async (req, userModel, carModel) => {
    try {
        const user = await userModel.findOne({ email: req.user })//Read User using email that was got Valid through JWT token in userValid Middleware

        if (user) {
            const cars = await carModel.find({ createdBy: user._id }) // Read Cars of logged in User
            if (cars.length > 0) {
                return { error: false, cars: cars, message: 'All cars by User' }
            } else {
                return { error: true, message: "No Car of this User" }
            }
        }
    }
    catch (err) {
        console.log('readCar Service Error: ', err)
        return { error: true, message: 'Server not responding, Please try again later' }
    }
}

const deleteCar = async (req, carModel) => {
    try {
        const deletedCar = await carModel.findByIdAndDelete(req.params.id)
        if (deletedCar) {
            return { error: false, deletedCar: deletedCar, message: "Car Removed Succesfully" }
        }
        else {
            return { error: true, message: "Car not found" }
        }
    }
    catch (err) {
        console.log('deleteCar Service Error: ', err)
        return { error: true, message: 'Server not responding, Please try again later' }
    }
}

module.exports = {
    addCar,
    readCars,
    deleteCar
}