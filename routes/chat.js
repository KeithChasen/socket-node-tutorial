const express = require("express");
const { createUserChat, findUserChats, findChat } = require("../controllers/chat");

const router = express.Router();

router.post('/', createUserChat);

router.get('/:userId', findUserChats);

router.get('/:firstId/:secondId', findChat);

module.exports = router;
