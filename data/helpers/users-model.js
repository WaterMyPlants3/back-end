const db = require('../dbConfig');

module.exports = {
    //user based helpers
    findById,
    findBy,
    add,
    update,
    remove,
    //plant based helpers
    getPlants,
    getPlantById,
    addPlant,
    updatePlant,
    removePlant
}

function findById(id){
    return db('users').where({id})
}

function findBy(filter){
    return db('users').where(filter);
}

function add(user) {
    return db('users').insert(user);
}

function update(givenId, user) {
    const parsedId = parseInt(givenId)
    return db('users')
        .where({id: parsedId})
        .update(user);
}

function remove(id) {
    return db('users')
    .where({id})
    .del()
}

//begin user plants functions

function getPlants(id) {
}