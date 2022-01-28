const express = require('express');
const asyncHandler = require('express-async-handler');
const webpush = require('web-push');
const subscription = [];
require('dotenv').config();

const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;

webpush.setVapidDetails(
  'mailto:blam.m03@htlwienwest.at',
  publicVapidKey,
  privateVapidKey,
);

const {
  getRecipes,
  pstRecipe,
} = require('../model/recipes');

const router = express.Router();

router.get(
  '/recipes',
  asyncHandler(async (req, res) => {
    res.json(getRecipes());
  }),
);


router.post(
  '/recipe',
  asyncHandler(async (req, res) => {
    pstRecipe(req.body);
    res.status(200).end();
  }),
);

router.post(
  '/subscribe',
  asyncHandler(async (req, res) => {
    subscription.push(req.body);
    res.status(201).end();
  }),
);

router.post('/notify', req => {
  const payload = JSON.stringify({ title: 'New Recipe!', body: req.body });
  for (const sub of subscription) {
    try {
      webpush.sendNotification(sub, payload);
    } catch (error) {
      console.error(error);
    }
  }
});

module.exports = router;
