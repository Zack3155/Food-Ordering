// Client facing scripts here
// eslint-disable-next-line no-undef

const createNavBar = () => {
  return (
    `<nav class="navbar">
      <div class="logo">
         <img alt="logo" src="../logo/logo.svg">
      </div>
      <ul>
        <li><a></a>Home</li>
        <li><a></a>Order</li>
        <li><a></a>Contact</li>
      </ul>
      <div class="cart">
         <img alt="logo" src="../images/cart.svg">
      </div>

      
    </nav>`
  );
};

// eslint-disable-next-line no-undef
$(document).ready(function() {
  // eslint-disable-next-line no-undef
  $('.menu').append(createNavBar);
});