const bcrypt = require('bcrypt');
const { findUser, createUser } = require('../services/user');
const { createToken } = require('../utils/auth');

const registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        let user = await findUser(email); // find in sqlite

        if (user) return res.status(400).json({ error: 'User already exists' }) 

        const salt = await bcrypt.genSalt(10);
        const pass = await bcrypt.hash(password, salt);

        user = await createUser(email, pass); // sqlite -> new User

        const token = createToken(user.id);

        res.status(200).json({ id: user.id, email, token });
    } catch (e) {

    }
}

const loginUser = (req, res) => {
    res.send('login')
}

module.exports = { registerUser, loginUser }
