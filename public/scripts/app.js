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

const searchButton = () => {
  // <label for="phoneNumber" class="form-label label-default">Phone</label>
  return (

    `<div class="mb-3  form-control-lg change-color">
        <input type="text" class="form-control" id="phoneNumber" placeholder="food, drinks, deserts etc.">
        <div class="arrow-container"><i class="fas fa-arrow-alt-circle-right"></i></div>
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

// eslint-disable-next-line no-undef
$(document).ready(function () {
  // eslint-disable-next-line no-undef
  $('.menu').append(createNavBar);
  $('.search-container').append(searchButton);
  $('.shape-decoration').append(createDecoration);
  $('.blue-container').append(blueBannerContent);

  ///////////////////////////////////////////////////////////////////////////////////////////////
  // Cart Page Implementation

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

