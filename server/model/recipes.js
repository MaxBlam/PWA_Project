const fs = require('fs');
const path = require('path');

const f = path.resolve(__dirname, 'recipes.json');

const rawdata = fs.readFileSync(f);
let recipes = JSON.parse(rawdata);

const getRecipesModel = () => recipes;

function pstRecipeModel(recipe) {
  recipe.id = Math.max(...recipes.map(el => el.id)) + 1;
  recipes.push(recipe);
  fs.writeFile(`${__dirname}/recipes.json`, JSON.stringify(recipes), err => {
    if (err) {
      console.log(err);
    }
  });
}

module.exports = { pstRecipeModel, getRecipesModel };
