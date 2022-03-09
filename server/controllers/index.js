const asyncHandler = require('express-async-handler');
const webpush = require('web-push');
const fs = require('fs');
const subscription = [];
require('dotenv').config();

const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;

webpush.setVapidDetails(
  'mailto:blam.m03@htlwienwest.at',
  publicVapidKey,
  privateVapidKey,
);

const { getRecipesModel, pstRecipeModel } = require('../model/recipes');

const getRecipes = asyncHandler(async (req, res) => {
  res.status(200).json(await getRecipesModel());
});
const pstRecipe = asyncHandler(async (req, res) => {
  await pstRecipeModel(req.body);
  console.log(await getRecipesModel());
  res.status(204).end();
});

const subscribe = asyncHandler(async (req, res) => {
  subscription.push(req.body);
  res.status(201).end();
});

const notify = asyncHandler(async (req, res) => {
  const payload = JSON.stringify({ title: 'New Recipe!', body: req.body });
  for (const sub of subscription) {
    try {
      webpush.sendNotification(sub, payload);
    } catch (error) {
      console.error(error);
    }
  }
  res.status(200).end();
});

module.exports = { getRecipes, pstRecipe, subscribe, notify };
