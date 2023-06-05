const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true]
    },
    description: String,
    imageUrl: String,
});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;