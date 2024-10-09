document.addEventListener('DOMContentLoaded', function () {
    let cart = [];

    // Function to load cart from localStorage
    function loadCart() {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            cart = JSON.parse(storedCart);
        }
    }

    // Function to save cart to localStorage
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Function to add item to cart
    function addToCart(name, price) {
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ name: name, price: parseFloat(price), quantity: 1 });
        }
        saveCart();
        alert(`${name} has been added to your cart.`);
    }

    // Event listener for Add to Cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const name = this.getAttribute('data-name');
            const price = this.getAttribute('data-price');
            addToCart(name, price);
        });
    });

    // Load cart when the page loads
    loadCart();
});
