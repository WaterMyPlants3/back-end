exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users_plants").then(function() {
    // Inserts seed entries
    return knex("users_plants").insert([
      {
        userKey: 1,
        plantKey: 1,
        nickName: "Creeping Garget",
        h2oFrequency: 4,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqNm4iPPh6dmZZODTVks9ZsR6MxIe2-uHxnP7s95y76EzwmJ4o"
      },
      {
        userKey: 2,
        plantKey: 2,
        nickName: "Sour Wintercress",
        h2oFrequency: 2,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSx_b7zc9VQwatW1wUDtYYd8Mj4k4G71L5ITlIuhjqj_YtPaQPX"
      }
    ]);
  });
};
