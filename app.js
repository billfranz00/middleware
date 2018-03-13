const express = require("express");
const app = express();

app.use((req, res, next) => {
	console.log("Middleware just ran");
	return next();
});

app.get('/', (req, res, next) => {
	return res.send("Yo bro");
});

app.get('/dude', (req, res, next) => {
	console.log(res.statusCode);
	return res.send("Yo dude");
});

app.listen(3000, () => console.log("I think you know what to do already..."));