const { db } = require("../utils/db");

const createNewMessage = (chatId, senderId, text) => 
    db.message.create({
        chatId, 
        senderId, 
        text
    })

const getChatMessages = chatId => 
    db.message.findMany({
        where: {
            chatId
        }
    })

module.exports = { createNewMessage, getChatMessages }
