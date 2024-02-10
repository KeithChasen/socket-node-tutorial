const express = require("express");
const { createUserChat, findUserChats, findSingleChat } = require("../controllers/chat");

const router = express.Router();

router.post('/', createUserChat);

router.get('/:userId', findUserChats);

router.get('/:firstId/:secondId', findSingleChat);

module.exports = router;
