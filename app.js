//Declaring all the dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//The path for that particular Model
Logindetail =require('./models/userdetails');

// Connection to Mongoose
mongoose.connect('mongodb://localhost/userdetails', { useNewUrlParser: true });
var db = mongoose.connection;

//To define a route to the API
app.get('/', (req, res) => {
	res.send('Please navigate to /api/logindetails to retrieve the information');
});

//To route to userdetails
app.get('/api/logindetails', (req, res) => {
	Logindetail.getlogindetails((err, logindetails) => {
		if(err){
			throw err;
		}
		res.json(logindetails);
	});
}); 

//The port where the API will be running
app.listen(5000);
console.log('Running on port 5000...');