//const { getPriceWithName } = require('./database.js');

///////////////////////////////////////////////////////////////////////////////////////////////
// Client Side Logic Implementation

// Dishes example
let dishes = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }, { f: 6 }, { g: 7 }, { h: 8 }, { i: 9 }];

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

const getDishPrice = function (dish_name) {
  return getPriceWithName(dish_name);
};

///////////////////////////////////////////////////////////////////////////////////////////////
// Cart Page Logic Implementation
// Create single cart item
const createCartItem = function (name, pic_url, intro, quantity) {
  return (`
  <div class="dish-container">
        <header>
          <p class="name">${name}</p>
          <img
            src="${pic_url}">
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
  const name = 'Photosimysia'
  const pic_url = 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/88f787f4-40c9-4084-92f1-5df6dc94fb72-french-onion-soup.jpg'
  const intro = `Very few dishes are as comforting as French onion soup – a blend of mellow, slowly cooked, caramelised onions in a broth laced with white wine and cognac. It's thought that a version of the soup has existed since at least Roman times, but the modern version originated in 18th-century Paris. The soup is served in a ramekin, topped with a slice of baguette and cheese that's then melted under a grill.`
  const quantity = '1'
  const cartContainer = $('.dishes');
  const $itm = createCartItem(name, pic_url, intro, quantity);
  cartContainer.append($itm);
  cartContainer.append($itm);
  cartContainer.append($itm);
}
///////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function () {
  // Code Test Section
  //console.log(getDishPrice('coca cola'));


  ///////////////////////////////////////////////////////////////////////////////////////////////
  // Cart Page Implementation
  renderCart(dishes);

  // Remove Button
  $(".remove button").click(function (event) {
    event.preventDefault();
    // Remove dish from Dishes array
    //removeDish(dish_name, dishes);

    // Remove the current dish from cart page
    const dish = $(this).closest(".dish-container");

    // update items count on the cart
    let $ordersLeft = $('.order-counter').text();
    $ordersLeft = Number($ordersLeft) - 1;
    $('.order-counter').text($ordersLeft);

    dish.remove();
  });

  // Add Button
  $(".add").click(function (event) {
    event.preventDefault();
    const container = $(this).closest(".dish-container");
    const output = container.find('output');
    const MAX = 9;
    let quantity = Number(output.text());
    if (quantity < MAX) {
      output.text(++quantity);
      // update quantity data
      const name = container.find('.name').text();
      console.log(name, quantity);
      setDishQuantity(name, quantity, dishes);

      // increase count of items in cart
      let $ordersAdded = $('.order-counter').text();
      let $addOrder = Number($ordersAdded) + 1;
      $('.order-counter').text($addOrder);

    }

  });

  // Minus Button
  $(".minus").click(function (event) {
    event.preventDefault();
    const container = $(this).closest(".dish-container");
    const output = container.find('output');
    const Min = 1;
    let quantity = Number(output.text());
    if (quantity > Min) {
      output.text(--quantity);
      // update quantity data
      const name = container.find('.name').text();
      console.log(name, quantity);
      setDishQuantity(name, quantity, dishes);

      // decrement count of items in cart
      let $ordersAdded = $('.order-counter').text();
      $ordersAdded = Number($ordersAdded) - 1;
      $('.order-counter').text($ordersAdded);

    }
  });

  // Checkout Button
  $(".checkout button").click(function (event) {
    event.preventDefault();
    window.location.href = "/checkout";
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////
});
