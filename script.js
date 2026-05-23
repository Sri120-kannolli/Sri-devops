

let cart = [];
let total = 0;

const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');

cartBtn.addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

function closeCart() {
    cartModal.style.display = 'none';
}

function addToCart(productName, price) {

    cart.push({
        productName,
        price
    });

    total += price;

    updateCart();

    alert(productName + ' added to cart');
}

function updateCart() {

    cartItems.innerHTML = '';

    cart.forEach(item => {

        const li = document.createElement('li');

        li.innerHTML = `
            ${item.productName} - ₹${item.price}
        `;

        cartItems.appendChild(li);
    });

    cartTotal.innerText = total;
    cartCount.innerText = cart.length;
}

window.onclick = function(event) {

    if(event.target == cartModal) {
        cartModal.style.display = 'none';
    }
}
ions
