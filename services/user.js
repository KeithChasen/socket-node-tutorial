const { db } = require("../utils/db");

const createUser = (email, password) => db.users.create({
    data: {
        email,
        password
    }
});

const findUser = (email) => db.users.findFirst({
    where: { email }
});

module.exports = { createUser, findUser };
