const { db } = require("../utils/db");

const findChat = (firstId, secondId) => db.$queryRaw`
    SELECT * 
        FROM Chat
        WHERE 
            (firstMember = ${firstId} AND secondMember = ${secondId})
            OR (firstMember = ${secondId} AND secondMember = ${firstId})
`;

const createChat = (firstId, secondId) => db.chat.create({
    data: {
        firstMember: firstId,
        secondMember: secondId
    } 
});

const findChatByUserId = id => db.$queryRaw`
SELECT * 
    FROM Chat
    WHERE 
        firstMember = ${id}
        OR secondMember = ${id}
`;

module.exports = { findChat, createChat, findChatByUserId }
