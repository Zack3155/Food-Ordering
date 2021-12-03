const express = require('express');
const sms = require('../sendSms.js').sendTextMessage;
sms("here");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    res.render("checkout");
  });
  return router;
};

