const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    res.render("cart");
  });

  const getDishPrice = function (dish_name) {
    return getPriceWithName(dish_name)
    //.then(data => data);
  };
  exports.getDishPrice = getDishPrice;
  return router;
};
