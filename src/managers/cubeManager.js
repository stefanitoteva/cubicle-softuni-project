const Cube = require('../models/Cube');

exports.getAll = async (search, from, to) => {
    let result = await Cube.find().lean();

    if (search) {
        result = await Cube.find({ name: { $regex: search, $options: "i" } }).lean();
    }


    if (from) {
        result = await Cube.find({ difficultyLevel: { $gte: from } }).lean();
    }

    if (to) {
        result = await Cube.find({ difficultyLevel: { $lte: to } }).lean();
    }

    if (from && to) {
        result = await Cube.find({ $and: [{ difficultyLevel: { $gte: from } }, { difficultyLevel: { $lte: to } }] }).lean();
    }
    return result
}

exports.getOne = (cubeId) => Cube.findById(cubeId).populate('accessories');

exports.create = (cubeData) => Cube.create(cubeData);

exports.update = (cubeId, cubeData) => Cube.findByIdAndUpdate(cubeId, cubeData);

exports.delete = (cubeId) => Cube.findByIdAndDelete(cubeId);

exports.attachAccessory = (cubeId, accessoryId) => {
    return Cube.findByIdAndUpdate(cubeId, { $push: { accessories: accessoryId } });
}
