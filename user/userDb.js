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

function insertPlant(userKey, plant) {
  return db("users_plants").insert({ userKey, ...plant });
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
