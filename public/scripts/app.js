// Client facing scripts here
// eslint-disable-next-line no-undef

const createNavBar = () => {
  return (
    `<nav class="navbar">
      <div class="logo">
         <img alt="logo" src="../logo/logo.svg">
      </div>
      <ul class="menu-item-container">
        <li><a>Home</a></li>
        <li><a>Menu</a></li>
        <li><a>Contact</a></li>
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

// eslint-disable-next-line no-undef
$(document).ready(function () {
  // eslint-disable-next-line no-undef
  $('.menu').append(createNavBar);
  $('.user-address').append(buyDetails);
  $('.shape-decoration').append(createDecoration);
  $('.blue-container').append(blueBannerContent);
});

