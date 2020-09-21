
exports.up = async function(knex) {
    await knex.schema.alterTable("fruits", (table)=>{
        //create columns
        table.text("color")
    })

  
};

exports.down = async function(knex) {
    await knex.schema.alterTable("fruits", (table)=>{
        //create columns
        table.dropColumn("color")
    })
};
