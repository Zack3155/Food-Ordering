// Client facing scripts here
// eslint-disable-next-line no-undef

const createNavBar = () => {
  return (
    `<nav class="navbar">
      <div class="logo">
         <a href='/home'><img alt="logo" src="../logo/logo.svg"></a>
      </div>
      <ul class="menu-item-container">
        <li><a href="/home">Home</a></li>
        <li><a class="menuClick" href="/menu">Menu</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div class="cart">
         <a class="cartClick" href='/cart'> <img alt="cart" src="../images/cart.svg"> </a>
         <div class="order-counter">0</div>
      </div>
    </nav>`
  );
};

const searchButton = () => {
  return (

    `<div class="mb-3  form-control-lg change-color">
        <input type="text" class="form-control" id="phoneNumber" placeholder="food, drinks, deserts etc.">
        <button class="arrow-container"><i class="fas fa-arrow-alt-circle-right"></i></button>
    </div>`
  );
};

const createDecoration = () => {
  return (`
  <div class="rectangle"></div>
  <div class="hook-container">
    Quality and Quantity <br/> are our answers to your cravings.
  </div>
  `);
};

const blueBannerContent = () => {
  return (`
    <div class="image-decoration"></div>
    <section class="blue-banner">
      <h2>Have your food delivered</h2>
      <h4>to your doorsteps in minutes</h4>
    </section>
  `);
};



// create menu item with its description
const createMenuItem = (menuObj) => {

  return (`
    <article class="item-container">
      <div class="dish-pic"> <img alt="picture of dish" src=${menuObj.photo_url}> </div>
      <section class="component-container">
        <h3 class="title"> ${menuObj.title} </h3>
        <p> ${menuObj.desc} </p>
        <h4>$${menuObj.price}</h4>

        <button type="button"
          class="btn btn-default btn-sm bg-to-red">
          <span class="glyphicon
              glyphicon-shopping-cart">
          </span>
          <b> Add to Cart </b>
        </button>
      </section>
    </article>
   `);
};


const footer = () => {
  return (
    `<div class="footer-dark bg-to-light">
        <footer>
             <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Home deliveries</a></li>
                            <li><a href="#">In restaurant services</a></li>
                            <li><a href="#">Cook for events</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Fresh restaurant</a></li>
                            <li><a href="#">jobs</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Fresh restaurant</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                    <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                </div>
                <p class="copyright">Fresh © 2021</p>
             </div>
        </footer>
    </div>
    `);
};


/**
 * Client Side Logic Implementation
 * Remove dish from Dishes given by its name
 * Return a COPY of modified Dishes
 */
const removeDish = function (dish_name, dishes) {
  return dishes.filter(itm => !itm[dish_name]);
};

// Add dish to Dishes given by dish's name & dish's quantity
const addDish = function (dish_name, quantity, dishes) {
  let obj = {};
  obj[dish_name] = quantity
  dishes.push(obj);
};

// Modifies dishes given by dish's name & dish's quantity
const setDishQuantity = function (dish_name, quantity, dishes) {
  for (const itm of dishes) {
    if (itm[dish_name]) {
      itm[dish_name] = quantity;
    }
  }
};

// Get specific dish quantity by dish's name
// const setDishQuantity = function (dish_name, quantity, dishes) {
// };


// Count the total number of items in the cart
const countCartItems = function (dishes) {
  let result = 0;
  for (const itm of dishes) {
    result += Number(Object.values(itm));
  }
  return result;
};

// Return true if we can find the dish name in dishes array
const findDish = function (name, dishes) {
  for (const itm of dishes) {
    if (Object.keys(itm)[0] === name) {
      return true;
    }
  }
  return false;
};

// remove dish from cart by given its name
const removeDishFromCart = function (dish_name, cart) {
  return cart.filter(itm => {
    if (Object.values(itm)[0] !== dish_name) {
      return true;
    }
  });
};


/**
 * Cart Page Logic Implementation
 * Create single cart item by given dish object and its quantity
 * Also push the dish item to dishes
 */
const createCartItem = function (dish, quantity) {
  const name = dish.name;
  const photo_url = dish.photo_url;
  const intro = dish.description;
  const price = dish.price;
  addDish(name, 1, dishes); // add dish to dish-quantity pairs array
  total += price; // update the total price
  cart.push(dish); // add this item back to cart array
  return (`
  <div class="dish-container">
        <header>
          <p class="name">${name}</p>
          <img
            src="${photo_url}">
          <p><span class="price">${price}</span> CAD Each</p>
        </header>
        <div class="content">
          <div class="remove"><button><i class="far fa-trash-alt"></i></button></div>
          <article>
            <p>${intro}</p>
          </article>
          <footer>
            <p>Please Edit the Quantity</p>
            <div class="quantity">
              <button class="minus"><i class="fas fa-angle-double-left"></i></button>
              <div class="quantity-input"><output>${quantity}</output></div>
              <button class="add"><i class="fas fa-angle-double-right"></i></button>
            </div>
          </footer>
        </div>
      </div>
  `);
};

// Dynamically show cart content according to Dishes array
const renderCart = function (dishes) {
  const cartContainer = $('.dishes');
  // clear cart and its container
  cart = [];
  cartContainer.empty();
  for (const itm of dishes) {
    const $itm = createCartItem(itm, 1);
    cartContainer.append($itm);
  }
}

// Reset the entire cart
const resetCart = function () {
  dishes = [];
  cart = [];
  total = 0;
  quantity = 0;
  $('.order-counter').text(0);
}


/**
 * DOM Logic Implementation
 * DOM Ready
 * Initialize all fields
 */
let dishes = []; // dish-quantity pairs
let cart = [];
let total = 0;
let quantity = 0;

$(document).ready(function () {
  $('.menu').append(createNavBar);
  $('.search-container').append(searchButton);
  $('.shape-decoration').append(createDecoration);
  $('.blue-container').append(blueBannerContent);
  $('.footer-container').append(footer);

  // Add to Cart button
  $(".item-container button").on("click", function (event) {
    event.preventDefault();
    const container = $(this).closest('.item-container');
    const name = container.find('.title').text().trim();
    const description = container.find('.description').text().replace(/[\n\t\r]/g, "");
    const price = Number(container.find('.price').text().trim());
    const photo_url = container.find('img').attr('src');
    const dish = { 'name': name, 'description': description, 'price': price, 'photo_url': photo_url };
    // update cart item and dishes array
    if (!findDish(name, dishes)) { // if dish-quantity pairs dont contain this dish, then update
      cart.push(dish);
      addDish(name, 1, dishes); // add dish to dish-quantity pairs array
    }
    // increase count of items in cart
    $('.order-counter').text(cart.length);
  });

  // when click cart icon
  $('.cartClick').on("click", function () {
    localStorage.setItem('cartItems', JSON.stringify(cart));
  });

  // when menu got clicked
  $('.menuClick').on("click", function () {
    localStorage.setItem('cartItems', JSON.stringify(cart));
  });


  /**
   * Cart Page
   * Render Cart Page
   */


  renderCart(JSON.parse(localStorage.getItem("cartItems")));
  // Show a number on the cart icon
  quantity = countCartItems(dishes);
  $('.order-counter').text(quantity);
  // Show the total price
  $('.total').text(total);

  // Remove Button
  $(".remove button").on("click", function (event) {
    event.preventDefault();
    // Remove the current dish from cart page
    const container = $(this).closest(".dish-container");
    // Remove dish from Dishes array
    const name = container.find('.name').text();
    dishes = removeDish(name, dishes);
    // update items count on the cart
    const number = Number(container.find('output').text());
    let $curr = Number($('.order-counter').text()) - number;
    $('.order-counter').text($curr);
    setDishQuantity(name, quantity - number, dishes);
    // upate total price on the cart
    const price = number * Number(container.find('.price').text());
    total -= price;
    $('.total').text(total);
    // Remove this dish from cart
    container.remove();
    cart = removeDishFromCart(name, cart);

    console.log(cart);
  });

  // Add Button
  $(".add").on("click", function (event) {
    event.preventDefault();
    const container = $(this).closest(".dish-container");
    const output = container.find('output');
    const MAX = 9;
    let quantity = Number(output.text());
    if (quantity < MAX) {
      output.text(++quantity);
      // update quantity data
      const name = container.find('.name').text();
      setDishQuantity(name, quantity, dishes);
      // increase count of items in cart
      let $ordersAdded = $('.order-counter').text();
      let $addOrder = Number($ordersAdded) + 1;
      $('.order-counter').text($addOrder);
      // update total price
      total += Number(container.find('.price').text());
      $('.total').text(total);
    }
  });

  // Minus Button
  $(".minus").on("click", function (event) {
    event.preventDefault();
    const container = $(this).closest(".dish-container");
    const output = container.find('output');
    const Min = 1;
    let quantity = Number(output.text());
    if (quantity > Min) {
      output.text(--quantity);
      // update quantity data
      const name = container.find('.name').text();
      setDishQuantity(name, quantity, dishes);
      // decrement count of items in cart
      let $ordersAdded = $('.order-counter').text();
      $ordersAdded = Number($ordersAdded) - 1;
      $('.order-counter').text($ordersAdded);
      // update total price
      total -= Number(container.find('.price').text());
      $('.total').text(total);
    }
  });

  // Checkout Button
  $(".checkout button").on("click", function () {
    localStorage.setItem('cartItems', JSON.stringify(cart));
    window.location.href = "/checkout";
  });

});
