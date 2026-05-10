// Product Database
const products = [
    {
        id: 1,
        name: "Zenith Skeleton Chronograph",
        brand: "Aura Luxe",
        category: "timepieces",
        price: 245000,
        originalPrice: 285000,
        rating: 4.9,
        reviews: 124,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2070&auto=format&fit=crop",
        description: "A masterpiece of horological engineering. Featuring an open-worked dial that reveals the high-frequency movement within.",
        features: ["Swiss-made Automatic Movement", "72-Hour Power Reserve", "Grade 5 Titanium Case", "Water Resistant to 100m"],
        sizes: ["42mm", "45mm"],
        colors: ["Titanium", "Midnight Black", "Rose Gold"],
        new: true,
        featured: true,
        discount: 14
    },
    {
        id: 2,
        name: "Saffiano Leather Executive Folio",
        brand: "Aura Luxe",
        category: "leather",
        price: 45000,
        originalPrice: 52000,
        rating: 4.8,
        reviews: 85,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2070&auto=format&fit=crop",
        description: "Impeccably crafted from premium Saffiano leather, this folio is designed for the modern executive. Features a minimalist profile with maximum utility.",
        features: ["Hand-stitched Finish", "Italian Saffiano Leather", "Hidden RFID Protection", "Multiple Document Compartments"],
        sizes: ["Standard", "Large"],
        colors: ["Cognac", "Obsidian", "Deep Navy"],
        new: true,
        featured: true,
        discount: 13
    },
    {
        id: 3,
        name: "Navigator 2.0 Polarized",
        brand: "Aura Luxe",
        category: "eyewear",
        price: 18500,
        originalPrice: 18500,
        rating: 4.9,
        reviews: 320,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2070&auto=format&fit=crop",
        description: "Timeless navigator silhouette re-engineered with aerospace-grade titanium and precision polarized lenses.",
        features: ["100% UV Protection", "Anti-Reflective Coating", "Ultralight Titanium Frame", "Scratch-Resistant Lenses"],
        sizes: ["M", "L"],
        colors: ["Silver/Grey", "Gold/Green", "Black/Black"],
        new: false,
        featured: true,
        discount: 0
    },
    {
        id: 4,
        name: "Full-Grain Signature Belt",
        brand: "Aura Luxe",
        category: "leather",
        price: 12500,
        originalPrice: 15000,
        rating: 4.7,
        reviews: 110,
        image: "https://images.unsplash.com/photo-1624222247344-550fb80583dc?q=80&w=2070&auto=format&fit=crop",
        description: "Each belt is cut from a single piece of full-grain vegetable-tanned leather. Features a custom-forged solid brass buckle.",
        features: ["Full-Grain Leather", "Solid Brass Buckle", "Hand-Burnished Edges", "Lifetime Warranty"],
        sizes: ["32", "34", "36", "38", "40"],
        colors: ["Chestnut", "Black", "Tan"],
        new: true,
        featured: false,
        discount: 16
    },
    {
        id: 5,
        name: "Monolith Cufflinks",
        brand: "Aura Luxe",
        category: "accessories",
        price: 8900,
        originalPrice: 8900,
        rating: 4.6,
        reviews: 45,
        image: "https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?q=80&w=2070&auto=format&fit=crop",
        description: "Sculptural cufflinks inspired by modern architecture. Cast in sterling silver with a brushed matte finish.",
        features: ["925 Sterling Silver", "Matte Brushed Finish", "T-Back Closure", "Luxe Gift Box Included"],
        sizes: ["One Size"],
        colors: ["Silver", "Gunmetal"],
        new: false,
        featured: false,
        discount: 0
    },
    {
        id: 6,
        name: "Artisan Leather Weekender",
        brand: "Aura Luxe",
        category: "leather",
        price: 85000,
        originalPrice: 95000,
        rating: 5.0,
        reviews: 28,
        image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=2070&auto=format&fit=crop",
        description: "The ultimate travel companion. Handcrafted using traditional techniques and the finest bridle leather.",
        features: ["Bridle Leather", "Spacious Interior", "Detachable Shoulder Strap", "Reinforced Base"],
        sizes: ["45L"],
        colors: ["Heritage Brown", "Classic Black"],
        new: true,
        featured: false,
        discount: 10
    }
];

// State Management
let cart = JSON.parse(localStorage.getItem('maven_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('maven_wishlist')) || [];
let activeFilters = {
    category: [],
    size: [],
    price: 100000,
    rating: [],
    discount: []
};
let currentSort = 'newest';

// Utility Functions
function formatPrice(price) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(price);
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// UI Rendering Functions
function renderProducts(productsToRender, gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    if (productsToRender.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">No models found matching your criteria.</div>';
        return;
    }

    grid.innerHTML = productsToRender.map(product => `
        <div class="product-card fade-in" onclick="location.href='product.html?id=${product.id}'">
            <div class="product-image-container">
                ${product.new ? '<span class="product-badge badge-new">LATEST</span>' : ''}
                ${product.discount > 0 ? `<span class="product-badge badge-sale" style="top: 45px;">-${product.discount}%</span>` : ''}
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="quick-view-overlay" onclick="event.stopPropagation(); openQuickView(${product.id})">VIEW DETAILS</div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">
                    <span>${formatPrice(product.price)}</span>
                    ${product.discount > 0 ? `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Quick View Modal
window.openQuickView = function(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('quickViewModal');
    const body = document.getElementById('quickViewBody');

    body.innerHTML = `
        <div class="product-detail-grid" style="grid-template-columns: 1fr 1fr; gap: 2rem;">
            <div class="main-image-container">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info-side">
                <span class="product-category">${product.category}</span>
                <h2>${product.name}</h2>
                <div class="price-section" style="margin: 1rem 0;">
                    <span class="current-price" style="font-size: 2rem; color: var(--accent-primary);">${formatPrice(product.price)}</span>
                </div>
                <p style="color: var(--text-muted); margin-bottom: 2rem;">${product.description}</p>
                <div class="features-list">
                    ${product.features.map(f => `<li style="list-style: none; margin-bottom: 0.5rem;">• ${f}</li>`).join('')}
                </div>
                <button class="btn btn-primary" style="width: 100%; margin-top: 2rem;" onclick="location.href='product.html?id=${product.id}'">VIEW MASTERPIECE</button>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
};

// Filter and Sort Logic
function filterAndSortProducts() {
    let filtered = products.filter(product => {
        const catMatch = activeFilters.category.length === 0 || activeFilters.category.includes(product.category);
        const sizeMatch = activeFilters.size.length === 0 || product.sizes.some(s => activeFilters.size.includes(s));
        const priceMatch = product.price <= activeFilters.price;
        const ratingMatch = activeFilters.rating.length === 0 || product.rating >= Math.min(...activeFilters.rating);
        const discountMatch = activeFilters.discount.length === 0 || product.discount >= Math.min(...activeFilters.discount);

        return catMatch && sizeMatch && priceMatch && ratingMatch && discountMatch;
    });

    switch(currentSort) {
        case 'price-low': filtered.sort((a, b) => a.price - b.price); break;
        case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
        case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
        case 'discount': filtered.sort((a, b) => b.discount - a.discount); break;
        default: filtered.sort((a, b) => b.id - a.id);
    }

    renderProducts(filtered, 'mainProductGrid');
}

// Cart Management
window.openCartDrawer = function() {
    document.getElementById('cartDrawer').classList.add('active');
    document.getElementById('cartOverlay').classList.add('active');
    updateCartDrawer();
};

window.closeCartDrawer = function() {
    document.getElementById('cartDrawer').classList.remove('active');
    document.getElementById('cartOverlay').classList.remove('active');
};

function updateCartDrawer() {
    const container = document.getElementById('cartDrawerItems');
    const totalEl = document.getElementById('cartDrawerTotal');
    const countEl = document.querySelector('.cart-count');

    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = '<div style="text-align: center; padding: 3rem 0;"><p style="color: var(--text-muted);">Bag is empty</p></div>';
        totalEl.textContent = formatPrice(0);
        countEl.textContent = '0';
        return;
    }

    container.innerHTML = cart.map((item, index) => `
        <div class="cart-item" style="display: flex; gap: 1rem; padding: 1rem 0; border-bottom: 1px solid var(--border-dim);">
            <img src="${item.image}" style="width: 80px; border-radius: 8px;">
            <div style="flex: 1;">
                <h4 style="font-size: 0.9rem;">${item.name}</h4>
                <p style="font-size: 0.8rem; color: var(--text-muted);">${item.size} / ${item.color}</p>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem;">
                    <span>${item.quantity} x ${formatPrice(item.price)}</span>
                    <button onclick="removeFromCart(${index})" style="background: none; border: none; color: var(--error); cursor: pointer;">Remove</button>
                </div>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalEl.textContent = formatPrice(total);
    countEl.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    localStorage.setItem('maven_cart', JSON.stringify(cart));
}

window.removeFromCart = function(index) {
    cart.splice(index, 1);
    updateCartDrawer();
    showToast("Item removed from bag");
};

// Event Listeners Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initial Render
    renderProducts(products.filter(p => p.featured), 'featuredGrid');
    renderProducts(products, 'mainProductGrid');
    updateCartDrawer();

    // Sticky Header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            mobileBtn.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
    }

    // Modal Close
    const closeBtn = document.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            document.getElementById('quickViewModal').style.display = 'none';
        });
    }

    // Filters Listeners
    const categoryFilters = document.querySelectorAll('#categoryFilters input');
    categoryFilters.forEach(input => {
        input.addEventListener('change', () => {
            if (input.checked) activeFilters.category.push(input.value);
            else activeFilters.category = activeFilters.category.filter(c => c !== input.value);
            filterAndSortProducts();
        });
    });

    const priceRange = document.getElementById('priceRange');
    const priceLabel = document.getElementById('priceLabel');
    if (priceRange) {
        priceRange.addEventListener('input', (e) => {
            activeFilters.price = parseInt(e.target.value);
            priceLabel.textContent = `₹0 - ${formatPrice(activeFilters.price)}`;
            filterAndSortProducts();
        });
    }

    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            filterAndSortProducts();
        });
    }

    // Search Functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        // Handle search on index page or redirect from other pages
        const handleSearch = (query) => {
            const filtered = products.filter(p =>
                p.name.toLowerCase().includes(query) ||
                p.category.toLowerCase().includes(query)
            );

            const grid = document.getElementById('mainProductGrid');
            if (grid) {
                renderProducts(filtered, 'mainProductGrid');
                // Scroll to shop section if searching
                if (query) grid.scrollIntoView({ behavior: 'smooth' });
            } else {
                // If not on index page, redirect with search param
                window.location.href = `index.html?search=${encodeURIComponent(query)}#shop`;
            }
        };

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch(e.target.value.toLowerCase());
            }
        });

        // Check for search param on load (for index page)
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('search');
        if (searchQuery && document.getElementById('mainProductGrid')) {
            searchInput.value = searchQuery;
            handleSearch(searchQuery.toLowerCase());
        }
    }
});

// Product Detail Page Logic
if (window.location.pathname.includes('product.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);

    if (product) {
        document.title = `${product.name} | AURA LUXE`;

        const renderDetail = () => {
            const container = document.querySelector('.product-detail-grid');
            if (!container) return;

            const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));

            container.innerHTML = `
                <div class="product-images-side">
                    <div class="main-image-container glass">
                        <img src="${product.image}" id="mainProductImg">
                    </div>
                </div>
                <div class="product-info-side">
                    <span class="product-category">${product.category}</span>
                    <h1 class="product-title">${product.name}</h1>
                    <div class="price-section">
                        <span class="current-price">${formatPrice(product.price)}</span>
                        ${product.discount > 0 ? `<span class="discount-badge">-${product.discount}% INTRO OFFER</span>` : ''}
                    </div>
                    <div class="rating-section">
                        <span class="stars">${stars}</span>
                        <span class="review-count">(${product.reviews} Verified Reviews)</span>
                    </div>
                    <p class="product-description">${product.description}</p>

                    <div class="purchase-options">
                        <div class="option-group">
                            <label>SELECT SIZE / VARIANT</label>
                            <div class="size-selector">
                                ${product.sizes.map(s => `<button class="size-btn ${s === product.sizes[0] ? 'active' : ''}" onclick="selectSize(this)">${s}</button>`).join('')}
                            </div>
                        </div>
                        <div class="option-group">
                            <label>AVAILABLE FINISHES</label>
                            <div class="color-selector">
                                ${product.colors.map(c => `<button class="btn btn-outline region-btn ${c === product.colors[0] ? 'active' : ''}" onclick="selectColor(this)" style="padding: 0.5rem 1rem; font-size: 0.8rem;">${c}</button>`).join('')}
                            </div>
                        </div>
                        <div class="action-buttons">
                            <button class="btn btn-primary add-to-cart-large" onclick="addToCart()">ADD TO BAG</button>
                        </div>
                    </div>

                    <div class="additional-info" style="margin-top: 3rem;">
                        <div class="info-tabs">
                            <button class="tab-btn active" onclick="switchTab(this, 'specs')">SPECIFICATIONS</button>
                            <button class="tab-btn" onclick="switchTab(this, 'sla')">CRAFTSMANSHIP</button>
                        </div>
                        <div id="specs" class="tab-content active">
                            <table class="specs-table">
                                ${product.features.map(f => `<tr><td>Feature</td><td>${f}</td></tr>`).join('')}
                                <tr><td>Warranty</td><td>Lifetime</td></tr>
                                <tr><td>Authenticity</td><td>Certified</td></tr>
                            </table>
                        </div>
                        <div id="sla" class="tab-content">
                            <p style="color: var(--text-muted);">Aura Luxe pieces are handcrafted by master artisans using only the finest materials. Each item undergoes rigorous quality control to ensure it meets our heritage standards.</p>
                        </div>
                    </div>
                </div>
            `;

            // Inject Related Products
            const related = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);
            if (related.length === 0) {
                // Fallback to any other products if no same-category ones
                const fallback = products.filter(p => p.id !== product.id).slice(0, 4);
                renderProducts(fallback, 'relatedProductsGrid');
            } else {
                renderProducts(related, 'relatedProductsGrid');
            }
        };
        document.addEventListener('DOMContentLoaded', renderDetail);
    }
}

window.selectSize = function(btn) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
};

window.selectColor = function(btn) {
    document.querySelectorAll('.region-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
};

window.switchTab = function(btn, tabId) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(tabId).classList.add('active');
};

window.addToCart = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);

    const size = document.querySelector('.size-btn.active').textContent;
    const color = document.querySelector('.region-btn.active').textContent;

    const cartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: size,
        color: color,
        quantity: 1
    };

    cart.push(cartItem);
    updateCartDrawer();
    openCartDrawer();
    showToast("Added to bag successfully");
};
