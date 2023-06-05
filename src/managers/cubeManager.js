const uniqid = require('uniqid');
const Cube = require('../models/Cube');
const cubes = [];

exports.getAll = (search, from, to ) => {
    let result = cubes.slice();

    if(search) {
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if(from) {
        result = result.filter(cube => cube.difficultyLevel >= Number(from));
    }

    if(to) {
        result = result.filter(cube => cube.difficultyLevel <= Number(to));
    }

    return result
}

exports.getOne = (cubeId) => cubes.find(x => x.id == cubeId);

exports.create = (cubeData) => {
    Cube.create(cubeData);
}