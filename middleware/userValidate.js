const users = require('../models/users')

const userValidate = async function (req, res, next) {
	const email = req.user

	let user = await users.findOne({ email: email })

	if (!user) {
		return res.status(401).send({
			status: 401,
			error: true,
			message: 'User Not Found',
		})
	} else {
		next()
	}
}

module.exports = userValidate
