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
        // for (const itm of data) {
        //   const name = itm.name;
        //   addDish(name, 1, dishes);
        // }
        renderCart(data); // call for render cart content
      },
      error: (err) => {
        alert(`there was an error: ${err}`);
      }
    });
};

///////////////////////////////////////////////////////////////////////////////////////////////
// DOM Logic Implementation
let dishes = [];
let total = 0;
let quantity = 0;
loadCart();


$(document).ready(function () {
  // Code Test Section
  console.log(dishes);

  // Show a number on the cart icon
  quantity = countCartItems(dishes);
  $('.order-counter').text(quantity);
  // Show the total price
  $('.total').text(total);
