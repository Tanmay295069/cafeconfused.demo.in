# ☕ CafeConfused — Where Every Cup Feels Like Home

A fully responsive, modern café website with a **Rustic & Cozy** design theme. Built with clean HTML, CSS, and vanilla JavaScript — no heavy frameworks, optimized for fast loading and mobile-first responsiveness.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 🌟 Live Preview

```bash
# Start a local server
npx -y http-server -p 8080

# Then visit
http://localhost:8080
```

Or simply double-click `index.html` to open in your browser.

---

## 📁 Project Structure

```
cafe-confused/
│
├── index.html          → Main single-page website
├── style.css           → Complete CSS design system
├── script.js           → Vanilla JavaScript interactions
├── README.md           → Project documentation
│
└── images/
    ├── hero.png        → Hero section background
    ├── about.png       → About section image
    ├── gallery-1.png   → Latte art coffee
    ├── gallery-2.png   → Warm café interior
    ├── gallery-3.png   → Food spread
    ├── gallery-4.png   → Chocolate dessert
    ├── gallery-5.png   → Evening ambiance
    └── gallery-6.png   → Herbal tea setup
```

---

## 🎨 Design Theme

### Rustic & Cozy Aesthetic
- **Warm Color Palette** — Cream, beige, soft browns, coffee tones, muted terracotta
- **Typography** — Dancing Script (handwritten headings) + Inter (clean body text)
- **Wood Textures** — Subtle CSS-generated wood grain overlays on sections
- **Soft Lighting** — Warm gradients and gentle shadows mimicking lamplight
- **Animations** — Fade-in on scroll, soft hover effects, parallax hero

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Cream | `#FDF6EC` | Primary background |
| Beige | `#EDE0CA` | Borders, accents |
| Coffee | `#8B5E3C` | Body text |
| Dark Coffee | `#5C3A1E` | Headings |
| Espresso | `#3B2311` | Navbar, footer |
| Terracotta | `#C4704B` | Buttons, accents |
| Muted Orange | `#D4915E` | Highlights |

---

## 🧩 Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Navigation** | Sticky navbar with glassmorphism, hamburger on mobile |
| 2 | **Hero** | Full-viewport with parallax café photo, CTA button |
| 3 | **About** | Two-column layout with image, stats (50+ items, 5★, 1K+ guests) |
| 4 | **Menu** | 6 category cards — Coffee, Tea, Pizza, Sandwiches, Desserts, Specials |
| 5 | **Gallery** | 6-image responsive grid with hover zoom |
| 6 | **Testimonials** | 5-card carousel with auto-slide and touch swipe |
| 7 | **Contact** | Booking form, Call/WhatsApp/Directions buttons |
| 8 | **Map** | Google Maps embed with café pin label |
| 9 | **Footer** | Brand, quick links, hours, social connections |

---

## ✨ Features

### Interactive Elements
- 🖱️ **Smooth Scroll** — All navigation links scroll smoothly to sections
- 🏔️ **Parallax Hero** — Background moves at 30% scroll speed on desktop
- 👁️ **Scroll Reveal** — Cards, images, and text fade in via IntersectionObserver
- 📱 **Touch Swipe** — Testimonial carousel supports mobile swipe gestures
- 🍞 **Toast Notifications** — Animated alerts for form actions

### Floating Widgets
- 💬 **WhatsApp Button** — Fixed bottom-right, pulsing green, opens WhatsApp chat
- 🎵 **Music Toggle** — Fixed bottom-left, optional background jazz (muted by default)

### Booking System
- 📋 **Reservation Form** — Name, phone, date, time, guest count, special requests
- 📤 **WhatsApp Integration** — Form submissions are sent as formatted WhatsApp messages

---

## 📱 Responsive Design

Mobile-first approach with three breakpoints:

| Breakpoint | Target | Layout Changes |
|------------|--------|----------------|
| `≥ 1024px` | Desktop | Full multi-column layout, 3-col menu grid |
| `768–1023px` | Tablet | 2-col menu grid, 2-col footer |
| `≤ 767px` | Mobile | Single column, hamburger nav, stacked sections |
| `≤ 400px` | Small Phone | Single gallery column, stacked stats |

### Mobile-Specific Features
- Hamburger menu with slide-in panel
- Full-width cards and buttons
- Optimized touch targets
- `100svh` hero height for proper mobile viewport

---

## 🛠️ Tech Stack

| Technology | Usage |
|-----------|-------|
| **HTML5** | Semantic structure, SEO meta tags, Open Graph |
| **CSS3** | Flexbox, Grid, custom properties, animations, media queries |
| **Vanilla JS** | DOM manipulation, IntersectionObserver, event handling |
| **Google Fonts** | Dancing Script + Inter |
| **Google Maps** | Embedded iframe for location |

### No External Dependencies
- Zero npm packages required
- No build step needed
- No framework overhead
- Fast initial page load

---

## 🔧 Customization

### Update Contact Info
In `index.html`, search and replace:
- `+919876543210` → Your actual phone number
- `919876543210` → Your WhatsApp number (without +)
- Update the Google Maps embed URL with your exact coordinates

### Update Menu Prices
Edit the menu cards in the `#menu` section of `index.html`. Each item follows this pattern:
```html
<li class="menu-item">
  <span class="item-name">Item Name</span>
  <span class="item-price">₹XXX</span>
</li>
```

### Change Colors
All colors are defined as CSS custom properties in `style.css` under `:root`. Simply update the hex values:
```css
:root {
  --clr-cream:      #FDF6EC;
  --clr-terracotta: #C4704B;
  --clr-espresso:   #3B2311;
  /* ... etc */
}
```

### Replace Images
Drop your own images into the `images/` folder with the same filenames, or update the `src` attributes in `index.html`.

---

## 🚀 Deployment

### GitHub Pages
1. Push the project to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to `main` branch, root directory
4. Your site will be live at `https://username.github.io/repo-name`

### Netlify
1. Drag and drop the project folder to [netlify.com/drop](https://app.netlify.com/drop)
2. Site is instantly live with a free URL

### Vercel
```bash
npx -y vercel --prod
```

---

## 📍 Café Details

| Detail | Info |
|--------|------|
| **Name** | CafeConfused ☕ |
| **Address** | KK Cinema Road, Sector 19, Kamothe, Panvel |
| **Hours** | Mon–Sun, 10:00 AM – 10:00 PM |
| **Speciality** | Cozy atmosphere, handcrafted coffee, rustic interiors |

---

## 📄 License

This project is open source and available for personal and commercial use.

---

<p align="center">
  Made with ❤️ in Kamothe<br/>
  <strong>☕ CafeConfused — Where every cup feels like home</strong>
</p>
