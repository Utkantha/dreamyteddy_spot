/* ============================================
   HOW TO ADD YOUR OWN TEDDY BEAR PHOTOS:
   ============================================
   
   OPTION 1: Use Online Image URLs
   - Find free teddy bear images on:
     * Pixabay: https://pixabay.com/images/search/teddy%20bear/
     * Unsplash: https://unsplash.com/s/photos/teddy-bear
     * Pexels: https://www.pexels.com/search/teddy%20bear/
   - Right-click the image → "Copy image address"
   - Replace the "image" URL below with your copied URL
   
   OPTION 2: Use Local Images
   - Create an "images" folder in your project
   - Save your teddy bear photos (e.g., teddy1.jpg, teddy2.jpg)
   - Change the image path to: "images/teddy1.jpg"
   
   EXAMPLE:
   image: "images/teddy1.jpg"  // For local images
   image: "https://example.com/teddy.jpg"  // For online URLs
   ============================================ */

// Sample Teddy Bear Products
// ⚠️ IMPORTANT: Replace the image URLs below with your actual teddy bear photos!
const products = [
    {
        id: 1,
        name: "Cloudy the Dreamer",
        price: 29.99,
        // 👇 CHANGE THIS URL to your teddy bear image
        image: "images/teddy1.jpg",  // Replace with your image URL or local path
        rating: 4.9,
        reviews: 234,
        description: "Ultra-soft and huggable, perfect for bedtime cuddles"
    },
    {
        id: 2,
        name: "Starry Night Bear",
        price: 34.99,
        // 👇 CHANGE THIS URL to your teddy bear image
        image: "images/teddy2.jpg",  // Replace with your image URL or local path
        rating: 4.8,
        reviews: 189,
        description: "Sparkly and magical, brings dreams to life"
    },
    {
        id: 3,
        name: "Honey Hug Bear",
        price: 27.99,
        // 👇 CHANGE THIS URL to your teddy bear image
        image: "images/teddy3.jpg",  // Replace with your image URL or local path
        rating: 5.0,
        reviews: 312,
        description: "Golden and warm, like a sweet honey hug"
    },
    {
        id: 4,
        name: "Lavender Dreams",
        price: 32.99,
        // 👇 CHANGE THIS URL to your teddy bear image
        image: "images/teddy4.jpg",  // Replace with your image URL or local path
        rating: 4.7,
        reviews: 156,
        description: "Calming lavender scent, perfect for relaxation"
    },
    {
        id: 5,
        name: "Rainbow Fluff",
        price: 36.99,
        // 👇 CHANGE THIS URL to your teddy bear image
        image: "images/teddy5.jpg",  // Replace with your image URL or local path
        rating: 4.9,
        reviews: 278,
        description: "Colorful and cheerful, spreads joy everywhere"
    },
    {
        id: 6,
        name: "Cocoa Cuddles",
        price: 28.99,
        // 👇 CHANGE THIS URL to your teddy bear image
        image: "images/teddy6.jpg",  // Replace with your image URL or local path
        rating: 4.8,
        reviews: 201,
        description: "Chocolate brown and irresistibly soft"
    },
    {
        id: 7,
        name: "Pink Paradise",
        price: 31.99,
        // 👇 CHANGE THIS URL to your teddy bear image
        image: "images/teddy7.jpg",  // Replace with your image URL or local path
        rating: 4.9,
        reviews: 267,
        description: "Pretty in pink, the perfect gift for anyone"
    },
    {
        id: 8,
        name: "Midnight Blue",
        price: 33.99,
        // 👇 CHANGE THIS URL to your teddy bear image
        image: "images/teddy8.jpg",  // Replace with your image URL or local path
        rating: 4.6,
        reviews: 143,
        description: "Deep blue comfort for peaceful nights"
    },
    {
        id: 9,
        name: "Sunshine Bear",
        price: 30.99,
        // 👇 CHANGE THIS URL to your teddy bear image
        image: "images/teddy9.jpg",  // Replace with your image URL or local path
        rating: 5.0,
        reviews: 298,
        description: "Bright and sunny, brings happiness daily"
    },
    {
        id: 10,
        name: "Minty Fresh",
        price: 29.99,
        // 👇 CHANGE THIS URL to your teddy bear image
        image: "images/teddy10.jpg",  // Replace with your image URL or local path
        rating: 4.7,
        reviews: 175,
        description: "Cool mint green, fresh and delightful"
    },
    {
        id: 11,
        name: "Peach Blossom",
        price: 35.99,
        // 👇 CHANGE THIS URL to your teddy bear image
        image: "images/teddy11.jpg",  // Replace with your image URL or local path
        rating: 4.8,
        reviews: 221,
        description: "Soft peach color, gentle and loving"
    },
    {
        id: 12,
        name: "Golden Glow",
        price: 37.99,
        // 👇 CHANGE THIS URL to your teddy bear image
        image: "images/teddy12.jpg",  // Replace with your image URL or local path
        rating: 4.9,
        reviews: 289,
        description: "Luxurious golden bear, premium quality"
    }
];

// Cart state
let cart = [];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    loadCart();
    updateCartCount();
});

// Render products
function renderProducts() {
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-image" 
                     onerror="this.onerror=null; this.style.background='linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'; this.style.display='flex'; this.style.alignItems='center'; this.style.justifyContent='center'; this.innerHTML='🧸<br>Image not found<br><small>Add your image in script.js</small>';"
                     loading="lazy">
                <div class="product-badge">✨ New</div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-rating">
                    <span class="stars">${generateStars(product.rating)}</span>
                    <span class="rating-text">${product.rating}</span>
                </div>
                <div class="product-reviews">${product.reviews} reviews</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    Add to Cart 🛒
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Generate star rating display
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '⭐'.repeat(fullStars);
    if (hasHalfStar) stars += '⭐';
    return stars;
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartCount();
    renderCart();
    
    // Show success animation
    showNotification(`${product.name} added to cart! 🎉`);
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCart();
}

// Render cart
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        document.getElementById('cart-total').textContent = '0.00';
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='https://via.placeholder.com/80?text=Teddy'">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)} × ${item.quantity}</div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    document.getElementById('cart-total').textContent = total.toFixed(2);
}

// Toggle cart sidebar
function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('active');
    
    if (cartSidebar.classList.contains('open')) {
        renderCart();
    }
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Thank you for your purchase! Total: $${total.toFixed(2)}\n\nYour order will be processed soon. 🎉`);
    
    cart = [];
    saveCart();
    updateCartCount();
    renderCart();
    toggleCart();
}

// Login functionality
function openLogin() {
    const loginModal = document.getElementById('login-modal');
    const loginOverlay = document.getElementById('login-overlay');
    
    loginModal.classList.add('open');
    loginOverlay.classList.add('active');
}

function closeLogin() {
    const loginModal = document.getElementById('login-modal');
    const loginOverlay = document.getElementById('login-overlay');
    
    loginModal.classList.remove('open');
    loginOverlay.classList.remove('active');
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simple validation
    if (email && password) {
        alert(`Welcome back! You've successfully logged in with ${email} 🎉`);
        closeLogin();
        // In a real app, you would send this to a server
    }
}

// Cart persistence
function saveCart() {
    localStorage.setItem('dreamyteddy_cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('dreamyteddy_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

// Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        z-index: 4000;
        animation: slideIn 0.3s ease;
        font-weight: 600;
        color: #333;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

