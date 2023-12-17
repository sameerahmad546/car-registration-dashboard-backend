const mongoose = require('mongoose')

const carSchema = new mongoose.Schema(
	{
		category: {
			type: String,
			require: true,
		},
				
		registration_number: {
			type: String,
			required: true,
			unique: true,
		},
		color: {
			type: String,
			required: true,
		},
        model: {
			type: String,
			required: true,
		},
        make: {
			type: String,
			required: true,
		},
		createdBy:{
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'users'
		}
			
	},
)

module.exports = mongoose.model('cars', carSchema)