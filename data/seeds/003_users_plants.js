exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users_plants")
    .truncate()
    .then(function() {
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
          userKey: 3,
          plantKey: 2,
          nickName: "Sour Wintercress",
          h2oFrequency: 2,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSx_b7zc9VQwatW1wUDtYYd8Mj4k4G71L5ITlIuhjqj_YtPaQPX"
        },
        {
          userKey: 5,
          plantKey: 5,
          nickName: "Sunny Brier",
          h2oFrequency: 1,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIJcTbTI3c_R0dpvMDZD7kl-uzL4u_4vLftu1kUB-548L1-3UM"
        },
        {
          userKey: 6,
          plantKey: 7,
          nickName: "Grasbip",
          h2oFrequency: 0.5,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrHXrrWsi71mQ3rudonoxsLAXo3h0hm3insfK17oc-lNznohjE"
        }
      ]);
    });
};
