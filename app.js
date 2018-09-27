//Declaring all the dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//To make use of Post, Put and related functions
//Middleware to initialize body parser
app.use(bodyParser.json());

//The path for that particular Model
Logindetail =require('./models/userdetails');

// Connection to Mongoose
mongoose.connect('mongodb://localhost/userdetails', { useNewUrlParser: true });
var db = mongoose.connection;

//To define a route to the API
app.get('/', (req, res) => {
	res.send('Please navigate to /api/logindetails to retrieve the information');
});

//To route to userdetails for retrieving data
app.get('/api/logindetails', (req, res) => {
	Logindetail.getlogindetails((err, logindetails) => {
		if(err){
			throw err;
		}
		res.json(logindetails);
	});
}); 

//To route to userdetails for retrieving data for a specific ID
app.get('/api/logindetails/:_id', (req, res) => {
	Logindetail.getlogindetailsbyId(req.params._id, (err, logindetails) => {
		if(err){
			throw err;
		}
		res.json(logindetails);
	});
});

//To route to userdetails for adding data
app.post('/api/logindetails', (req, res) => {
	var logindetails = req.body;
	Logindetail.addlogindetails(logindetails, (err, logindetails) => {
		if(err){
			throw err;
		}
		res.json(logindetails);
	});
});

//To route to userdetails for upadting a particular data
app.put('/api/logindetails/:_id', (req, res) => {
	var id = req.params._id;
	var logindetails = req.body;
	Logindetail.updatelogindetails(id, logindetails, {}, (err, logindetails) => {
		if(err){
			throw err;
		}
		res.json(logindetails);
	});
});

app.delete('/api/logindetails/:_id', (req, res) => {
	var id = req.params._id;
	Logindetail.removelogindetails(id, (err, logindetails) => {
		if(err){
			throw err;
		}
		res.json(logindetails);
	});
});



//The port where the API will be running
app.listen(5000);
console.log('Running on port 5000...');