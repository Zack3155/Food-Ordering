// Client facing scripts here
// eslint-disable-next-line no-undef

const createNavBar = () => {
  return (
    `<nav class="navbar">
      <div class="logo">logo here </div>
      <ul>
        <li><a></a>Home</li>
        <li><a></a>Order</li>
        <li><a></a>Contact</li>
      </ul>
    </nav>`
  );
};

// eslint-disable-next-line no-undef
$(document).ready(function() {
  // eslint-disable-next-line no-undef
  $('.menu').append(createNavBar);
});