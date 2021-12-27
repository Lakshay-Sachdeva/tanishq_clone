const app = require("./index.js");

const connect = require("./configs/db");

app.listen(80, async () => {
	await connect();
	console.log("Listening on port number 80");
});
