const http = require("http");
const { Server } = require("socket.io");
const App = require("./app.js");
const PORT = process.env.PORT || 3000;
const server = http.createServer(new App());

const io = new Server(server);
io.on("connection", (socket) => {
	socket.on("newMessage", (message) => {
		io.emit("newMessage", message);
		console.log("nova mensagem", message.typingMessage);
	});
	socket.on("startTyping", (user) => {
		io.emit("startTyping", user);
		console.log("istyping");
	});
	socket.on("stopTyping", (user) => {
		io.emit("stopTyping", user);
	});

	socket.on("online", () => {
		log("new user");
	});
});
server.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
