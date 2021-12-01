// Client facing scripts here
// eslint-disable-next-line no-undef

const createNavBar = () => {
  return (
    `<nav class="navbar">
      <div class="logo">
         <img alt="logo" src="../logo/logo.svg">
      </div>
      <ul class="menu-item-container">
        <li><a href="/home">Home</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div class="cart">
         <img alt="logo" src="../images/cart.svg">
      </div>
    </nav>`
  );
};

const buyDetails = () => {
  // <label for="phoneNumber" class="form-label label-default">Phone</label>
  return (

    `<div class="mb-3  form-control-lg change-color">
        <input type="text" class="form-control" id="phoneNumber" placeholder="food, drinks, deserts etc.">
    </div>` // end of real div
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


///////////////////////////////////////////////////////////////////////////////////////////////
// Client Side Logic Implementation

// Dishes example
const dishes = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }, { f: 6 }, { g: 7 }, { h: 8 }, { i: 9 }];

// Remove dish from Dishes given by its name
// Return modified Dishes
const removeDish = function (dish_name, dishes) {
  return dishes.filter(itm => !itm[dish_name]);
};
///////////////////////////////////////////////////////////////////////////////////////////////

// Cart Page Logic Implementation

// Show cart content according to Dishes array


// eslint-disable-next-line no-undef
$(document).ready(function () {
  // eslint-disable-next-line no-undef
  $('.menu').append(createNavBar);
  $('.user-address').append(buyDetails);
  $('.shape-decoration').append(createDecoration);
  $('.blue-container').append(blueBannerContent);

  ///////////////////////////////////////////////////////////////////////////////////////////////
  // Cart Page Implementation


  // Remove Button
  $(".remove button").click(function () {


    // Remove dish from Dishes array
    //removeDish(dish_name, dishes);

    // Remove the current dish from cart page
    const dish = $(this).closest(".dish-container")
    dish.remove();
  });

  // Add Button
  $(".add").click(function () {
    const input = $('.quantity-input output');
    const MAX = 9;
    let quantity = Number(input.text());
    if (quantity < MAX) {
      input.text(++quantity);
    }
  });

  // Minus Button
  $(".minus").click(function () {
    const input = $('.quantity-input output');
    const Min = 1;
    let quantity = Number(input.text());
    if (quantity > Min) {
      input.text(--quantity);
    }
  });

  // Checkout Button
  $(".checkout button").click(function () {
    window.location.href = "/checkout";
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////
});

