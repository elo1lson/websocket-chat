const express = require("express");
const path = require("path");
const http = require("http");

// app.get("/login", (req, res) => {
// 	res.render("login");
// });
// app.get("/", (req, res) => {
// 	res.render("index");
// });
// app.get("/create", (req, res) => {
// 	res.render("createAccount");
// });

// app.post("/", (req, res) => {
// 	console.log("nova mensagem", req.body);
// });
// server.listen(PORT, () => {
// 	console.log(`Server is running on http://localhost:${PORT}`);
// });

module.exports = class App {
	constructor() {
		this.express = express;
		this.path = require("path");
		this.app = this.express();
	}
	middlewares() {
		this.app.use(this.express.urlencoded({ extended: true }));
		this.app.use(
			this.express.static(this.path.resolve(__dirname, "..", "public")),
		);
		this.app.set("views", path.resolve(__dirname, "..", "public/views"));
		this.app.engine("html", require("ejs").renderFile);
		this.app.set("view engine", "html");
	}
	routes() {}
	start() {
		this.middlewares();
		this.routes();
	}
};
