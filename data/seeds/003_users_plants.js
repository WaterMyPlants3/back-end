exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users_plants")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users_plants").insert([
        {
          userKey: 1,
          plantKey: 1
        },
        {
          userKey: 3,
          plantKey: 2
        },
        {
          userKey: 3,
          plantKey: 3
        },
        {
          userKey: 2,
          plantKey: 3
        }
      ]);
    });
};
