const express = require('express');
const router = express.Router();
const {
  getRecipes,
  deleteRecipe,
  pstRecipe,
  subscribe,
  notify,
} = require('../controllers');

router.get('/recipes', getRecipes);
router.delete('/recipe/:id', deleteRecipe);
router.post('/recipe', pstRecipe);
router.post('/subscribe', subscribe);
router.post('/notify', notify);

module.exports = router;
