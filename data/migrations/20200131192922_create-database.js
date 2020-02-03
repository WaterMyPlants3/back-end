exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();
      tbl
        .string("username")
        .unique()
        .notNullable();
      tbl.string("phoneNumber").unique();
      tbl.string("password").notNullable();
    })
    .createTable("plants", tbl => {
      tbl.increments();
      tbl
        .string("species")
        .unique()
        .notNullable();
    })
    .createTable("users_plants", tbl => {
      tbl.increments();
      tbl
        .integer("userKey")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      tbl
        .integer("plantKey")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("plants")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      tbl.string("nickName");
      tbl.int("h2oFrequency").notNullable();
      tbl.specificType("image", "image");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("users_plants")
    .dropTableIfExists("plants")
    .dropTableIfExists("users");
};
