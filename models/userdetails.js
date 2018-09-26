const mongoose = require('mongoose');

// Genre Schema
const logindetailSchema = mongoose.Schema({
	fname:{
		type: String,
		required: true
	},
	lname:{
		type: String,
		required: true
	},
	emailid:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

//To make it accessible
const Logindetail = module.exports = mongoose.model('Logindetail', logindetailSchema);


// Get User Details
module.exports.getlogindetails = (callback, limit) => {
	Logindetail.find(callback).limit(limit);
}