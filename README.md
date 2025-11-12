# Alviti Creations Website Redesign

A modern, elegant redesign of the Alviti Creations website maintaining the brand's traditional values while incorporating contemporary design principles.

## Overview

This is a complete website revamp for Alviti Creations, a family-owned manufacturer of religious items and sacred vessels since 1967. The design features a clean, modern aesthetic while honoring the company's heritage and craftsmanship.

## Files Included

- `index.html` - Homepage with hero section, featured products, about, products overview, news, and contact
- `products.html` - Detailed products page with all product categories
- `styles.css` - Complete stylesheet with responsive design
- `script.js` - JavaScript for interactivity and animations
- `README.md` - This file

## Brand Color Scheme

### Primary Colors
- **Burgundy** (#8B2635) - Primary brand color, used for CTAs and accents
- **Gold** (#C9A961) - Secondary accent, represents sacred vessels
- **Navy** (#1F2937) - Text and hero backgrounds
- **Cream** (#FAF8F5) - Light backgrounds and alternating sections

### Supporting Colors
- Dark Burgundy: #6B1D28
- Light Burgundy: #A5304A
- Dark Gold: #B08D3E
- Light Navy: #374151

### Neutral Palette
- White: #FFFFFF
- Various grays from 50-900 for text and backgrounds

## Typography

### Font Families
- **Headings**: 'Cormorant Garamond', serif - Elegant, traditional feel
- **Body Text**: 'Montserrat', sans-serif - Clean, modern readability

### Font Sizes (Responsive)
- H1: 2.5rem to 4rem (clamp)
- H2: 2rem to 3rem (clamp)
- H3: 1.5rem to 2rem (clamp)
- Body: 16px base

## Key Features

### Design Elements
- Modern gradient hero section with subtle animations
- Card-based layout for products and news
- Smooth scroll navigation
- Hover effects and transitions
- Responsive grid layouts
- Mobile-friendly navigation

### Sections

#### Homepage (index.html)
1. **Navigation** - Fixed header with smooth scroll links
2. **Hero Section** - Full-height hero with gradient background
3. **Featured Product** - G.I.F.T Low Gluten Host Ciborium spotlight
4. **About Section** - Four pillars: Made in America, Since 1967, Family Owned, European Styling
5. **Products Overview** - Six main product categories
6. **News Section** - Latest updates and articles
7. **CTA Section** - Retailer locator call-to-action
8. **Contact Section** - Contact information and catalog request form
9. **Footer** - Comprehensive site links and contact details

#### Products Page (products.html)
1. **Products Hero** - Introduction to product collection
2. **Chalices** - Sterling silver and gold plated options
3. **Ciboria Sets** - Including G.I.F.T Low Gluten Ciborium
4. **Communion Ware** - Complete sets and individual pieces
5. **Traveling Mass Kits** - Portable altar solutions
6. **Cremation Urns** - Memorial vessels
7. **Custom Services** - Restoration, engraving, custom work

### Animations
- Fade-up animations on hero text
- Scroll animations for cards
- Hover effects on buttons and links
- Smooth transitions throughout
- Parallax effect on hero section

### Responsive Design
- Desktop: Full multi-column layouts
- Tablet: Adjusted grids (1024px breakpoint)
- Mobile: Single column, hamburger menu (768px breakpoint)
- Small mobile: Optimized spacing (480px breakpoint)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox layouts
- Intersection Observer API for scroll animations
- Smooth scroll behavior

## How to Use

### Viewing the Design
1. Open `index.html` in a modern web browser
2. Navigate through the site using the menu
3. Test responsive design by resizing the browser window
4. View the products page by clicking "Explore Products" or navigation links

### Customization

#### Updating Colors
All colors are defined as CSS variables in `styles.css` at the top:
```css
:root {
    --primary-burgundy: #8B2635;
    --gold: #C9A961;
    /* etc. */
}
```
Simply change these values to update colors site-wide.

#### Adding Images
Replace the placeholder divs with actual images:
```html
<!-- Replace this: -->
<div class="image-placeholder">
    <span>Product Name</span>
</div>

<!-- With this: -->
<img src="path/to/image.jpg" alt="Product Name">
```

#### Content Updates
All content is in the HTML files. Simply edit the text within the tags to update copy.

## WordPress Migration Notes

### Theme Development
This design can be converted to a WordPress theme by:

1. **Breaking into template parts:**
   - `header.php` - Navigation section
   - `footer.php` - Footer section
   - `index.php` - Homepage template
   - `page-products.php` - Products page template
   - `single.php` - News article template

2. **Converting sections to blocks/widgets:**
   - Hero section → Custom Gutenberg block
   - Product cards → Custom post type with template
   - Contact form → Contact Form 7 or WPForms integration
   - News → Standard WordPress posts

3. **Custom Post Types needed:**
   - Products (with categories: Chalices, Ciboria, etc.)
   - News/Updates
   - Custom Services

4. **Recommended Plugins:**
   - Advanced Custom Fields (ACF) - For product details
   - Contact Form 7 - For catalog requests
   - WP Migrate DB - For deployment
   - Yoast SEO - For search optimization

### CSS Integration
- Enqueue `styles.css` in `functions.php`
- Consider using Sass/SCSS for better organization
- Maintain CSS variables for easy theme customization

### JavaScript Integration
- Enqueue `script.js` properly with WordPress dependencies
- Use WordPress AJAX for form submissions
- Integrate with WordPress navigation menus

## Maintenance

### Content Updates
- **Products**: Update in `products.html` - each product is a `.showcase-item`
- **News**: Update in `index.html` - each article is a `.news-card`
- **Contact Info**: Update in both footer and contact section

### SEO Recommendations
- Add meta descriptions to both HTML files
- Include alt text when adding images
- Use semantic HTML (already implemented)
- Add Open Graph tags for social sharing
- Create XML sitemap when moving to WordPress

## Performance Optimization

### Current Optimizations
- CSS Grid and Flexbox (no heavy frameworks)
- Minimal JavaScript dependencies
- Smooth animations using CSS transforms
- Lazy loading support built-in

### Recommendations for Production
1. Minify CSS and JavaScript files
2. Optimize and compress all images (WebP format)
3. Implement lazy loading for images
4. Use CDN for font files
5. Enable browser caching
6. Consider critical CSS for above-the-fold content

## Contact Information

**Alviti Creations**
- Address: 385 John L. Dietsch Blvd., North Attleboro, MA 02763
- Phone: 800-888-8258 / 508-222-4030
- Fax: 508-226-2133

## Design Credits

Design created for Alviti Creations
- Modern, elegant interpretation of traditional religious craftsmanship
- Responsive, accessible, and user-friendly
- Honors 55+ years of family tradition

---

**Note to Client**: This HTML prototype is ready for your review. Once approved, it can be implemented as a custom WordPress theme with full CMS functionality, allowing you to easily update content, products, and news articles.
