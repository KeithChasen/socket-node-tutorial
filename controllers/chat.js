const { findChat, createChat } = require("../services/chat");

const createUserChat = async (req, res) => {
    const { firstId, secondId } = req.body;

    try {
        const chat = await findChat(firstId, secondId);

        if (chat) {
            return res.status(200).json(chat);
        }

        const response = await createChat(firstId, secondId);

        res.status(200).json(response);

    } catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
}

const findUserChats = async (req, res) => {
    const userId = req.params.userId;

    try {
        const response = await findChatByUserId(userId);

        res.status(200).json(response);
    } catch(e) {
        console.log(e)
        res.status(500).json(e);
    }
}

const findChat = async (req, res) => {
    const { firstId, secondId } = req.params;
    try {
        const chat = await findChat(firstId, secondId);

        return res.status(200).json(chat);
    } catch (e) {
        console.log(e)
        res.status(500).json(e);
    }
}

module.exports = { createUserChat, findUserChats, findChat }