exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();
      tbl
        .text("username")
        .unique()
        .notNullable();
      tbl.text("phoneNumber").unique();
      tbl.text("password").notNullable();
    })
    .createTable("plants", tbl => {
      tbl.increments();
      tbl.text("nickName");
      tbl
        .text("species")
        .unique()
        .notNullable();
      tbl.integer("h2oFrequency").notNullable();
      tbl.specificType("image", "image");
    })
    .createTable("users_plants", tbl => {
      tbl
        .integer("userKey")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("plantKey")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("plants")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

        tbl.primary(['userKey', 'plantKey']);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("users_plants")
    .dropTableIfExists("plants")
    .dropTableIfExists("users");
};
