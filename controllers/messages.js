const { createNewMessage, getChatMessages } = require("../services/messages");

const createMessage = async (req, res) => {
    const { chatId, senderId, text } = req.body;

    try {
        const response = createNewMessage(chatId, senderId, text);
        res.status(200).json(response);
    } catch(e) {
        console.log(e);
        res.status(500).json(e);
    }
}

const getMessages = async (req, res) => {
    const { chatId } = req.params;

    try {
        const messages = await getChatMessages(parseInt(chatId));
        res.status(200).json(messages);
    } catch(e) {
        console.log(e);
        res.status(500).json(e);
    }
}

module.exports = { createMessage, getMessages }