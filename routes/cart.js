const express = require('express');
const router = express.Router();

const getDishInfoByName = function (dish_name) {
  const values = [dish_name];
  const queryString = (`
SELECT
  *
FROM
  dishes
WHERE
  name = $1;
  `);
  return pool.query(queryString, values)
    .then((result) => result.rows[0])
    .catch((err) => console.log(err.message));
};
exports.getDishInfoByName = getDishInfoByName;

module.exports = (db) => {



  router.put("/list", (req, res) => {
    const queryString = (`SELECT * FROM dishes;`);
    db.query(queryString)
      .then(data => {
        res.json(data.rows);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
    //res.render("cart");
  });

  router.get("/add/:name", (req, res) => {

    console.log(req.body);
    const values = [req.params.name];
    const queryString = (`SELECT * FROM dishes WHERE name = $1;`);
    db.query(queryString, values)
      .then(data => {
        res.json(data.rows[0]);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
    //res.render("cart");
  });

  return router;
};
