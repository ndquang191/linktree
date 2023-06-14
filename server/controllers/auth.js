const User = require("../models/user");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
	const { handle, email, password, category } = req.body;

	// res.send(`I am ${email}`);

	try {
		const defaultLink = { url: "typefinance.com", title: "TypeFinace", icon: " " };
		const user = await User.create({ handle, email, password, role: category, defaultLink });

		const token = jwt.sign({ email }, prcoess.env.SECRET_JWT);
		return res.json({ message: "user created", status: "success", token: token, id: user._id });

		
	} catch (err) {
		if (err.code === "11000") {
			return res.json({ message: "Try different handle or email", status: "error" });
		}
		return res.json({ message: err.message, status: "error" });
	}
};

const loginUser = (req, res) => {
	res.send("Login");
};

module.exports = { registerUser, loginUser };
