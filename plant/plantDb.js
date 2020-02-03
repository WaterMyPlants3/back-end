const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  create,
  update,
  remove,
  findUsers,
  insertUser,
  removeUser
};

function find() {
  return db("plants");
}

function findById(id) {
  return db("plants").where({ id });
}

function create(plant) {
  return db("plants").insert(plant);
}

function update(id, plant) {
  return db("plants")
    .where({ id })
    .update(plant);
}

function remove(id) {
  return db("plants")
    .where({ id })
    .del();
}

function findUsers(plantKey) {
  return db("users_plants as up")
    .where({ plantKey })
    .join("users as u", "u.id", "up.userKey")
    .select(["up.id as users_plants", "u.id","u.username", "u.password", "u.phoneNumber"]);
}

function insertUser(plantKey, user) {
  return db("users_plants").insert({ plantKey, ...user });
}

function removeUser(id) {
  return db("users_plants")
    .where({ id })
    .del();
}
