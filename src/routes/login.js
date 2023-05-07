const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
	const { email, password, username } = req.body;
});
