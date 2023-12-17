const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const generator = require('generate-password');
const emailFunction = require('../../helpers/sendEmail')


const config = require('../../config')

const login = async (reqBody, userModel) => {
	try {
		const { email, password } = reqBody
		
		const user = await userModel.findOne({ email })
		
		if (user) {
			if (await bcrypt.compare(password, user.password)) { //If User found Bcrypt its encrypted password
				const token = jwt.sign(email, config.tokenSecret) //Generate jwt token
				return { user: user, token: token, message: 'Login Successfully' } // login successfully if success
			} else {
				return { error: true, message: 'Invalid Password' } //otherwise invalid pass
			}
		} else {
			return { error: true, message: 'No user found' }  // if user not found
		}
	} catch (err) {
		console.log('loginServiceError', err)
		return {
			error: true,
			message: 'Server not responding, please try again later',
		}
	}
}

const register = async (reqBody, userModel) => {
	try {
		const { name, email } = reqBody
		const user = await userModel.findOne({ email })

		if (!user) {
			const password = generator.generate({ length: 10, numbers: true }); //Generating random password
			emailFunction.sendEmail(email, 'Login Password', `Your Login Password is ${password}`) //sending it via email
			const encryptedPassword = await bcrypt.hash(password, 10) //Encrypt password to save it to DB
			const user = await userModel.create({
				name,
				email,
				password: encryptedPassword,
			})

			return { user: user, message: 'User Created Successfully' } //Created New User
		} else {
			return { error: true, message: 'User already exists' } //Return if user already in Record
		}
	} catch (err) {
		console.log('registerServiceError', err)
		return {
			error: true,
			message: 'Server not responding, please try again later',
		}
	}
}

module.exports = {
	login,
	register,
}
