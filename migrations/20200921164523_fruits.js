
exports.up = async function(knex) {
    await knex.schema.createTable("fruits", (table)=>{
        //create columns
        table.integer("id").notNull().unique().primary()
        //shortcut table.increments("id")
        table.text("name").notNull().unique()
        table.float("avgWeightOz").notNull()
        table.boolean("delicious").defaultTo(true)


    })

  
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("fruits")
  
};
