const jwt = require("jsonwebtoken");

const createToken = id => {
    const jwtKey = 'superSecret123';

    return jwt.sign({ id }, jwtKey, { expiresIn: '3d' });
}

module.exports = { createToken }