exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users_plants")
    .truncate()
    .then(() => knex("plants").truncate())
    .then(() => knex("users").truncate())
    .then(() =>
      knex("users").insert([
        {
          username: "test1",
          phoneNumber: "471-714-5247",
          password: "password1"
        },
        {
          username: "test2",
          phoneNumber: "482-970-5826",
          password: "password1"
        },
        {
          username: "test3",
          phoneNumber: "473-714-5247",
          password: "password1"
        }
      ])
    );
};
