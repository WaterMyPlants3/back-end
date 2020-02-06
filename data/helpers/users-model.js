const db = require('../dbConfig');

module.exports = {
    //user based helpers
    findById,
    findBy,
    add,
    update,
    remove,

    //users plants based helpers
    getPlants,
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

function update(id, user) {
    //const parsedId = parseInt(givenId)
    return db('users')
        .where({id})
        .update(user);
}

function remove(id) {
    return db('users')
    .where({id})
    .del()
}

//begin user plants functions

function getPlants(id) {
    return db.select('users_plants.id', 'species', 'nickName', 'h2oFrequency', 'image', 'username', 'userKey', 'plantKey').from('users_plants')
    .join('plants', 'users_plants.plantKey', 'plants.id')
    .join('users', 'users_plants.userKey', 'users.id')
    .where({userKey: id})
}

function addPlant(id, plant, plantData) {
    const parsedId = parseInt(id)
    console.log('id', parsedId, 'plant', plant, 'plantData',plantData)
    return db('users_plants').insert({
        userKey: parsedId,
        plantKey: plant,
        h2oFrequency: plantData.h2oFrequency,
        nickname: plantData.nickname,
        image: plantData.image
    })
}

function updatePlant(plant){
    return db('users_plants').where({id: plant.id})
    .update(plant)
}

function removePlant(id){
    return db('users_plants').where({id}).del()
}