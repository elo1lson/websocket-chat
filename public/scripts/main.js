import * as socket from "./events.js";

const addClass = (...element) => {
	for (let i in element) {
		element[i].element.classList.add(element[i].className);
	}
};

const appendChildElement = (parent, child) => parent.appendChild(child);

document.addEventListener("DOMContentLoaded", () => {
	socket["online"]?.run();
});

document.addEventListener("keypress", () => {
	socket.emit("startTyping", { isTyping: true });
	socket["startTyping"];
});

// document.addEventListener("keyup", () => {
// 	setTimeout;
// 	socket.emit("stopTyping");
// 	socket["stopTyping"];
// });

document.addEventListener("submit", (e) => {
	e.preventDefault();
	const objectMessage = new FormData(e.target);
	const message = { content: objectMessage.get("message") };

	socket.emit("stopTyping", message);
	document.querySelector('input[type="text"]').value = "";
});
