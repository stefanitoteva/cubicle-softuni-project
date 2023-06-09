const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');
const { SECRET } = require('../config/confing');



exports.register = (username, password, repeatPassword) => User.create({ username, password, repeatPassword });

exports.login = async (username, password) => {
    const user = await User.findOne({ username });

    if(!user) {
        throw new Error('Username or password is not valid!');
    }
    
    const isValid = await bcrypt.compare(password, user.password);

    if(!isValid) {
        throw new Error('Username or passowrd is not valid!');
    }

    const payload = {
        "_id": user._id,
        "username": user.username,
    }

    const token = await jwt.sign(payload, SECRET, {expiresIn: "2d"});

    return token
}