const mongoose = require('mongoose');

// Login Detail Schema
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

// Get Book with an ID
module.exports.getlogindetailsbyId = (id, callback) => {
	Logindetail.findById(id, callback);
}

// Add Book
module.exports.addlogindetails = (logindetails, callback) => {
	Logindetail.create(logindetails, callback);
}

// Update Book
module.exports.updatelogindetails = (id, logindetails, options, callback) => {
	var query = {_id: id};
	var update = {
		fname: logindetails.fname,
		lname: logindetails.lname,
		emailid: logindetails.emailid,
		password: logindetails.password
	}
	Logindetail.findOneAndUpdate(query, update, options, callback);
}

// Delete Book
module.exports.removelogindetails = (id, callback) => {
	var query = {_id: id};
	Logindetail.remove(query, callback);
}