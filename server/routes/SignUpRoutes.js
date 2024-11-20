const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/SignupController");

// router.post("/signup", registerUser);

router.post("/signup",registerUser ,(req, res) => {
    console.log("Incoming Data:", req.body); // Log incoming form data
    res.status(201).json({ message: "Signup data received successfully" });
});

module.exports = router;