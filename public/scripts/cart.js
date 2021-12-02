// const { dishes } = require('app');

///////////////////////////////////////////////////////////////////////////////////////////////
// Client Side Logic Implementation


// Remove dish from Dishes given by its name
// Return a COPY of modified Dishes
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

// Count the total number of items in the cart
const countCartItems = function (dishes) {
  let result = 0;
  for (const itm of dishes) {
    result += Number(Object.values(itm));
  }
  return result;
};


///////////////////////////////////////////////////////////////////////////////////////////////
// Cart Page Logic Implementation

// Create single cart item by given dish object and its quantity
// Also push the dish item to dishes
const createCartItem = function (dish, quantity) {
  const name = dish.name;
  const photo_url = dish.photo_url;
  const intro = dish.description;
  const price = dish.price;
  addDish(name, quantity, dishes); // add dish-quantity pair to Dishes array
  total += price; // update the price
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
  cartContainer.empty();
  for (const itm of dishes) {
    const $itm = createCartItem(itm, 1);
    cartContainer.append($itm);
  }
}

// Load the whole cart for displaying cart content
const loadCart = function () {
  $.ajax(
    {
      url: '/cart/list',
      method: 'PUT',
      dataType: 'json',
      success: (data) => {
        renderCart(data); // call for render cart content
      },
      error: (err) => {
        alert(`there was an error: ${err}`);
      }
    });
};

///////////////////////////////////////////////////////////////////////////////////////////////

let dishes = [];
let total = 0;
let quantity = 0;
loadCart();



$(document).ready(function () {
  // Code Test Section
  console.log(dishes);


  ///////////////////////////////////////////////////////////////////////////////////////////////
  // Cart Page Implementation

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
      //console.log(dishes);

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
      //console.log(dishes);

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
  $(".checkout button").on("click", function (event) {
    event.preventDefault();
    window.location.href = "/checkout";
  });


  ///////////////////////////////////////////////////////////////////////////////////////////////
});

module.exports = { total };
