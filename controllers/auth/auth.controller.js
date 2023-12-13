const authService = require('./auth.services')
const user = require('../../models/users')

/**
 * Post /login
 * Login
 */
const login = async (req, res, next) => {
	try {
		const result = await authService.login(req.body, user)
		if (result?.error && result?.message) {
			
			return res.status(400).json(result)
		}
		else{
			return res.status(200).json(result)
		}
	} catch (err) {
		console.log('loginError', err)
		return next(err)
	}
}

/**
 * Post /register
 * Register
 */
const register = async (req, res, next) => {
	try {
		const result = await authService.register(req.body, user)
		if (result?.error) {
			return res.status(400).json(result)
		}
		else {
			return res.status(200).json(result)
		}

	} catch (err) {
		console.log('registerError', err)
		return next(err)
	}
}

module.exports = {
	login,
	register,
}
