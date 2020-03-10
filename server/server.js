const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 5000;
const db = require("./routes/keys").mongoURI;

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
app.use(cors());

app.listen(port, () => {
	console.log("Server is running on " + port + "port");
});

app.use("/cities", require("./routes/cities"));

const mongoose = require("mongoose");

mongoose
	.connect(db, { useNewUrlParser: true, useCreateIndex: true })
	.then(() => console.log("Connection to Mongo DB established"))
	.catch(err => console.log(err));
