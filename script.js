// Simple Cart Logic
let cartCount = 0;
const cartBtn = document.querySelector('.cart-btn');
const addButtons = document.querySelectorAll('.quick-add');

addButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartBtn.textContent = `Cart (${cartCount})`;
        
        // Creative feedback
        button.textContent = "Added!";
        button.style.backgroundColor = "#D27D2D";
        button.style.color = "white";

        setTimeout(() => {
            button.textContent = "Add to Cart";
            button.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
            button.style.color = "black";
        }, 1500);
    });
});

// Smooth Scroll for "Shop" link
document.querySelector('a[href^="#"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});
