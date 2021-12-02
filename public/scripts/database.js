// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Server Side Logic Implementation

// Given dish name, return the price for this dish
const getPriceWithName = function (dish_name) {
  const values = [dish_name];
  const queryString = (
    `SELECT
  price
FROM
  dishes
WHERE
  name = $1;`
  );

  return pool.query(queryString, values)
    .then((result) => result.rows[0])
    .catch((err) => console.log(err.message));
};

const getDishInfoWithName = function (dish_name) {
  const values = [dish_name];
  const queryString = (
    `SELECT
  *
FROM
  dishes
WHERE
  name = $1;`
  );

  return pool.query(queryString, values)
    .then((result) => result.rows[0])
    .catch((err) => console.log(err.message));
};




module.exports = { getPriceWithName, getDishInfoWithName };




