// bring in the express app
const express = require('express');
const session = require('express-session');
// bring in the mongoose app
const mongoose = require('mongoose');
// define route path
const routes = require('./routes');
//define api
// const api = require("./routes")
// import express
const app = express();
// bring in the mongoDB initializer
const MongoStore = require('connect-mongo')(session);
const multer = require("multer");

const PORT = process.env.PORT || 3001;
require('dotenv').config();

// MongoDB Connection and Session Storage - CP
// ///////////////////////////////////////////////////////////////////////

// Connects to Local DB or Atlas
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Parcs', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});

//initialize mongostore + session storage
app.use(
	session({
		secret: 'The worst thing about prison was the Dementors',
		cookie: { maxAge: 200000000000 },
		resave: false,
		saveUninitialized: true,
		store: new MongoStore({ mongooseConnection: mongoose.connection }),
	})
);
// ///////////////////////////////////////////////////////////////////////

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

// Add routes, both API and view
app.use(routes);
// app.use(require("/api",api));

//connecting reference to upload folder for picture uploads
app.use('/uploads', express.static('uploads'));

//Using middleware Multer to upload photos to mongoDB
// ::::::::::::::Waiting Chads review:::::::::::::::::::::::
// app.use(multer({ dest: './uploads/',
//   rename: function (fieldname, filename) {
//     return filename;
//   },
// }));
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::
// app.post('/api/photo',function(req,res){
//   var newItem = new Item();
//   newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
//   newItem.img.contentType = 'image/png';
//   newItem.save();
// });
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Start the API server
app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
