const express = require('express');
const router = express.Router();
// const sms = require('../sendSms.js').sendTextMessage;
// sms("your order is going to be ready in 30");

module.exports = (db) => {
  router.get("/", (req, res) => {
    res.render("checkout");
  });
  return router;
};
