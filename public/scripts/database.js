// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Server Side Logic Implementation

// Given dish name, return the price for this dish
const getPrice = function (dish_name) {
  const values = [dish_name];
  const queryString = ``;
}




