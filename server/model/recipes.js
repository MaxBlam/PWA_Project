const fs = require('fs');
const path = require('path');

const f = path.resolve(__dirname, 'recipes.json');

const rawdata = fs.readFileSync(f);
let recipes = JSON.parse(rawdata);

const getRecipesModel = () => recipes;

function pstRecipeModel(e) {
  e.id = Math.max(...recipes.map(el => el.id));
  recipes.push(e);
}

module.exports = { pstRecipeModel, getRecipesModel };
