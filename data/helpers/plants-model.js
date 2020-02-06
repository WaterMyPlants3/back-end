const db = require('../dbConfig')
module.exports = {
    findBySpecies,
    findById,
    add,
    update,
    remove
}


function findById(id){
    return db('plants').where({id})
}

function findBySpecies(name){
    return db('plants').where({species: name});
}

function add(plant) {
    console.log('inside plants add fn', plant)
    return db('plants').insert({species: plant});
}

function update(id, plant) {
    //const parsedId = parseInt(givenId)
    return db('plants')
        .where({id})
        .update(plant);
}

function remove(id) {
    return db('plants')
    .where({id})
    .del()
}