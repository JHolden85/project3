const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const MongoStore = require('connect-mongo')(session);

const PORT = process.env.PORT || 3001;
require("dotenv").config();


// ============================================================
// Ask the team if this is needed prior to deleting

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Parcs', {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// 	useCreateIndex: true,
// 	useFindAndModify: false,
// });

// //initialize mongostore + session
// app.use(
// 	session({
// 		secret: 'The worst thing about prison was the Dementors',
// 		cookie: { maxAge: 200000000 },
// 		resave: false,
// 		saveUninitialized: true,
// 		store: new MongoStore({ mongooseConnection: mongoose.connection }),
// 	})
// );
// ================================================================


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}
// Add routes, both API and view

app.use(routes);

// Start the API server
app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
