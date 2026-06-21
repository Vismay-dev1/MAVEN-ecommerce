const products = [
  {
    id: 1,
    name: "Premium Leather Jacket",
    category: "jackets",
    brand: "MAVEN",
    price: 8499,
    originalPrice: 12999,
    discount: 35,
    rating: 4.8,
    reviews: 342,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=500&h=625&fit=crop",
    images: ["https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=500&h=625&fit=crop"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    badge: "new",
    isNew: true,
    isSale: false,
    stock: 5,
    inStock: true,
    quantity_available: 5,
    description: "Premium quality leather jacket perfect for any occasion. Masterfully crafted for durability and style.",
    material: "100% Genuine Leather",
    features: ["Premium quality leather", "Modern tailored fit", "Inner pocket storage", "Durable lining"],
    careInstructions: "Professional leather clean only",
    subcategory: "Outerwear"
  },
  {
    id: 2,
    name: "Bomber Jacket",
    category: "jackets",
    brand: "MAVEN",
    price: 5999,
    originalPrice: 8999,
    discount: 33,
    rating: 4.6,
    reviews: 218,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=500&h=625&fit=crop",
    images: ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=500&h=625&fit=crop"],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Olive", "Black"],
    badge: "sale",
    isNew: false,
    isSale: true,
    stock: 12,
    inStock: true,
    quantity_available: 12,
    description: "Classic bomber jacket with modern styling. Lightweight yet warm, perfect for transitional seasons.",
    material: "100% Nylon Shell",
    features: ["Water-resistant finish", "Ribbed collar and cuffs", "Arm utility pocket", "Soft inner lining"],
    careInstructions: "Machine wash cold",
    subcategory: "Casual"
  },
  {
    id: 3,
    name: "Wool Peacoat",
    category: "jackets",
    brand: "MAVEN",
    price: 7999,
    originalPrice: 11999,
    discount: 33,
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1539533057440-7bf6248b1cb5?q=80&w=500&h=625&fit=crop",
    images: ["https://images.unsplash.com/photo-1539533057440-7bf6248b1cb5?q=80&w=500&h=625&fit=crop"],
    sizes: ["M", "L", "XL"],
    colors: ["Navy", "Charcoal"],
    badge: null,
    isNew: false,
    isSale: false,
    stock: 8,
    inStock: true,
    quantity_available: 8,
    description: "Luxurious wool peacoat for formal occasions. Offers exceptional warmth and a sharp silhouette.",
    material: "80% Wool, 20% Polyamide",
    features: ["Heavyweight wool blend", "Double-breasted design", "Notch lapels", "Silk-feel lining"],
    careInstructions: "Dry clean only",
    subcategory: "Formal"
  },
  {
    id: 4,
    name: "Denim Jacket",
    category: "jackets",
    brand: "MAVEN",
    price: 4499,
    originalPrice: 6999,
    discount: 35,
    rating: 4.7,
    reviews: 289,
    image: "https://images.unsplash.com/photo-1576905341935-420227287957?q=80&w=500&h=625&fit=crop",
    images: ["https://images.unsplash.com/photo-1576905341935-420227287957?q=80&w=500&h=625&fit=crop"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Indigo"],
    badge: null,
    isNew: false,
    isSale: false,
    stock: 15,
    inStock: true,
    quantity_available: 15,
    description: "Timeless denim jacket for everyday wear. Crafted from premium selvedge denim that ages beautifully.",
    material: "100% Cotton Denim",
    features: ["Selvedge denim", "Metal shank buttons", "Reinforced stitching", "Classic trucker fit"],
    careInstructions: "Wash sparingly, hang to dry",
    subcategory: "Casual"
  },
  {
    id: 5,
    name: "White Linen Shirt",
    category: "shirts",
    brand: "MAVEN",
    price: 2999,
    originalPrice: 4499,
    discount: 33,
    rating: 4.5,
    reviews: 412,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c7176c8?q=80&w=500&h=625&fit=crop",
    images: ["https://images.unsplash.com/photo-1598033129183-c4f50c7176c8?q=80&w=500&h=625&fit=crop"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White"],
    badge: "new",
    isNew: true,
    isSale: false,
    stock: 20,
    inStock: true,
    quantity_available: 20,
    description: "Breathable linen shirt perfect for summer. Stay cool and sophisticated in any heat.",
    material: "100% Pure Linen",
    features: ["Breathable fabric", "Relaxed fit", "Spread collar", "Moisture-wicking"],
    careInstructions: "Hand wash cold recommended",
    subcategory: "Summer Wear"
  },
  {
    id: 6,
    name: "Black Oxford Shirt",
    category: "shirts",
    brand: "MAVEN",
    price: 3499,
    originalPrice: 5499,
    discount: 36,
    rating: 4.8,
    reviews: 367,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=500&h=625&fit=crop",
    images: ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=500&h=625&fit=crop"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    badge: null,
    isNew: false,
    isSale: false,
    stock: 18,
    inStock: true,
    quantity_available: 18,
    description: "Classic oxford shirt for professional looks. A versatile staple for the modern wardrobe.",
    material: "100% Premium Cotton",
    features: ["Button-down collar", "Tailored fit", "Durable oxford weave", "Chest pocket"],
    careInstructions: "Machine wash warm",
    subcategory: "Professional"
  },
  {
    id: 7,
    name: "Blue Denim Shirt",
    category: "shirts",
    brand: "MAVEN",
    price: 2499,
    originalPrice: 3999,
    discount: 37,
    rating: 4.6,
    reviews: 290,
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=500&h=625&fit=crop",
    images: ["https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=500&h=625&fit=crop"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Light Blue"],
    badge: "sale",
    isNew: false,
    isSale: true,
    stock: 22,
    inStock: true,
    quantity_available: 22,
    description: "Versatile denim shirt for casual styling. Perfect for layering or wearing on its own.",
    material: "100% Lightweight Denim",
    features: ["Soft-wash finish", "Snap buttons", "Western yoke details", "Double chest pockets"],
    careInstructions: "Wash with like colors",
    subcategory: "Casual"
  },
  {
    id: 8,
    name: "Maroon Check Shirt",
    category: "shirts",
    brand: "MAVEN",
    price: 2799,
    originalPrice: 4499,
    discount: 37,
    rating: 4.7,
    reviews: 198,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=500&h=625&fit=crop",
    images: ["https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=500&h=625&fit=crop"],
    sizes: ["M", "L", "XL"],
    colors: ["Maroon"],
    badge: null,
    isNew: false,
    isSale: false,
    stock: 14,
    inStock: true,
    quantity_available: 14,
    description: "Stylish check pattern shirt for casual outings. Adds a pop of color to your daily rotation.",
    material: "100% Brushed Cotton",
    features: ["Soft flannel feel", "Classic check pattern", "Regular fit", "Adjustable cuffs"],
    careInstructions: "Machine wash cold",
    subcategory: "Casual"
  },
  {
    id: 9,
    name: "Slim Fit Black Pants",
    category: "pants",
    brand: "MAVEN",
    price: 3999,
    originalPrice: 6499,
    discount: 38,
    rating: 4.9,
    reviews: 451,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=500&h=625&fit=crop",
    images: ["https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=500&h=625&fit=crop"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    badge: "new",
    isNew: true,
    isSale: false,
    stock: 16,
    inStock: true,
    quantity_available: 16,
    description: "Perfectly tailored slim fit pants for any occasion. Sleek, modern, and comfortable.",
    material: "98% Cotton, 2% Elastane",
    features: ["Stretch-cotton blend", "Tapered leg", "Clean minimalist design", "Secure zip fly"],
    careInstructions: "Machine wash cold",
    subcategory: "Formal/Casual"
  },
  {
    id: 10,
    name: "Chinos Beige",
    category: "pants",
    brand: "MAVEN",
    price: 3499,
    originalPrice: 5499,
    discount: 36,
    rating: 4.6,
    reviews: 267,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=500&h=625&fit=crop",
    images: ["https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=500&h=625&fit=crop"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige"],
    badge: null,
    isNew: false,
    isSale: false,
    stock: 19,
    inStock: true,
    quantity_available: 19,
    description: "Comfortable chinos for casual and smart casual wear. A versatile bottom for any top.",
    material: "100% Cotton Twill",
    features: ["Durable twill weave", "Straight fit", "Breathable material", "Four-pocket styling"],
    careInstructions: "Machine wash warm",
    subcategory: "Smart Casual"
  },
  {
    id: 11,
    name: "Navy Formal Pants",
    category: "pants",
    brand: "MAVEN",
    price: 4299,
    originalPrice: 6999,
    discount: 38,
    rating: 4.8,
    reviews: 334,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=500&h=625&fit=crop",
    images: ["https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=500&h=625&fit=crop"],
    sizes: ["M", "L", "XL"],
    colors: ["Navy"],
    badge: "sale",
    isNew: false,
    isSale: true,
    stock: 10,
    inStock: true,
    quantity_available: 10,
    description: "Premium formal pants for business and formal events. Sharp creases and a perfect drape.",
    material: "70% Polyester, 30% Viscose",
    features: ["Wrinkle-resistant", "Sharp front crease", "Tailored fit", "Premium finish"],
    careInstructions: "Dry clean recommended",
    subcategory: "Formal"
  },
  {
    id: 12,
    name: "Olive Cargo Pants",
    category: "pants",
    brand: "MAVEN",
    price: 3199,
    originalPrice: 5499,
    discount: 41,
    rating: 4.5,
    reviews: 201,
    image: "https://images.unsplash.com/photo-1517423738875-5ce310acd3da?q=80&w=500&h=625&fit=crop",
    images: ["https://images.unsplash.com/photo-1517423738875-5ce310acd3da?q=80&w=500&h=625&fit=crop"],
    sizes: ["S", "M", "L"],
    colors: ["Olive"],
    badge: null,
    isNew: false,
    isSale: false,
    stock: 13,
    inStock: true,
    quantity_available: 13,
    description: "Functional cargo pants with style and comfort. Multiple pockets for your essentials.",
    material: "100% Cotton Ripstop",
    features: ["Rugged ripstop fabric", "6-pocket design", "Reinforced knees", "Adjustable hem"],
    careInstructions: "Machine wash cold",
    subcategory: "Casual"
  },
  {
    id: 13,
    name: "Black Shorts",
    category: "shorts",
    brand: "MAVEN",
    price: 1999,
    originalPrice: 3499,
    discount: 42,
    rating: 4.4,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=500&h=625&fit=crop",
    images: ["https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=500&h=625&fit=crop"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    badge: "new",
    isNew: true,
    isSale: false,
    stock: 25,
    inStock: true,
    quantity_available: 25,
    description: "Classic black shorts for summer and casual wear. Lightweight and versatile.",
    material: "100% Cotton",
    features: ["Soft cotton fabric", "Above-knee length", "Elasticated waistband", "Side pockets"],
    careInstructions: "Machine wash cold",
    subcategory: "Summer Wear"
  },
  {
    id: 14,
    name: "Khaki Shorts",
    category: "shorts",
    brand: "MAVEN",
    price: 1799,
    originalPrice: 3299,
    discount: 45,
    rating: 4.6,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=500&h=625&fit=crop",
    images: ["https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=500&h=625&fit=crop"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Khaki"],
    badge: "sale",
    isNew: false,
    isSale: true,
    stock: 28,
    inStock: true,
    quantity_available: 28,
    description: "Versatile khaki shorts for any season. Durable and stylish.",
    material: "100% Cotton Twill",
    features: ["Durable twill weave", "Classic fit", "Secure button closure", "Deep pockets"],
    careInstructions: "Machine wash cold",
    subcategory: "Casual"
  },
  {
    id: 15,
    name: "Leather Belt",
    category: "accessories",
    brand: "MAVEN",
    price: 999,
    originalPrice: 1999,
    discount: 50,
    rating: 4.7,
    reviews: 523,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=500&h=625&fit=crop",
    images: ["https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=500&h=625&fit=crop"],
    sizes: ["One Size"],
    colors: ["Brown"],
    badge: null,
    isNew: false,
    isSale: false,
    stock: 40,
    inStock: true,
    quantity_available: 40,
    description: "Premium leather belt to complement any outfit. Solid brass buckle and hand-stitched details.",
    material: "100% Genuine Leather",
    features: ["Full-grain leather", "Brass buckle", "Hand-finished edges", "1.5 inch width"],
    careInstructions: "Wipe with clean cloth",
    subcategory: "Leather Goods"
  },
  {
    id: 16,
    name: "Sunglasses UV",
    category: "accessories",
    brand: "MAVEN",
    price: 2499,
    originalPrice: 4999,
    discount: 50,
    rating: 4.8,
    reviews: 389,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=500&h=625&fit=crop",
    images: ["https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=500&h=625&fit=crop"],
    sizes: ["One Size"],
    colors: ["Black"],
    badge: "new",
    isNew: true,
    isSale: false,
    stock: 35,
    inStock: true,
    quantity_available: 35,
    description: "UV protected sunglasses with stylish design. Durable frame and polarized lenses.",
    material: "Acetate Frame",
    features: ["100% UV Protection", "Polarized lenses", "Durable hinges", "Lightweight design"],
    careInstructions: "Clean with microfiber cloth",
    subcategory: "Eyewear"
  },
  {
    id: 17,
    name: "Canvas Watch",
    category: "accessories",
    brand: "MAVEN",
    price: 3999,
    originalPrice: 7999,
    discount: 50,
    rating: 4.9,
    reviews: 612,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=500&h=625&fit=crop",
    images: ["https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=500&h=625&fit=crop"],
    sizes: ["One Size"],
    colors: ["Silver"],
    badge: "sale",
    isNew: false,
    isSale: true,
    stock: 22,
    inStock: true,
    quantity_available: 22,
    description: "Elegant canvas watch for a timeless look. Japanese quartz movement and water-resistant.",
    material: "Stainless Steel Case, Canvas Strap",
    features: ["Japanese Quartz Movement", "Scratch-resistant glass", "Water resistant", "Durable canvas strap"],
    careInstructions: "Avoid water immersion",
    subcategory: "Timepieces"
  },
  {
    id: 18,
    name: "Wool Beanie",
    category: "accessories",
    brand: "MAVEN",
    price: 699,
    originalPrice: 1499,
    discount: 53,
    rating: 4.5,
    reviews: 267,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=500&h=625&fit=crop",
    images: ["https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=500&h=625&fit=crop"],
    sizes: ["One Size"],
    colors: ["Gray"],
    badge: null,
    isNew: false,
    isSale: false,
    stock: 50,
    inStock: true,
    quantity_available: 50,
    description: "Cozy wool beanie for cold weather. Soft knit and comfortable fit.",
    material: "50% Wool, 50% Acrylic",
    features: ["Soft wool blend", "Stretch fit", "Cuffed design", "Insulating property"],
    careInstructions: "Hand wash only",
    subcategory: "Winter Wear"
  }
];

// Currency Helper
function formatPrice(price) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(price);
}

// Debounce helper
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle helper
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Helper to render stars
function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    return '★'.repeat(fullStars) + (halfStar ? '½' : '') + '☆'.repeat(emptyStars);
}

// Global filter state
let currentFilters = {
    category: [],
    size: [],
    price: 50000,
    rating: [],
    discount: [],
    sort: 'newest'
};

function renderProducts(productsToRender) {
    const grid = document.getElementById('mainProductGrid');
    if (!grid) return;

    grid.innerHTML = '';
    productsToRender.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card fade-in';
        card.innerHTML = `
            <div class="product-image-container">
                <a href="product.html?id=${product.id}">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </a>
                ${product.isNew ? '<div class="product-badge badge-new">NEW</div>' : ''}
                ${product.isSale && !product.isNew ? '<div class="product-badge badge-sale">SALE</div>' : ''}
                <div class="quick-view-overlay" onclick="openQuickView(${product.id})">QUICK VIEW</div>
            </div>
            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h4 class="product-name">${product.name}</h4>
                <div class="product-price">
                    <span class="price">${formatPrice(product.price)}</span>
                    ${product.originalPrice > product.price ? `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : ''}
                </div>
                <div class="product-rating" style="font-size: 12px; color: var(--accent-orange); margin-top: 5px;">
                    ${renderStars(product.rating)} <span style="color: var(--text-lighter);">(${product.reviews})</span>
                </div>
                <button class="btn btn-primary add-to-cart-btn" style="width: 100%; margin-top: 15px; padding: 10px; font-size: 12px;" onclick="addToCart(${product.id})">ADD TO CART</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function applyFilters() {
    let filtered = products.filter(p => {
        const catMatch = currentFilters.category.length === 0 || currentFilters.category.includes(p.category);
        const sizeMatch = currentFilters.size.length === 0 || p.sizes.some(s => currentFilters.size.includes(s));
        const priceMatch = p.price <= currentFilters.price;
        const ratingMatch = currentFilters.rating.length === 0 || currentFilters.rating.some(r => p.rating >= parseInt(r));
        const discountMatch = currentFilters.discount.length === 0 || currentFilters.discount.some(d => p.discount >= parseInt(d));
        return catMatch && sizeMatch && priceMatch && ratingMatch && discountMatch;
    });

    // Apply sorting
    if (currentFilters.sort === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentFilters.sort === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (currentFilters.sort === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (currentFilters.sort === 'discount') {
        filtered.sort((a, b) => b.discount - a.discount);
    } else {
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    renderProducts(filtered);
}

function addToCart(productId, size = null, color = null) {
    const product = products.find(p => p.id === productId);
    let cart = JSON.parse(localStorage.getItem('maven_cart')) || [];

    // If not specified, try to get from UI (for product page)
    if (!size) {
        const activeSize = document.querySelector('.size-btn.active');
        size = activeSize ? activeSize.getAttribute('data-size') : (product.sizes[0] || 'OS');
    }
    if (!color) {
        const activeColor = document.querySelector('.color-btn.active');
        color = activeColor ? activeColor.getAttribute('data-color') : (product.colors[0] || 'Default');
    }

    const qtyInput = document.getElementById('quantity');
    const quantity = qtyInput ? parseInt(qtyInput.value) : 1;

    const existing = cart.find(item => item.id === productId && item.selectedSize === size && item.selectedColor === color);

    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity,
            selectedSize: size,
            selectedColor: color
        });
    }

    localStorage.setItem('maven_cart', JSON.stringify(cart));
    updateCartCount();
    renderCartDrawer();
    openCartDrawer();
    showToast(`Added ${product.name} to cart!`);
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('maven_cart')) || [];
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);
}

// Cart Drawer Logic
function openCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    if (drawer && overlay) {
        drawer.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    if (drawer && overlay) {
        drawer.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function renderCartDrawer() {
    const container = document.getElementById('cartDrawerItems');
    const totalEl = document.getElementById('cartDrawerTotal');
    const cart = JSON.parse(localStorage.getItem('maven_cart')) || [];

    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align: center; margin-top: 50px; color: var(--text-lighter);">Your cart is empty.</p>';
        if (totalEl) totalEl.textContent = formatPrice(0);
        return;
    }

    container.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-drawer-item';
        itemEl.style.display = 'flex';
        itemEl.style.gap = '15px';
        itemEl.style.marginBottom = '20px';
        itemEl.style.paddingBottom = '20px';
        itemEl.style.borderBottom = '1px solid var(--border-color)';

        itemEl.innerHTML = `
            <div style="width: 80px; height: 100px; overflow: hidden; background: var(--bg-light);">
                <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div style="flex: 1;">
                <h4 style="font-size: 14px; margin-bottom: 5px;">${item.name}</h4>
                <p style="font-size: 11px; color: var(--text-lighter); margin-bottom: 5px;">${item.selectedSize} / ${item.selectedColor}</p>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div class="quantity-selector" style="height: 30px;">
                        <button class="qty-btn" onclick="updateCartDrawerQty(${index}, -1)" style="width: 25px; height: 25px;">−</button>
                        <input type="number" value="${item.quantity}" readonly style="width: 25px; font-size: 12px;">
                        <button class="qty-btn" onclick="updateCartDrawerQty(${index}, 1)" style="width: 25px; height: 25px;">+</button>
                    </div>
                    <span style="font-weight: 700; font-size: 14px;">${formatPrice(item.price * item.quantity)}</span>
                </div>
                <button onclick="removeFromCartDrawer(${index})" style="background: none; border: none; color: var(--error); font-size: 10px; font-weight: 700; cursor: pointer; text-decoration: underline; margin-top: 5px;">REMOVE</button>
            </div>
        `;
        container.appendChild(itemEl);
    });

    if (totalEl) totalEl.textContent = formatPrice(total);
}

function updateCartDrawerQty(index, delta) {
    let cart = JSON.parse(localStorage.getItem('maven_cart')) || [];
    cart[index].quantity += delta;
    if (cart[index].quantity < 1) cart[index].quantity = 1;
    localStorage.setItem('maven_cart', JSON.stringify(cart));
    renderCartDrawer();
    updateCartCount();
    if (typeof renderCart === 'function') renderCart(); // Update main cart page if present
}

function removeFromCartDrawer(index) {
    let cart = JSON.parse(localStorage.getItem('maven_cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('maven_cart', JSON.stringify(cart));
    renderCartDrawer();
    updateCartCount();
    if (typeof renderCart === 'function') renderCart();
}

function toggleWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('maven_wishlist')) || [];
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast("Removed from wishlist");
    } else {
        wishlist.push(productId);
        showToast("Added to wishlist");
    }
    localStorage.setItem('maven_wishlist', JSON.stringify(wishlist));
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast fade-in';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('quickViewModal');
    const body = document.getElementById('quickViewBody');
    if (!modal || !product) return;

    body.innerHTML = `
        <div class="product-detail-grid" style="grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 0;">
            <div class="main-image-container">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info-panel">
                <p class="product-brand">MAVEN CORE</p>
                <h2 style="font-size: 24px; margin-bottom: 10px;">${product.name}</h2>
                <div class="product-price" style="margin-bottom: 20px;">${formatPrice(product.price)}</div>
                <p class="product-description" style="font-size: 14px; margin-bottom: 20px;">${product.description.substring(0, 150)}...</p>
                <a href="product.html?id=${product.id}" class="btn btn-outline" style="width: 100%; margin-bottom: 10px;">VIEW FULL DETAILS</a>
                <button class="btn btn-primary" style="width: 100%;" onclick="addToCart(${product.id})">ADD TO CART</button>
            </div>
        </div>
    `;
    modal.style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', () => {
    // Initial Render
    renderProducts(products);
    updateCartCount();
    renderCartDrawer();

    // Scroll handling for sticky header
    window.addEventListener('scroll', throttle(() => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            if (!document.title.includes('Product Detail') && !document.title.includes('Shopping Cart') && !document.title.includes('Checkout') && !document.title.includes('My Account')) {
                header.classList.remove('scrolled');
            }
        }
    }, 100));

    // Search Functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce((e) => {
            const query = e.target.value.toLowerCase();
            const shopSection = document.getElementById('shop');
            if (query.length > 2) {
                const results = products.filter(p =>
                    p.name.toLowerCase().includes(query) ||
                    p.category.toLowerCase().includes(query)
                );
                renderProducts(results);
                if (shopSection && window.scrollY < shopSection.offsetTop - 200) {
                    window.scrollTo({ top: shopSection.offsetTop - 100, behavior: 'smooth' });
                }
            } else if (query.length === 0) {
                renderProducts(products);
            }
        }, 300));
    }

    // Filters and Sorting
    const catFilters = document.querySelectorAll('#categoryFilters input');
    catFilters.forEach(input => {
        input.addEventListener('change', () => {
            if (input.checked) currentFilters.category.push(input.value);
            else currentFilters.category = currentFilters.category.filter(c => c !== input.value);
            applyFilters();
        });
    });

    const sizeFilters = document.querySelectorAll('#sizeFilters input');
    sizeFilters.forEach(input => {
        input.addEventListener('change', () => {
            if (input.checked) currentFilters.size.push(input.value);
            else currentFilters.size = currentFilters.size.filter(s => s !== input.value);
            applyFilters();
        });
    });

    const ratingFilters = document.querySelectorAll('#ratingFilters input');
    ratingFilters.forEach(input => {
        input.addEventListener('change', () => {
            if (input.checked) currentFilters.rating.push(input.value);
            else currentFilters.rating = currentFilters.rating.filter(r => r !== input.value);
            applyFilters();
        });
    });

    const discountFilters = document.querySelectorAll('#discountFilters input');
    discountFilters.forEach(input => {
        input.addEventListener('change', () => {
            if (input.checked) currentFilters.discount.push(input.value);
            else currentFilters.discount = currentFilters.discount.filter(d => d !== input.value);
            applyFilters();
        });
    });

    const priceRange = document.getElementById('priceRange');
    const priceLabel = document.getElementById('priceLabel');
    if (priceRange) {
        priceRange.addEventListener('input', (e) => {
            currentFilters.price = e.target.value;
            priceLabel.textContent = `₹0 - ₹${parseInt(e.target.value).toLocaleString('en-IN')}`;
            applyFilters();
        });
    }

    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentFilters.sort = e.target.value;
            applyFilters();
        });
    }

    // Modal Close
    const modal = document.getElementById('quickViewModal');
    const closeModal = document.querySelector('.close-modal');
    if (modal && closeModal) {
        closeModal.addEventListener('click', () => modal.style.display = 'none');
        window.addEventListener('click', (e) => {
            if (e.target === modal) modal.style.display = 'none';
        });
    }

    // Featured Drops
    const featuredGrid = document.querySelector('.featured-grid');
    if (featuredGrid) {
        const featured = products.filter(p => p.isNew).slice(0, 3);
        featuredGrid.innerHTML = '';
        featured.forEach(product => {
            const item = document.createElement('div');
            item.className = 'product-card';
            item.innerHTML = `
                <div class="product-image-container">
                    <a href="product.html?id=${product.id}">
                        <img src="${product.image}" alt="${product.name}">
                    </a>
                </div>
                <div class="product-info">
                    <h4 class="product-name">${product.name}</h4>
                    <p class="product-price">${formatPrice(product.price)}</p>
                </div>
            `;
            featuredGrid.appendChild(item);
        });
    }

    // Testimonials Render
    const testimonialGrid = document.getElementById('testimonialGrid');
    if (testimonialGrid) {
        const testimonials = [
            { name: "DAVID CHEN", role: "Architect", text: "MAVEN has completely redefined my wardrobe. The quality is unmatched.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" },
            { name: "MARCUS REED", role: "Creative Director", text: "I appreciate the minimalist approach. Pure quality and great silhouettes.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop" },
            { name: "ALEX RIVERA", role: "Software Engineer", text: "Fast shipping and incredible packaging. A brand that truly cares.", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop" }
        ];

        testimonials.forEach(t => {
            const card = document.createElement('div');
            card.className = 'testimonial-card';
            card.innerHTML = `
                <div class="testimonial-image">
                    <img src="${t.image}" alt="${t.name}">
                </div>
                <p class="testimonial-text">"${t.text}"</p>
                <p class="testimonial-author">${t.name}</p>
                <p class="testimonial-role">${t.role}</p>
            `;
            testimonialGrid.appendChild(card);
        });
    }


    // Mobile menu toggle
    const menuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    if (menuBtn && mainNav) {
        const toggleMenu = () => {
            const isActive = menuBtn.classList.toggle('active');
            mainNav.classList.toggle('active');
            menuBtn.setAttribute('aria-expanded', isActive);
        };
        menuBtn.addEventListener('click', toggleMenu);
        menuBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMenu();
            }
        });
    }

    // Product Gallery switching
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            mainImage.src = thumb.src;
            thumbnails.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
    });

    // Size selection
    const sizeBtns = document.querySelectorAll('.size-btn');
    sizeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sizeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Color selection
    const colorBtns = document.querySelectorAll('.color-btn');
    const selectedColorText = document.getElementById('selectedColor');
    colorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            colorBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            if (selectedColorText) {
                selectedColorText.textContent = btn.getAttribute('data-color');
            }
        });
    });

    // Quantity selector
    const qtyInput = document.getElementById('quantity');
    const minusBtn = document.querySelector('.qty-btn.minus');
    const plusBtn = document.querySelector('.qty-btn.plus');
    if (qtyInput) {
        minusBtn.addEventListener('click', () => {
            if (qtyInput.value > 1) qtyInput.value--;
        });
        plusBtn.addEventListener('click', () => {
            if (qtyInput.value < 10) qtyInput.value++;
        });
    }

    // Info Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
