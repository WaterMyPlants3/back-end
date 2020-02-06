
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('plants')
    .then(function () {
      // Inserts seed entries
      return knex('plants').insert([
        { species: "Phytolacca americana" },
        { species: "Galanthus" },
        { species: "Betula nigra" },
        { species: "Asclepias syriaca" },
        { species: "Alnus glutinosa" },
        { species: "Cirsium arvense" },
        { species: "Pueraria lobata" },
        { species: "Solanum dulcamara" },
        { species: "Acer negundo" },
        { species: "Allium caeruleum" }
      ]);
    });
};
