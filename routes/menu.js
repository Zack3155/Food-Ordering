const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query("select * from dishes;")
      .then(result => {
        res.render("menu", { dishes: result.rows });
      })
  });
  return router;
};
