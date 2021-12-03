const express = require('express');
const sms = require('sendSms.js');
console.log("sms: ", sms);
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    res.render("checkout");
  });
  return router;
};
