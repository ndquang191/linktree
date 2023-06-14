const express = require("express");

const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { registerUser, loginUser } = require("./controllers/auth");

require("dotenv").config();

mongoose.set("strictQuery", false);

app.use(cors());
app.use(express.json());

mongoose
	.connect("mongodb://127.0.0.1:27017/linkTree")
	.then(() => {
		console.log("Connected");
	})
	.catch((err) => console.log({ err }));

app.get("/", (req, res) => {
	res.send(`Server is running on ${port}`);
});

app.post("/api/register", registerUser);
app.post("/api/login", loginUser);

const port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log(`Server is running on ${port}`);
});
