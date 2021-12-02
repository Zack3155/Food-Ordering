const express = require('express');
const router = express.Router();


module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM dishes `)
      .then(data => {
        const results = data.rows;
        console.log("dishes: ------", results);
        res.render('menu', { results: results });
      }
      );
  });
  return router;
};
