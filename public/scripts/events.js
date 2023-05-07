const socket = io();

const addClass = (...element) => {
	for (let i in element) {
		element[i].element.classList.add(element[i].className);
	}
};
export const emit = (event, ...args) => {
	socket.emit(event, ...args);
};
export const online = socket.on("online", (user) => {
	const toast = document.createElement("span");
	toast.classList.add("newUser");
});

let typingMessage = null;

export const typing = socket.on("startTyping", (user) => {
	const ul = document.querySelector("ul");

	if (!typingMessage) {
		typingMessage = document.createElement("li");
		const messageContent = document.createElement("p");
		const userPhoto = document.createElement("img");

		addClass({ element: typingMessage, className: "typing" });

		userPhoto.src =
			"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
		messageContent.innerText = "digitando...";
		typingMessage.appendChild(userPhoto);
		typingMessage.appendChild(messageContent);

		ul.appendChild(typingMessage);
	}
});

export const stopTyping = socket.on("stopTyping", (message) => {
	if (typingMessage) {
		socket.emit("newMessage", { typingMessage });
	}
});

export const newMessage = socket.on("newMessage", (message) => {
	// const ul = document.querySelector("ul");

	// const message = document.createElement("li");
	// const messageContent = document.createElement("p");
	// const userPhoto = document.createElement("img");

	// addClass({ element: message, className: "oi" });

	// userPhoto.src = "https://via.placeholder.com/50";
	// messageContent.innerText = user;
	// message.appendChild(userPhoto);
	// message.appendChild(messageContent);

	// ul.appendChild(message);
	message.typingDiv.innerText = message.content;
});
