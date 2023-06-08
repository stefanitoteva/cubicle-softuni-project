const User = require("../models/User");
const bcrypt = require('bcrypt');

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

    return user
}