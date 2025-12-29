let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;

  document.getElementById("cart-count").innerText = cart.length;
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
  });

  document.getElementById("total").innerText = total;
}

function checkout() {
  alert(
    "This is a demo checkout.\n\nTo accept real payments, connect Stripe Checkout with a backend."
  );

  // Example redirect to Stripe Checkout (replace later)
  // window.location.href = "https://buy.stripe.com/test_xxxxx";
}
