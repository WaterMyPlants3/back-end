const db = require("../data/dbConfig");

module.exports = {
  create,
  find,
  findBy,
  findById,
  update,
  remove,
  findPlants,
  insertPlant,
  updatePlant,
  removePlant
};

function find() {
  return db("users");
}

function findBy(filter) {
  return db('users').where(filter);
}

function findById(id) {
  return db("users").where({ id });
}

function create(user) {
  return db("users").insert(user);
}

function update(id, user) {
  return db("users")
    .where({ id })
    .update(user);
}

function remove(id) {
  return db("users")
    .where({ id })
    .del();
}

function findPlants(userKey) {
  return db("users_plants as up")
    .where({ userKey })
    .join("plants as p", "p.id", "up.plantKey")
    .select([
      "up.id as users_plants",
      "p.id",
      "nickName",
      "p.species",
      "image",
      "h2oFrequency"
    ]);
}

function insertPlant(userId, plantId, plantData) {
  const parsedId = parseInt(userId)
  console.log('user id', parsedId, 'plant id', plantId, 'plantData', plantData)
  return db('users_plants').insert({
    userKey: parsedId,
    plantKey: plantId,
    h2oFrequency: plantData.h2oFrequency,
    nickname: plantData.nickname,
    image: plantData.image
    })
}

function updatePlant(id, plant) {
  return db("users_plants")
    .where({ id })
    .update({ ...plant });
}

function removePlant(id) {
  return db("users_plants")
    .where({ id })
    .del();
}
