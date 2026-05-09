const products = [
  {
    id: 1,
    name: "Premium Wool Jacket",
    category: "Jackets",
    subcategory: "Blazers",
    price: 189.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1550246140-5119ae4790b8?q=80&w=2070&auto=format&fit=crop",
    images: [
        "https://images.unsplash.com/photo-1550246140-5119ae4790b8?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "Masterfully crafted from premium wool blend, this jacket combines timeless elegance with contemporary design. Featuring a modern tailored fit, it provides both warmth and sophisticated style for any occasion.",
    material: "80% Wool, 20% Polyester",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Charcoal", "Brown", "Navy"],
    rating: 4.8,
    reviews: 127,
    inStock: true,
    quantity: 45,
    isNew: true,
    isSale: true,
    season: ["Fall", "Winter"],
    features: ["Premium wool blend fabric", "Modern tailored fit", "Inner pocket storage", "Durable lining"],
    careInstructions: "Machine wash cold, lay flat to dry"
  },
  {
    id: 2,
    name: "Oxford Cotton Shirt",
    category: "Shirts",
    subcategory: "Casual",
    price: 79.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1976&auto=format&fit=crop",
    images: [
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1976&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=1974&auto=format&fit=crop"
    ],
    description: "A versatile staple for any wardrobe, our Oxford Cotton Shirt is made from breathable, high-quality cotton. Its classic design makes it perfect for both professional settings and relaxed weekends.",
    material: "100% Cotton",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Light Blue", "Pink"],
    rating: 4.5,
    reviews: 84,
    inStock: true,
    quantity: 120,
    isNew: false,
    isSale: false,
    season: ["Spring", "Summer", "Fall"],
    features: ["Breathable cotton", "Button-down collar", "Tailored fit", "Reinforced seams"],
    careInstructions: "Machine wash warm, tumble dry low"
  },
  {
    id: 3,
    name: "Tapered Chinos",
    category: "Pants",
    subcategory: "Casual",
    price: 110.00,
    originalPrice: 110.00,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1974&auto=format&fit=crop",
    images: [
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1624372333454-353f81c9294f?q=80&w=1974&auto=format&fit=crop"
    ],
    description: "Our Tapered Chinos offer a sharp, modern silhouette without sacrificing comfort. The stretch-cotton twill provides flexibility and durability for everyday wear.",
    material: "98% Cotton, 2% Elastane",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Khaki", "Black", "Navy", "Olive"],
    rating: 4.7,
    reviews: 215,
    inStock: true,
    quantity: 75,
    isNew: false,
    isSale: false,
    season: ["All-Year"],
    features: ["Stretch-cotton twill", "Tapered leg", "Four-pocket styling", "Zip fly"],
    careInstructions: "Machine wash cold, tumble dry low"
  },
  {
    id: 4,
    name: "Minimalist Tee",
    category: "Shirts",
    subcategory: "Basics",
    price: 35.00,
    originalPrice: 45.00,
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=2127&auto=format&fit=crop",
    images: [
        "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=2127&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop"
    ],
    description: "The ultimate everyday essential. Our Minimalist Tee is crafted from ultra-soft Pima cotton for a luxurious feel and a perfect fit that holds its shape wash after wash.",
    material: "100% Pima Cotton",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Gray", "Navy"],
    rating: 4.9,
    reviews: 432,
    inStock: true,
    quantity: 300,
    isNew: false,
    isSale: true,
    season: ["Summer", "Spring"],
    features: ["Ultra-soft Pima cotton", "Classic crew neck", "Tagless design", "Shrink-resistant"],
    careInstructions: "Machine wash cold, tumble dry low"
  },
  {
    id: 5,
    name: "Linen Summer Shorts",
    category: "Shorts",
    subcategory: "Casual",
    price: 65.00,
    originalPrice: 85.00,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=2070&auto=format&fit=crop",
    images: [
        "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "Stay cool and stylish during the warmest months. These linen shorts are lightweight, breathable, and feature a comfortable elasticated waistband.",
    material: "100% Linen",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "White", "Light Blue"],
    rating: 4.3,
    reviews: 56,
    inStock: true,
    quantity: 40,
    isNew: false,
    isSale: true,
    season: ["Summer"],
    features: ["Breathable linen", "Elasticated waistband", "Drawstring closure", "Side and back pockets"],
    careInstructions: "Hand wash cold, air dry"
  },
  {
    id: 6,
    name: "Leather Minimalist Wallet",
    category: "Accessories",
    subcategory: "Small Goods",
    price: 45.00,
    originalPrice: 45.00,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1974&auto=format&fit=crop",
    images: [
        "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1974&auto=format&fit=crop"
    ],
    description: "A sleek, slim wallet for the modern professional. Crafted from vegetable-tanned leather, it will develop a beautiful patina over time.",
    material: "100% Full-Grain Leather",
    sizes: ["One Size"],
    colors: ["Black", "Tan", "Dark Brown"],
    rating: 4.8,
    reviews: 189,
    inStock: true,
    quantity: 150,
    isNew: true,
    isSale: false,
    season: ["All-Year"],
    features: ["Slim profile", "RFID blocking", "6 card slots", "Cash compartment"],
    careInstructions: "Wipe clean with a damp cloth"
  },
  {
    id: 7,
    name: "Cashmere Crewneck Sweater",
    category: "Shirts",
    subcategory: "Knitwear",
    price: 145.00,
    originalPrice: 195.00,
    image: "https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?q=80&w=1932&auto=format&fit=crop",
    images: [
        "https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?q=80&w=1932&auto=format&fit=crop"
    ],
    description: "Pure luxury for everyday wear. Our cashmere sweater is incredibly soft, lightweight, and warm, making it the perfect layering piece.",
    material: "100% Grade-A Cashmere",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Charcoal", "Beige", "Navy"],
    rating: 4.9,
    reviews: 92,
    inStock: true,
    quantity: 25,
    isNew: false,
    isSale: true,
    season: ["Winter", "Fall"],
    features: ["Grade-A cashmere", "Ribbed cuffs and hem", "Classic fit", "Odour resistant"],
    careInstructions: "Hand wash cold, dry flat"
  },
  {
    id: 8,
    name: "Denim Trucker Jacket",
    category: "Jackets",
    subcategory: "Casual",
    price: 95.00,
    originalPrice: 125.00,
    image: "https://images.unsplash.com/photo-1576905341935-132d73315a6b?q=80&w=2070&auto=format&fit=crop",
    images: [
        "https://images.unsplash.com/photo-1576905341935-132d73315a6b?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "A timeless classic that only gets better with age. Our denim jacket features a rugged construction and a tailored fit.",
    material: "100% Raw Denim",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Indigo", "Black Wash"],
    rating: 4.6,
    reviews: 148,
    inStock: true,
    quantity: 60,
    isNew: false,
    isSale: true,
    season: ["Spring", "Fall"],
    features: ["Raw denim", "Metal shank buttons", "Reinforced stitching", "Adjustable waist tabs"],
    careInstructions: "Wash sparingly, hang to dry"
  },
  {
    id: 9,
    name: "Technical Windbreaker",
    category: "Jackets",
    subcategory: "Activewear",
    price: 130.00,
    originalPrice: 130.00,
    image: "https://images.unsplash.com/photo-1604644401890-0bd678c83788?q=80&w=2070&auto=format&fit=crop",
    images: [
        "https://images.unsplash.com/photo-1604644401890-0bd678c83788?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "Designed for the urban explorer. This lightweight windbreaker is water-resistant and windproof, providing protection without the bulk.",
    material: "100% Recycled Nylon",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Sage", "Black", "Navy"],
    rating: 4.4,
    reviews: 73,
    inStock: true,
    quantity: 50,
    isNew: true,
    isSale: false,
    season: ["Spring", "Fall"],
    features: ["Water-resistant finish", "Adjustable hood", "Zipped pockets", "Reflective details"],
    careInstructions: "Machine wash cold, tumble dry low"
  },
  {
    id: 10,
    name: "Relaxed Fit Cargo Pants",
    category: "Pants",
    subcategory: "Casual",
    price: 89.00,
    originalPrice: 110.00,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop",
    images: [
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop"
    ],
    description: "Function meets style. Our cargo pants feature multiple utility pockets and a comfortable relaxed fit for everyday use.",
    material: "100% Cotton Ripstop",
    sizes: ["30", "32", "34", "36"],
    colors: ["Olive", "Black", "Tan"],
    rating: 4.5,
    reviews: 112,
    inStock: true,
    quantity: 85,
    isNew: false,
    isSale: true,
    season: ["Fall", "Winter", "Spring"],
    features: ["Ripstop fabric", "6-pocket design", "Reinforced knees", "Adjustable cuffs"],
    careInstructions: "Machine wash warm, tumble dry low"
  },
  {
    id: 11,
    name: "Classic Polo Shirt",
    category: "Shirts",
    subcategory: "Casual",
    price: 55.00,
    originalPrice: 55.00,
    image: "https://images.unsplash.com/photo-1626497748470-dc9918df585f?q=80&w=2070&auto=format&fit=crop",
    images: [
        "https://images.unsplash.com/photo-1626497748470-dc9918df585f?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "The quintessential smart-casual piece. Our polo shirt is made from a breathable piqué knit for ultimate comfort and style.",
    material: "100% Organic Cotton Piqué",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Navy", "Gray", "Burgundy"],
    rating: 4.6,
    reviews: 156,
    inStock: true,
    quantity: 180,
    isNew: false,
    isSale: false,
    season: ["Summer", "Spring"],
    features: ["Organic cotton", "Breathable piqué knit", "Two-button placket", "Ribbed collar"],
    careInstructions: "Machine wash cold, tumble dry low"
  },
  {
    id: 12,
    name: "Swim Trunks",
    category: "Shorts",
    subcategory: "Beachwear",
    price: 49.00,
    originalPrice: 65.00,
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=1974&auto=format&fit=crop",
    images: [
        "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=1974&auto=format&fit=crop"
    ],
    description: "Ready for the water. Our quick-dry swim trunks feature a mesh lining and a secure drawstring waist.",
    material: "100% Recycled Polyester",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Ocean Blue", "Coral", "Patterned"],
    rating: 4.2,
    reviews: 45,
    inStock: true,
    quantity: 110,
    isNew: false,
    isSale: true,
    season: ["Summer"],
    features: ["Quick-dry fabric", "Mesh lining", "Internal key pocket", "Elasticated waist"],
    careInstructions: "Rinse with fresh water after use"
  },
  {
    id: 13,
    name: "Wool Blend Overcoat",
    category: "Jackets",
    subcategory: "Formal",
    price: 295.00,
    originalPrice: 295.00,
    image: "https://images.unsplash.com/photo-1539533377285-a92cc802279b?q=80&w=1974&auto=format&fit=crop",
    images: [
        "https://images.unsplash.com/photo-1539533377285-a92cc802279b?q=80&w=1974&auto=format&fit=crop"
    ],
    description: "The ultimate winter essential. Our wool blend overcoat offers unparalleled warmth and a sharp, professional look.",
    material: "70% Wool, 30% Polyamide",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Camel", "Charcoal", "Black"],
    rating: 4.9,
    reviews: 67,
    inStock: true,
    quantity: 20,
    isNew: true,
    isSale: false,
    season: ["Winter"],
    features: ["High-warmth wool blend", "Fully lined", "Notch lapel", "Deep side pockets"],
    careInstructions: "Dry clean only"
  },
  {
    id: 14,
    name: "Corduroy Button-Up",
    category: "Shirts",
    subcategory: "Casual",
    price: 85.00,
    originalPrice: 85.00,
    image: "https://images.unsplash.com/photo-1594938384824-022767a50e22?q=80&w=1974&auto=format&fit=crop",
    images: [
        "https://images.unsplash.com/photo-1594938384824-022767a50e22?q=80&w=1974&auto=format&fit=crop"
    ],
    description: "Perfect for layering. Our fine-wale corduroy shirt provides texture and warmth for the cooler seasons.",
    material: "100% Cotton Corduroy",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Rust", "Navy", "Forest Green"],
    rating: 4.7,
    reviews: 58,
    inStock: true,
    quantity: 45,
    isNew: true,
    isSale: false,
    season: ["Fall", "Winter"],
    features: ["Fine-wale corduroy", "Chest pockets", "Button cuffs", "Soft-wash finish"],
    careInstructions: "Machine wash cold, tumble dry low"
  },
  {
    id: 15,
    name: "Performance Joggers",
    category: "Pants",
    subcategory: "Activewear",
    price: 75.00,
    originalPrice: 75.00,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop",
    images: [
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop"
    ],
    description: "Whether you're at the gym or on the couch, our performance joggers offer maximum comfort and flexibility.",
    material: "90% Recycled Polyester, 10% Spandex",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Space Gray"],
    rating: 4.4,
    reviews: 134,
    inStock: true,
    quantity: 120,
    isNew: false,
    isSale: false,
    season: ["All-Year"],
    features: ["Moisture-wicking", "4-way stretch", "Hidden zip pockets", "Tapered fit"],
    careInstructions: "Machine wash cold, tumble dry low"
  },
  {
    id: 16,
    name: "Graphic Print Hoodie",
    category: "Shirts",
    subcategory: "Streetwear",
    price: 65.00,
    originalPrice: 85.00,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1974&auto=format&fit=crop",
    images: [
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1974&auto=format&fit=crop"
    ],
    description: "Make a statement. Our heavyweight graphic hoodie features a minimalist design and a comfortable oversized fit.",
    material: "100% Heavyweight Cotton",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Cream", "Black"],
    rating: 4.6,
    reviews: 89,
    inStock: true,
    quantity: 55,
    isNew: false,
    isSale: true,
    season: ["Spring", "Fall", "Winter"],
    features: ["Heavyweight fleece", "Screen-printed graphic", "Kangaroo pocket", "Drawstring hood"],
    careInstructions: "Machine wash cold inside out, hang to dry"
  },
  {
    id: 17,
    name: "Leather Belt",
    category: "Accessories",
    subcategory: "Belts",
    price: 55.00,
    originalPrice: 55.00,
    image: "https://images.unsplash.com/photo-1624222247344-550fb8ecf7c4?q=80&w=2070&auto=format&fit=crop",
    images: [
        "https://images.unsplash.com/photo-1624222247344-550fb8ecf7c4?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "A timeless accessory for any outfit. Our leather belt is made from premium full-grain leather with a solid brass buckle.",
    material: "100% Full-Grain Leather",
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Black", "Brown", "Tan"],
    rating: 4.8,
    reviews: 142,
    inStock: true,
    quantity: 90,
    isNew: false,
    isSale: false,
    season: ["All-Year"],
    features: ["Full-grain leather", "Brass buckle", "Hand-stitched details", "1.5 inch width"],
    careInstructions: "Condition occasionally with leather balm"
  },
  {
    id: 18,
    name: "Knitted Beanie",
    category: "Accessories",
    subcategory: "Hats",
    price: 25.00,
    originalPrice: 35.00,
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=1974&auto=format&fit=crop",
    images: [
        "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=1974&auto=format&fit=crop"
    ],
    description: "Keep warm in style. Our soft-knit beanie is a versatile accessory for the colder months.",
    material: "50% Wool, 50% Acrylic",
    sizes: ["One Size"],
    colors: ["Gray", "Navy", "Mustard"],
    rating: 4.5,
    reviews: 178,
    inStock: true,
    quantity: 200,
    isNew: false,
    isSale: true,
    season: ["Winter", "Fall"],
    features: ["Soft-knit fabric", "Cuffed design", "Stretchy fit", "Insulating"],
    careInstructions: "Machine wash cold, dry flat"
  },
  {
    id: 19,
    name: "Silk Tie",
    category: "Accessories",
    subcategory: "Formal",
    price: 45.00,
    originalPrice: 45.00,
    image: "https://images.unsplash.com/photo-1589756823851-4115907a4bc2?q=80&w=1974&auto=format&fit=crop",
    images: [
        "https://images.unsplash.com/photo-1589756823851-4115907a4bc2?q=80&w=1974&auto=format&fit=crop"
    ],
    description: "The finishing touch for your formal attire. Our silk tie is hand-crafted for a refined finish.",
    material: "100% Mulberry Silk",
    sizes: ["One Size"],
    colors: ["Navy Dot", "Burgundy Solid", "Silver Pattern"],
    rating: 4.7,
    reviews: 54,
    inStock: true,
    quantity: 65,
    isNew: true,
    isSale: false,
    season: ["All-Year"],
    features: ["100% Mulberry silk", "Hand-finished", "Classic width", "Self-loop"],
    careInstructions: "Dry clean only"
  },
  {
    id: 20,
    name: "Canvas Weekender Bag",
    category: "Accessories",
    subcategory: "Bags",
    price: 120.00,
    originalPrice: 150.00,
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=2070&auto=format&fit=crop",
    images: [
        "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "Travel in style. Our weekender bag is crafted from durable canvas with leather accents, perfect for short getaways.",
    material: "Heavyweight Canvas, Leather details",
    sizes: ["One Size"],
    colors: ["Olive", "Navy", "Gray"],
    rating: 4.8,
    reviews: 96,
    inStock: true,
    quantity: 35,
    isNew: false,
    isSale: true,
    season: ["All-Year"],
    features: ["Water-resistant canvas", "Large main compartment", "Inner zip pocket", "Adjustable shoulder strap"],
    careInstructions: "Spot clean only"
  },
  {
    id: 21,
    name: "Sunglasses",
    category: "Accessories",
    subcategory: "Eyewear",
    price: 85.00,
    originalPrice: 85.00,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2080&auto=format&fit=crop",
    images: [
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2080&auto=format&fit=crop"
    ],
    description: "Classic design, modern protection. Our sunglasses feature polarized lenses and a durable acetate frame.",
    material: "Acetate frame, Polarized lenses",
    sizes: ["One Size"],
    colors: ["Tortoise", "Black"],
    rating: 4.6,
    reviews: 78,
    inStock: true,
    quantity: 45,
    isNew: true,
    isSale: false,
    season: ["Summer", "Spring"],
    features: ["100% UV protection", "Polarized lenses", "Durable acetate frame", "Includes protective case"],
    careInstructions: "Clean with microfiber cloth"
  },
  {
    id: 22,
    name: "Wool Scarf",
    category: "Accessories",
    subcategory: "Winter Wear",
    price: 45.00,
    originalPrice: 65.00,
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=1974&auto=format&fit=crop",
    images: [
        "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=1974&auto=format&fit=crop"
    ],
    description: "Wrap up in warmth. Our wool scarf is soft, insulating, and long enough for multiple styles.",
    material: "100% Merino Wool",
    sizes: ["One Size"],
    colors: ["Charcoal", "Navy", "Burgundy"],
    rating: 4.9,
    reviews: 112,
    inStock: true,
    quantity: 150,
    isNew: false,
    isSale: true,
    season: ["Winter", "Fall"],
    features: ["100% Merino wool", "Fringed edges", "Extra long", "Naturally breathable"],
    careInstructions: "Hand wash cold, dry flat"
  },
  {
    id: 23,
    name: "Classic Denim Jeans",
    category: "Pants",
    subcategory: "Denim",
    price: 120.00,
    originalPrice: 120.00,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=2052&auto=format&fit=crop",
    images: [
        "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=2052&auto=format&fit=crop"
    ],
    description: "The foundation of any wardrobe. Our classic denim jeans feature a straight-leg fit and premium selvedge denim.",
    material: "100% Selvedge Denim",
    sizes: ["30", "32", "34", "36"],
    colors: ["Deep Indigo", "Light Wash"],
    rating: 4.7,
    reviews: 245,
    inStock: true,
    quantity: 80,
    isNew: false,
    isSale: false,
    season: ["All-Year"],
    features: ["Selvedge denim", "Straight leg fit", "5-pocket design", "Reinforced belt loops"],
    careInstructions: "Wash inside out cold, hang to dry"
  },
  {
    id: 24,
    name: "Quilted Down Vest",
    category: "Jackets",
    subcategory: "Outerwear",
    price: 125.00,
    originalPrice: 150.00,
    image: "https://images.unsplash.com/photo-1634547900726-258750f58546?q=80&w=1974&auto=format&fit=crop",
    images: [
        "https://images.unsplash.com/photo-1634547900726-258750f58546?q=80&w=1974&auto=format&fit=crop"
    ],
    description: "Versatile warmth. Our quilted down vest is perfect for layering during transitional seasons.",
    material: "Nylon shell, Down filling",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Black", "Orange"],
    rating: 4.5,
    reviews: 82,
    inStock: true,
    quantity: 40,
    isNew: false,
    isSale: true,
    season: ["Fall", "Spring", "Winter"],
    features: ["Water-resistant shell", "Premium down fill", "Packable design", "Zippered pockets"],
    careInstructions: "Machine wash cold with tennis balls, tumble dry low"
  },
  {
    id: 25,
    name: "Bomber Jacket",
    category: "Jackets",
    subcategory: "Casual",
    price: 140.00,
    originalPrice: 140.00,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop",
    images: [
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop"
    ],
    description: "A modern take on the classic bomber. Features a sleek silhouette and a subtle sheen for an elevated look.",
    material: "Satin-finish Nylon",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Navy", "Olive", "Black"],
    rating: 4.8,
    reviews: 93,
    inStock: true,
    quantity: 50,
    isNew: true,
    isSale: false,
    season: ["Spring", "Fall"],
    features: ["Satin-finish fabric", "Ribbed collar and cuffs", "Arm utility pocket", "Internal chest pocket"],
    careInstructions: "Dry clean only"
  }
];

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
    price: 500,
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
                ${product.isNew ? '<div class="product-badge">NEW</div>' : ''}
                ${product.isSale && !product.isNew ? '<div class="product-badge">SALE</div>' : ''}
            </div>
            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h4 class="product-name">${product.name}</h4>
                <div class="product-price">
                    <span class="price">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice > product.price ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
                <div class="product-rating" style="font-size: 12px; color: var(--accent-gold); margin-top: 5px;">
                    ${renderStars(product.rating)} <span style="color: var(--light-gray);">(${product.reviews})</span>
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
        return catMatch && sizeMatch && priceMatch;
    });

    // Apply sorting
    if (currentFilters.sort === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentFilters.sort === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (currentFilters.sort === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    } else {
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    renderProducts(filtered);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    let cart = JSON.parse(localStorage.getItem('maven_cart')) || [];
    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('maven_cart', JSON.stringify(cart));
    updateCartCount();
    showToast(`Added ${product.name} to cart!`);
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('maven_cart')) || [];
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);
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
    updateWishlistUI();
}

function updateWishlistUI() {
    const wishlist = JSON.parse(localStorage.getItem('maven_wishlist')) || [];
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        // This assumes btn is in a context where we know the productId
        // For simplicity, let's just update the count if there's one
    });
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

document.addEventListener('DOMContentLoaded', () => {
    // Initial Render
    renderProducts(products);
    updateCartCount();

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

    const priceRange = document.getElementById('priceRange');
    const priceLabel = document.getElementById('priceLabel');
    if (priceRange) {
        priceRange.addEventListener('input', (e) => {
            currentFilters.price = e.target.value;
            priceLabel.textContent = `$0 - $${e.target.value}`;
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

    // Featured Drops
    const featuredGrid = document.querySelector('.featured-grid');
    if (featuredGrid) {
        const featured = products.filter(p => p.isNew).slice(0, 3);
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
                    <p class="product-price">$${product.price.toFixed(2)}</p>
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

    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            // Only remove if not on product page (where it's always scrolled)
            if (!document.title.includes('MAVEN | Modern')) {
                header.classList.remove('scrolled');
            }
        }
    });

    // Mobile menu toggle
    const menuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    if (menuBtn && mainNav) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            mainNav.classList.toggle('active');
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
