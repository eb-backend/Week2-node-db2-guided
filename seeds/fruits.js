
exports.seed = async function(knex) {
  await knex("fruits").truncate() //clear out all the rows in the table and reset it
  
  //populate the table with some static test data
  await knex("fruits").insert([
    {name:"duran", avgWeightOz: 16.7, delicious: true, color: "red"},
    {name:"banana", avgWeightOz: 6.7, delicious: false, color: "yellow"},
    {name:"strawberry", avgWeightOz: 1.7, delicious: true, color: "pink"},
    {name:"orange", avgWeightOz: 16.7, delicious: true, color: "orange"}
  ])

};
