const express = require('express');
const router = express.Router();

const getDishInfoByName = function(dish_name) {
  // eslint-disable-next-line camelcase
  const values = [dish_name];
  const queryString = (`
SELECT
  *
FROM
  dishes
WHERE
  name = $1;
  `);
  // eslint-disable-next-line no-undef
  return pool.query(queryString, values)
    .then((result) => result.rows[0])
    .catch((err) => console.log(err.message));
};
exports.getDishInfoByName = getDishInfoByName;

module.exports = (db) => {



  router.get("/", (req, res) => {
    const queryString = (`SELECT * FROM dishes;`);
    db.query(queryString)
      .then(data => {
        const result = data.rows;
        res.json({ result });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
    //res.render("cart");
  });

  return router;
};