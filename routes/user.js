const express = require("express");
const { registerUser, loginUser, findUserRoute, getAllUsers } = require("../controllers/user");

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/:userId', findUserRoute);

router.get('/', getAllUsers);

module.exports = router;
