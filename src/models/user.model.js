const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		first_name: { type: String, required: true },
		last_name: { type: String, required: true },
		contact: { type: String, required: true },
		email: { type: String, required: true },
		password: { type: String, required: true },
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

userSchema.pre("save", function (next) {

	if (!this.isModified("password")) return next();

	bcrypt.hash(this.password, 10, (err, hash) => {
		this.password = hash;
		return next();
	});
});

userSchema.methods.checkPassword = function (password) {
	return new Promise((resolve, reject) => {
		bcrypt.compare(password, this.password, function (err, same) {
			if (err) return reject(err);

			return resolve(same);
		});
	});
};

const User = mongoose.model("user", userSchema);

module.exports = User;
