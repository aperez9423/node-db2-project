
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex("cars").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {vin: "789743", make: "Tesla", model : "Model 3", mileage: 26000.3, transmission: "automatic", title: "clean"},
        {vin: "453B32", make: "Toyota", model : "Corolla", mileage: 100000.7, transmission: "automatic", title: "salvage"},
        {vin: "999903", make: "Jeep", model : "Cherokee", mileage: 54000.8, transmission: "manual", title: "clean"},
      ]);
    });
};
