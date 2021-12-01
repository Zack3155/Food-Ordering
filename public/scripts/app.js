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


///////////////////////////////////////////////////////////////////////////////////////////////
// Client Side Logic Implementation

// Dishes example
const dishes = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }, { f: 6 }, { g: 7 }, { h: 8 }, { i: 9 }];

// Remove dish from Dishes given by its name
// Return modified Dishes
const removeDish = function (dish_name, dishes) {
  return dishes.filter(itm => !itm[dish_name]);
};

const setDishQuantity = function (dish_name, quantity, dishes) {
  for (const itm of dishes) {
    if (itm[dish_name])
      itm[dish_name] = quantity;
  }
  return dishes;
};





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


// eslint-disable-next-line no-undef
$(document).ready(function () {
  // eslint-disable-next-line no-undef
  $('.menu').append(createNavBar);
  $('.search-container').append(searchButton);
  $('.shape-decoration').append(createDecoration);
  $('.blue-container').append(blueBannerContent);

  ///////////////////////////////////////////////////////////////////////////////////////////////
  // Cart Page Implementation

  renderCart(dishes);

  // Remove Button
  $(".remove button").click(function (event) {
    event.preventDefault();
    // Remove dish from Dishes array
    //removeDish(dish_name, dishes);

    // Remove the current dish from cart page
    const dish = $(this).closest(".dish-container")
    dish.remove();
  });

  // Add Button
  $(".add").click(function (event) {
    event.preventDefault();
    const output = $(this).closest(".dish-container").find('output');
    const MAX = 9;
    let quantity = Number(output.text());
    if (quantity < MAX) {
      output.text(++quantity);
      // set quantity data

    }
  });

  // Minus Button
  $(".minus").click(function (event) {
    event.preventDefault();
    const output = $(this).closest(".dish-container").find('output');
    const Min = 1;
    let quantity = Number(output.text());
    if (quantity > Min) {
      output.text(--quantity);
      // set quantity data

    }
  });

  // Checkout Button
  $(".checkout button").click(function (event) {
    event.preventDefault();
    window.location.href = "/checkout";
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////
});

