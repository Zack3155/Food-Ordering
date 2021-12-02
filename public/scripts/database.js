// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Database Query Implementation

// Given dish name, return all possible dishes contain dish_name
const searchDishesByName = function (dish_name) {
  const values = [`%${dish_name}%`];
  const queryString = (
    `SELECT
  *
FROM
  dishes
WHERE
  name LIKE $1;`
  );

  return pool.query(queryString, values)
    .then((result) => result.rows)
    .catch((err) => console.log(err.message));
};

// Given dish name, return a specific dish with this name
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

// Add a client record to databse given a client object
const addClient = function (client) {
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





module.exports = { getPriceWithName, getDishInfoWithName };




