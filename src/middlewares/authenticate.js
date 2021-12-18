require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
	return jwt.verify(token, process.env.JWT_ACCESS_KEY);
};

module.exports = (req, res, next) => {
	// if we recieved the cearere token in the header
	const bearerToken = req?.headers?.authorization;

	// if not recieved or token is not bearer token then we will throw an error
	if (!bearerToken || !bearerToken.startsWith("Bearer "))
		return res.status(400).json({
			status: "failed",
			message: "Please provide valid token",
		});

	// else we will try to get the user from token
	const token = bearerToken.split(" ")[1];

	const user = verifyToken(token);

	// if no user found then we will throw an error
	if (!user)
		return res.status(400).json({
			status: "failed",
			message: "Please provide valid token",
		});

	// else we will attach the user to the req
	req.user = user;

	// return next
	return next();
};
