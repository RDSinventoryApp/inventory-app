const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// GET /sauce
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

// added this file here copying sauces exactly for back end something