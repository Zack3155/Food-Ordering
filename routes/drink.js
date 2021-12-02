const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query("SELECT * FROM dishes;")
      .then(result => {
        console.log('++++++++++++++++++++++++++++', result.rows);
        res.send({ dishes: result.rows });
      });
    
  });
  return router;
};
