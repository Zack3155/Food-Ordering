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
        <li><a href="#menu">Menu</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div class="cart">
         <a href='/cart'> <img alt="cart" src="../images/cart.svg"> </a>
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
      <div class="dish-pic"> <img alt="picture of dish" src=${menuObj.image}> </div>
      <section class="component-container">
        <h3 class="title"> ${menuObj.title} </h3>
        <p> ${menuObj.desc} </p>

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





/*
  DUMMY MENU OBJECTS
*/

const renderHomePage = (db) => {
  $('.menu').append(createNavBar);
  $('.search-container').append(searchButton);
  $('.shape-decoration').append(createDecoration);
  $('.blue-container').append(blueBannerContent);
  $('.footer-container').append(footer);
  for (let dish of db) {
    // eslint-disable-next-line no-undef
    $('.menu-container').append(createMenuItem(dish));
  }
};

const db = [{
  image: "../images/pexels-dana.png", desc: "Beef chicken pork bacon chuck shortloin sirloin shank shoulder, meatloaf pastrami aute turkey proident eu t-bone consequat porkbelly, officia dolore flank est spareribs leberkas andouille. Sunt meatloaf officia occaecat esse veniam flank tri-tip pork, consectetur capicola mollit nostrud velit turkey consequat in, cow sed shankle est enim chicken tongue. Aute ", title: "Beef"
},
{
  image: "../images/pexels-harry.jpeg", desc: "Beef chicken pork bacon chuck shortloin sirloin shank shoulder, meatloaf pastrami aute turkey proident eu t-bone consequat porkbelly, officia dolore flank est spareribs leberkas andouille. Sunt meatloaf officia occaecat esse veniam flank tri-tip pork, consectetur capicola mollit nostrud velit turkey consequat in, cow sed shankle est enim chicken tongue. Aute ", title: "Super shrimp"
},
{
  image: "../images/pexels-josh.png", desc: "Beef chicken pork bacon chuck shortloin sirloin shank shoulder, meatloaf pastrami aute turkey proident eu t-bone consequat porkbelly, officia dolore flank est spareribs leberkas andouille. Sunt meatloaf officia occaecat esse veniam flank tri-tip pork, consectetur capicola mollit nostrud velit turkey consequat in, cow sed shankle est enim chicken tongue. Aute ", title: "Fresh's special pasta"
},
];

<<<<<<< HEAD
  ///////////////////////////////////////////////////////////////////////////////////////////////
  // Cart Page Implementation
  renderCart(dishes);
  


  // Remove Button
  $(".remove button").click(function () {
    // Remove dish from Dishes array
    //removeDish(dish_name, dishes);

    // Remove the current dish from cart page
    const dish = $(this).closest(".dish-container")

    // update items count on the cart
    let $ordersLeft = $('.order-counter').text();
    $ordersLeft = Number($ordersLeft) - 1;
    $('.order-counter').text($ordersLeft);

    dish.remove();
  });

  // Add Button
  $(".add").click(function () {
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
      // set quantity data

    }
    
  });

  // Minus Button
  $(".minus").click(function () {
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

      // there is bug with --quantity
      quantity = quantity - 1;
      output.text(quantity);
      // set quantity data

      // decrement count of items in cart
      let $ordersAdded = $('.order-counter').text();
      $ordersAdded = Number($ordersAdded) - 1;
      $('.order-counter').text($ordersAdded);

    }
  });

  // Checkout Button
  $(".checkout button").click(function () {
    window.location.href = "/checkout";
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////


  
});
=======
>>>>>>> 8da491cd9f007489af94a1c0c53c2a30a00b0e63

////////////////////////////////////////////////////////////////////////////////////////////

// eslint-disable-next-line no-undef
$(document).ready(function () {

  /*
  render dishes from the dummy db
  to the home page. All elements on the homepage are also rendered here */
  renderHomePage(db);


});
