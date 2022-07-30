/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {

await knex.schema
.createTable('recipes',tbl =>{
    tbl.increments('recipe_id')
    tbl.string("recipe_name",200).notNullable().unique()

})
.createTable('ingredients', table =>{
    table.increments('ingredients_id')
    table.string("ingredients_name",200).notNullable().unique()
    table.string("ingredient_unit",50)
})
.createTable('steps', table =>{
    table.increments()
})
.createTable('step_ingredients', table =>{
    table.increments()
})
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async  function(knex) {
await knex.schema
.dropTableIfExists("step_ingredients")
.dropTableIfExists("steps")
.dropTableIfExists('ingredients')
.dropTableIfExists('recipes')
  
};
