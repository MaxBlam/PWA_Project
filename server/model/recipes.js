const fs = require('fs');
const path = require('path');

const f = path.resolve(__dirname, 'recipes.json');

const data = fs.readFileSync(f);
let { recipes } = JSON.parse(data);

const getRecipes = () => recipes;

function pstRecipe(e) {
  e.id = Math.max(...recipes.map(el => el.id));
  recipes.push(e);
}

module.exports = { pstRecipe, getRecipes };
