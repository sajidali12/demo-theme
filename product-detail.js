// Product Data
const productData = {
    'chalice-traditional': {
        name: 'Traditional Chalice',
        sku: '10-005',
        category: 'Chalices',
        categorySlug: 'chalices',
        mainImage: 'https://www.alviti.com/_resources/images/product/10-005.png',
        images: [
            'https://www.alviti.com/_resources/images/product/10-005.png',
            'https://www.alviti.com/images/alviti_chalice_left.png',
            'https://www.alviti.com/images/euro_chalice.png'
        ],
        description: 'Exquisite handcrafted chalice featuring traditional design elements. Made with the finest materials and crafted with reverence for the sacred traditions of the Eucharist. Each chalice is individually inspected to ensure the highest quality standards.',
        specifications: {
            'Material': 'Sterling Silver / 24K Gold Plate',
            'Height': '8.5 inches',
            'Cup Capacity': '12 oz',
            'Base Diameter': '4.5 inches',
            'Weight': '1.2 lbs',
            'Finish': 'High Polish',
            'Made In': 'North Attleboro, MA, USA'
        },
        features: [
            'Handcrafted in Massachusetts',
            'Available in sterling silver and 24K gold plate',
            'Traditional liturgical design',
            'Custom engraving available',
            'Individually inspected for quality',
            'Made in America with premium materials'
        ],
        relatedProducts: ['ciborium-set', 'paten-traditional', 'communion-cruet']
    },
    'ciborium-set': {
        name: 'Ciborium Set',
        sku: 'B-68G',
        category: 'Ciboria Sets',
        categorySlug: 'ciboria',
        mainImage: 'https://www.alviti.com/_resources/images/category/_cache/B-68G_205x160_ws.jpg',
        images: [
            'https://www.alviti.com/_resources/images/category/_cache/B-68G_205x160_ws.jpg'
        ],
        description: 'Complete ciborium set designed for dignified presentation and preservation of the sacred hosts. Featuring elegant craftsmanship and attention to liturgical detail.',
        specifications: {
            'Material': '24K Gold Plate',
            'Height': '9 inches',
            'Cup Capacity': '200 hosts',
            'Base Diameter': '4 inches',
            'Weight': '1.5 lbs',
            'Finish': 'High Polish Gold',
            'Made In': 'North Attleboro, MA, USA'
        },
        features: [
            'Complete set with lid and base',
            '24K gold plated finish',
            'Holds approximately 200 standard hosts',
            'Custom engraving available',
            'Handcrafted in Massachusetts',
            'Perfect for tabernacle storage'
        ],
        relatedProducts: ['chalice-traditional', 'gift-ciborium', 'luna-set']
    },
    'gift-ciborium': {
        name: 'G.I.F.T Low Gluten Host Ciborium',
        sku: 'B-2083S',
        category: 'Ciboria Sets',
        categorySlug: 'ciboria',
        mainImage: 'https://www.alviti.com/_resources/images/category/_cache/b-2083s_205x160_ws.jpg',
        images: [
            'https://www.alviti.com/_resources/images/category/_cache/b-2083s_205x160_ws.jpg'
        ],
        description: 'Specially designed to accommodate the sacred low gluten hosts with dignity and reverence. Our G.I.F.T ciborium represents the perfect blend of traditional craftsmanship and modern liturgical needs.',
        specifications: {
            'Material': 'Sterling Silver / 24K Gold Plate',
            'Height': '7.5 inches',
            'Capacity': 'Low gluten hosts',
            'Base Diameter': '3.5 inches',
            'Weight': '1 lb',
            'Finish': 'Satin and Polish',
            'Made In': 'North Attleboro, MA, USA'
        },
        features: [
            'Designed specifically for low gluten hosts',
            'Prevents cross-contamination',
            'Available in sterling silver and 24K gold plate',
            'Custom engraving available',
            'Individually inspected for quality',
            'Handcrafted in Massachusetts'
        ],
        relatedProducts: ['ciborium-set', 'pyx-small', 'luna-set']
    },
    'communion-cruet': {
        name: 'Communion Cruet Set',
        sku: '456G',
        category: 'Communion Ware',
        categorySlug: 'communion',
        mainImage: 'https://www.alviti.com/_resources/images/category/_cache/456g_205x160_ws.jpg',
        images: [
            'https://www.alviti.com/_resources/images/category/_cache/456g_205x160_ws.jpg'
        ],
        description: 'Elegant cruet set for water and wine, crafted with precision and attention to liturgical requirements. Complete set includes matching tray.',
        specifications: {
            'Material': '24K Gold Plate',
            'Height': '6 inches',
            'Capacity': '8 oz each',
            'Tray Size': '8 x 5 inches',
            'Weight': '2 lbs (complete set)',
            'Finish': 'High Polish',
            'Made In': 'North Attleboro, MA, USA'
        },
        features: [
            'Complete set with water and wine cruets',
            'Matching presentation tray included',
            '24K gold plated finish',
            'Easy-pour spouts',
            'Custom engraving available',
            'Handcrafted in Massachusetts'
        ],
        relatedProducts: ['chalice-traditional', 'paten-traditional', 'communion-tray']
    },
    'paten-traditional': {
        name: 'Traditional Paten',
        sku: 'P-150G',
        category: 'Communion Ware',
        categorySlug: 'communion',
        mainImage: 'https://www.alviti.com/_resources/images/category/_cache/456g_205x160_ws.jpg',
        images: [
            'https://www.alviti.com/_resources/images/category/_cache/456g_205x160_ws.jpg'
        ],
        description: 'Beautifully crafted paten designed to complement our chalice collection. Features traditional design with modern craftsmanship.',
        specifications: {
            'Material': 'Sterling Silver / 24K Gold Plate',
            'Diameter': '6 inches',
            'Depth': '0.5 inches',
            'Weight': '0.5 lbs',
            'Finish': 'High Polish',
            'Made In': 'North Attleboro, MA, USA'
        },
        features: [
            'Coordinates with our chalice collection',
            'Available in sterling silver and 24K gold plate',
            'Traditional liturgical design',
            'Custom engraving available',
            'Handcrafted in Massachusetts',
            'Perfect balance and weight'
        ],
        relatedProducts: ['chalice-traditional', 'communion-cruet', 'ciborium-set']
    },
    'travel-mass-kit': {
        name: 'Traveling Mass Kit',
        sku: 'A-2400G',
        category: 'Traveling Mass Kits',
        categorySlug: 'travel-kits',
        mainImage: 'https://www.alviti.com/_resources/images/category/_cache/A-2400G_205x160_ws.jpg',
        images: [
            'https://www.alviti.com/_resources/images/category/_cache/A-2400G_205x160_ws.jpg'
        ],
        description: 'Complete portable altar set for celebrating Mass in any location with dignity. Everything needed for Mass in a compact, secure case.',
        specifications: {
            'Material': '24K Gold Plate vessels',
            'Case Size': '12 x 10 x 4 inches',
            'Case Material': 'Leather',
            'Includes': 'Chalice, paten, cruets, pyx, altar linens',
            'Weight': '3.5 lbs',
            'Finish': 'High Polish',
            'Made In': 'North Attleboro, MA, USA'
        },
        features: [
            'Complete Mass kit in portable case',
            'Premium leather carrying case',
            'All vessels 24K gold plated',
            'Secure compartments for each item',
            'Includes all necessary altar linens',
            'Perfect for hospital chaplains and missionaries',
            'Custom configurations available'
        ],
        relatedProducts: ['pyx-small', 'communion-cruet', 'chalice-traditional']
    },
    'cremation-urn': {
        name: 'Cremation Urn',
        sku: 'P-1900G5',
        category: 'Cremation Urns',
        categorySlug: 'urns',
        mainImage: 'https://www.alviti.com/_resources/images/category/_cache/P-1900G5_205x160_ws.jpg',
        images: [
            'https://www.alviti.com/_resources/images/category/_cache/P-1900G5_205x160_ws.jpg'
        ],
        description: 'Respectfully and beautifully crafted urn for honoring departed loved ones. Designed with dignity and reverence.',
        specifications: {
            'Material': 'Brass with 24K Gold Plate',
            'Height': '10 inches',
            'Diameter': '6 inches',
            'Capacity': '200 cubic inches',
            'Weight': '2.5 lbs',
            'Finish': 'High Polish Gold',
            'Made In': 'North Attleboro, MA, USA'
        },
        features: [
            'Solid brass construction',
            '24K gold plated finish',
            'Secure threaded lid',
            'Suitable for burial or display',
            'Custom engraving available',
            'Handcrafted with care and respect',
            'Available in multiple sizes'
        ],
        relatedProducts: ['urn-large', 'urn-keepsake', 'memorial-set']
    },
    'pyx-small': {
        name: 'Small Pyx',
        sku: 'A-8402S',
        category: 'Communion Ware',
        categorySlug: 'communion',
        mainImage: 'https://www.alviti.com/_resources/images/category/_cache/A-8402S_205x160_ws.jpg',
        images: [
            'https://www.alviti.com/_resources/images/category/_cache/A-8402S_205x160_ws.jpg'
        ],
        description: 'Compact pyx perfect for bringing communion to the sick and homebound. Secure closure and reverent design.',
        specifications: {
            'Material': 'Sterling Silver / 24K Gold Plate',
            'Diameter': '2 inches',
            'Height': '0.75 inches',
            'Capacity': '6-8 hosts',
            'Weight': '0.2 lbs',
            'Finish': 'High Polish',
            'Made In': 'North Attleboro, MA, USA'
        },
        features: [
            'Compact and portable design',
            'Secure screw-top closure',
            'Available in sterling silver and 24K gold plate',
            'Fits easily in pocket or burse',
            'Custom engraving available',
            'Perfect for hospital visits',
            'Handcrafted in Massachusetts'
        ],
        relatedProducts: ['travel-mass-kit', 'communion-cruet', 'ciborium-set']
    },
    'luna-set': {
        name: 'Luna with Monstrance',
        sku: 'L-100G',
        category: 'Ciboria Sets',
        categorySlug: 'ciboria',
        mainImage: 'https://www.alviti.com/_resources/images/category/_cache/B-68G_205x160_ws.jpg',
        images: [
            'https://www.alviti.com/_resources/images/category/_cache/B-68G_205x160_ws.jpg'
        ],
        description: 'Traditional luna designed for use with monstrance during exposition of the Blessed Sacrament. Precision crafted for secure host display.',
        specifications: {
            'Material': '24K Gold Plate',
            'Luna Diameter': '2.75 inches',
            'Glass Type': 'Clear beveled glass',
            'Thickness': '0.5 inches',
            'Weight': '0.3 lbs',
            'Finish': 'High Polish',
            'Made In': 'North Attleboro, MA, USA'
        },
        features: [
            'Precision fit for standard monstrances',
            'Clear beveled glass panels',
            '24K gold plated frame',
            'Secure host holding mechanism',
            'Easy to open and close',
            'Custom sizes available',
            'Handcrafted in Massachusetts'
        ],
        relatedProducts: ['ciborium-set', 'gift-ciborium', 'chalice-traditional']
    }
};

// Get product ID from URL parameter
function getProductId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Load product data
function loadProductData() {
    const productId = getProductId();

    if (!productId || !productData[productId]) {
        // If no valid product ID, redirect to products page
        window.location.href = 'products.html';
        return;
    }

    const product = productData[productId];

    // Update page title
    document.title = `${product.name} - Alviti Creations`;

    // Update breadcrumb
    document.getElementById('breadcrumb-category').textContent = product.category;
    document.getElementById('breadcrumb-product').textContent = product.name;

    // Update product info
    document.getElementById('product-category').textContent = product.category;
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-sku').textContent = product.sku;
    document.getElementById('product-description').textContent = product.description;

    // Update main image
    const mainImage = document.getElementById('main-product-image');
    mainImage.src = product.mainImage;
    mainImage.alt = product.name;

    // Create thumbnails
    const thumbnailContainer = document.getElementById('thumbnail-container');
    thumbnailContainer.innerHTML = '';

    if (product.images.length > 1) {
        product.images.forEach((image, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
            thumbnail.innerHTML = `<img src="${image}" alt="${product.name}">`;
            thumbnail.addEventListener('click', function() {
                mainImage.src = image;
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
            thumbnailContainer.appendChild(thumbnail);
        });
    } else {
        // Hide thumbnail container if only one image
        thumbnailContainer.style.display = 'none';
    }

    // Update specifications
    const specsList = document.getElementById('specifications-list');
    specsList.innerHTML = '';
    for (const [label, value] of Object.entries(product.specifications)) {
        const specItem = document.createElement('div');
        specItem.className = 'spec-item';
        specItem.innerHTML = `
            <span class="spec-label">${label}:</span>
            <span class="spec-value">${value}</span>
        `;
        specsList.appendChild(specItem);
    }

    // Update features
    const featuresList = document.getElementById('features-list');
    featuresList.innerHTML = '';
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    // Load related products
    loadRelatedProducts(product.relatedProducts);
}

// Load related products
function loadRelatedProducts(relatedIds) {
    const relatedGrid = document.getElementById('related-products-grid');
    relatedGrid.innerHTML = '';

    relatedIds.forEach(productId => {
        if (productData[productId]) {
            const product = productData[productId];
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-image">
                    <img src="${product.mainImage}" alt="${product.name}">
                </div>
                <div class="product-content">
                    <h3>${product.name}</h3>
                    <p>Item No: ${product.sku}</p>
                    <a href="product-detail.html?id=${productId}" class="product-link">View Details →</a>
                </div>
            `;
            relatedGrid.appendChild(card);
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', loadProductData);
