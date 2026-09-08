# Angla Cafeteria – Digital Menu

A beautiful, responsive digital menu website for Angla Cafeteria, showcasing authentic Ethiopian cuisine. Built with vanilla HTML, CSS, and JavaScript.

**Live Demo:** [https://qrcode-92q1.vercel.app](https://qrcode-92q1.vercel.app)

## Features

- 🔍 **Search functionality** – Find dishes and drinks instantly
- 📂 **Category filtering** – Browse by Traditional, Breakfast, Drinks, Snacks, Desserts, or Vegetarian
- 📱 **Mobile responsive** – Optimized for all screen sizes
- ♿ **Accessible** – Keyboard navigation and screen reader support
- 🗺️ **Location map** – Embedded Google Maps for easy directions
- ✨ **Modern UI** – Smooth animations and professional design

## Getting Started

### Prerequisites
- A web browser (Chrome, Firefox, Safari, Edge)
- A code editor (optional, for customization)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hayder12sultan/qr2.git
   cd qr2
   ```

2. **Open locally:**
   - Double-click `index.html` in your file explorer, OR
   - Use a local server (recommended):
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Python 2
     python -m SimpleHTTPServer 8000
     
     # Node.js (with http-server)
     npx http-server
     ```
   - Then visit `http://localhost:8000`

3. **Deploy:**
   - Push to GitHub and connect to [Vercel](https://vercel.com) for automatic deployment
   - Or upload files to any static hosting (Netlify, GitHub Pages, AWS S3, etc.)

## Customization

### Edit Menu Items

Open `index.html` and locate the menu sections. Each item follows this structure:

```html
<div class="menu-item" 
     data-name="Item Name" 
     data-category="category-name" 
     data-veg="true|false" 
     data-spicy="true|false">
    <div class="item-top">
        <div class="item-info">
            <div class="item-name">Dish Name</div>
            <div class="item-desc">Description of the dish</div>
            <div class="badges">
                <span class="badge badge-popular">Popular</span>
                <span class="badge badge-veg">🌱 Veg</span>
                <span class="badge badge-spicy">🌶️ Spicy</span>
                <span class="badge badge-new">New</span>
            </div>
        </div>
        <div class="item-price">Price ETB</div>
    </div>
</div>
```

**Data attributes:**
- `data-name` – Item name (used for search)
- `data-category` – One of: `traditional`, `breakfast`, `drinks`, `snacks`, `desserts`
- `data-veg` – `"true"` or `"false"` (for vegetarian filter)
- `data-spicy` – `"true"` or `"false"` (for display purposes)

### Add a New Category

1. Add a button in the categories section:
   ```html
   <button class="cat-btn" data-cat="new-category">New Category</button>
   ```

2. Add a new section in the menu:
   ```html
   <div class="section" data-section="new-category">
       <h2 class="section-title">New Category Name</h2>
       <!-- Add menu items here -->
   </div>
   ```

### Customize Branding

Edit these in `index.html`:
- **Restaurant name:** Line 22 (`<h1>`)
- **Location & hours:** Lines 24–27
- **Phone number:** Line 315
- **Map embed URL:** Line 302 (get from [Google Maps](https://www.google.com/maps))

Edit these in `style.css`:
- **Colors:** Lines 1–17 (CSS variables like `--primary`, `--accent`)
- **Font:** Line 16 (change from "Inter" to any Google Font)

### Update Restaurant Contact Info

1. **Map:** Replace the iframe `src` in line 302 with your own Google Maps embed URL
   - Go to Google Maps → Your location → Share → Embed a map → Copy the `src` URL
2. **Phone:** Update line 314 in footer
3. **Address:** Update lines 310, 325 in footer

## File Structure

```
qr2/
├── index.html      Full HTML structure (header, menu, footer)
├── script.js       Filter, search, and event handling logic
├── style.css       Styling and responsive design
└── README.md       This file
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Lightweight:** ~27 KB total (HTML + CSS + JS)
- **No dependencies:** Pure vanilla JavaScript
- **Fast load:** Optimized for mobile networks
- **SEO ready:** Meta tags for search engines and social sharing

## Accessibility

- ♿ **WCAG 2.1 compliant** – Keyboard navigation support
- 🔊 **Screen reader friendly** – Proper semantic HTML and labels
- 🎨 **Color contrast** – Meets AA standards
- 📱 **Touch-friendly** – Large tap targets for mobile

## Roadmap / Improvements

- [ ] Cart/ordering system
- [ ] Multi-language support
- [ ] Online reservations
- [ ] QR code for easy sharing
- [ ] Admin dashboard for menu management
- [ ] Push notifications for specials

## Version History

**v1.1 (Latest - Sept 2026)**
- ✅ Fixed duplicate dessert item ("White Cake" vs "Chocolate Cake")
- ✅ Completed Google Maps embed URL
- ✅ Added SEO meta tags
- ✅ Removed inline JavaScript handlers (better accessibility)
- ✅ Added focus states for keyboard navigation
- ✅ Added screen reader labels

**v1.0**
- Initial release

## Troubleshooting

### Map not loading
- Check internet connection
- Verify Google Maps embed URL is correct
- Ensure the iframe `src` is not truncated

### Search/Filter not working
- Clear browser cache (Ctrl+Shift+Delete)
- Check console for JavaScript errors (F12 → Console)
- Ensure `data-name` attributes match item names exactly

### Styling looks broken
- Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)
- Check that `style.css` file is present
- Verify CSS file path in `index.html` line 8

## License

MIT License – Feel free to use and modify this template for your restaurant.

## Contributing

Found a bug or have an improvement? 
1. Create an issue on GitHub
2. Submit a pull request with your changes

## Support

For questions or issues, please open a GitHub issue or contact the repository owner.

---

**Made with ❤️ for Angla Cafeteria**