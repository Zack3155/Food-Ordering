// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: true, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const homeRoutes = require("./routes/home");
const drinkRoutes = require("./routes/drink");
const contactRoutes = require("./routes/contact");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/order");
const checkoutRoutes = require("./routes/checkout");
const addressRoutes = require("./routes/address");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own

// app.use("/api/users", usersRoutes(db));
// app.use("/api/widgets", widgetsRoutes(db));
app.use("/home", homeRoutes(db));
app.use("/drink", drinkRoutes(db));
app.use("/contact", contactRoutes(db));
app.use("/cart", cartRoutes(db));
app.use("/order", orderRoutes(db));
app.use("/checkout", checkoutRoutes(db));
app.use("/address", addressRoutes(db));
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
