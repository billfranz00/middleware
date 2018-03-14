const express = require("express");
const app = express();

// Templating Language
app.set("view engine", "pug");

app.get('/', (req, res, next) => {
	// return res.send("Yo bro");
	let term = "bro";
	return res.render("send", {term});
});

app.get('/dude', (req, res, next) => {
	// console.log(res.statusCode);
	// return res.send("Yo dude");
	let term = "dude";
	return res.render("send", {term});
});

app.use((req, res, next) => { // Runs after every request
	console.log("Middleware just ran");
	return next();
});

// Error Middleware - Needs to be defined last

// Error message if type 404 (the page requested cannot be found), catch and forward to error handler
app.use((req, res, next) => {
	const err = new Error("Page Not Found");
	err.status = 404;
	return next(err);
});

// Error handler
app.use((err, req, res, next) => {
	res.status(err.status || 500);
	return res.render("error", {
		message: err.message,
		error: app.get("env") === "development" ? err : {}
	});
	// return res.send(err.message);
});

app.listen(3000, () => console.log("I think you know what to do already..."));