const asyncHandler = require('express-async-handler');
const webpush = require('web-push');
const webp = require('webp-converter');
const subscription = [];
require('dotenv').config();

const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;

webpush.setVapidDetails(
  'mailto:blam.m03@htlwienwest.at',
  publicVapidKey,
  privateVapidKey
);

const { getRecipesModel, pstRecipeModel } = require('../model/recipes');

function compressImage(dataBase64) {
  return webp.str2webpstr(dataBase64, 'jpg', '-q 80');
}

const getRecipes = asyncHandler(async (req, res) => {
  res.status(200).json(await getRecipesModel());
});
const pstRecipe = asyncHandler(async (req, res) => {
  req.body.img = compressImage(req.body.img);
  await pstRecipeModel(req.body);
  console.log(await getRecipesModel());
  res.status(204).end();
});

const subscribe = asyncHandler(async (req, res) => {
  subscription.push(req.body);
  res.status(201).end();
});

const notify = asyncHandler(async (req) => {
  const payload = JSON.stringify({ title: 'New Recipe!', body: req.body });
  for (const sub of subscription) {
    try {
      webpush.sendNotification(sub, payload);
    } catch (error) {
      console.error(error);
    }
  }
});

module.exports = { getRecipes, pstRecipe, subscribe, notify };
