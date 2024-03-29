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

const findUserById = (id) => db.users.findFirst({
    where: { id }
});

const findAllUsers = () => db.users.findMany();

module.exports = { createUser, findUser, findUserById, findAllUsers };
