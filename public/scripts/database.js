// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Database Query Implementation

// Given dish name, get all of its info data with this name
// @return {Promise<{}>}
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
  return pool.query(queryString, values)
    .then((result) => result.rows[0])
    .catch((err) => console.log(err.message));
};


// Given a category string, filter all dishes with this category
// @return {Promise<{}>}
const getDishesByCategory = function(category) {
  const values = [dish_name];
  const queryString = (`
SELECT
  *
FROM
  dishes
WHERE
  category = $1;
  `);
  return pool.query(queryString, values)
    .then((result) => result.rows)
    .catch((err) => console.log(err.message));
};

// Given a string, get all possible dishes contain with this string
// @return {Promise<{}>}
const searchDishesByName = function(string) {
  const values = [`%${string}%`];
  const queryString = (`
SELECT
  *
FROM
  dishes
WHERE
  name LIKE $1;
  `);
  return pool.query(queryString, values)
    .then((result) => result.rows)
    .catch((err) => console.log(err.message));
};


// Insert a client record to databse given a client object
// @return {Promise<{}>}
const addClient = function(client) {
  const values = [client.name, client.phone, client.street, client.city, client.province, client.post_Code, client.name];
  const queryString = (`
  INSERT INTO clients (${Object.keys(client).join()})
  SELECT $1, $2, $3, $4, $5, $6
  WHERE
  NOT EXISTS (
    SELECT
      name
    FROM
      clients
    WHERE
      name = $7
  ) RETURNING *;
  `);
  return pool.query(queryString, values)
    .then((result) => result.rows[0])
    .catch((err) => console.log(err.message));
};

// Insert a order record to databse given a order object
// @return {Promise<{}>}
const addOrder = function(order) {
  const values = [order.client_id, order.total, order.estimate, order.time, order.note];
  const queryString = (`
  INSERT INTO orders (${Object.keys(order).join()})
  SELECT $1, $2, $3, $4, $5
  RETURNING *;
  `);
  return pool.query(queryString, values)
    .then((result) => result.rows[0])
    .catch((err) => console.log(err.message));
};


// Insert a dish-order pair record to databse given a dish_order object
// @return {Promise<{}>}
const addDish_orders = function(dish_order) {
  const values = [dish_order.order_id, dish_order.dish_id, dish_order.cost, dish_order.dish_quantity];
  const queryString = (`
  INSERT INTO dish_orders (${Object.keys(dish_order).join()})
  SELECT $1, $2, $3, $4
  RETURNING *;
  `);
  return pool.query(queryString, values)
    .then((result) => result.rows[0])
    .catch((err) => console.log(err.message));
};






module.exports = { getPriceWithName, getDishInfoWithName };
