# Primrose Parent Coaching Website

A modern, responsive website for Primrose Parent Coaching built with vanilla HTML, CSS, and JavaScript.

## Features

- **Ultra Modern Design**: Sleek, professional design with smooth animations and gradients
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth scrolling, mobile navigation, testimonial carousel, FAQ accordion
- **SEO Optimized**: Semantic HTML structure with proper meta tags
- **Accessible**: WCAG compliant with keyboard navigation and screen reader support
- **Fast Loading**: Optimized performance with minimal dependencies

## Technology Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: Interactive functionality without frameworks
- **Google Fonts**: Inter and Playfair Display font families

## File Structure

```
primrose/
├── index.html          # Main HTML file
├── styles.css          # CSS stylesheet
├── script.js           # JavaScript functionality
├── README.md          # This file
├── package.json       # Project configuration
├── .gitignore         # Git ignore file
└── netlify.toml       # Netlify deployment config
```

## Getting Started

### Local Development

1. Clone or download this repository
2. **Simply double-click `index.html`** to open it in your browser
3. That's it! No server or build process required - works directly in Chrome, Firefox, Safari, etc.

### Deployment Options

#### Option 1: Static Hosting (Recommended)
- **Netlify**: Drag and drop the folder to Netlify
- **Vercel**: Connect your GitHub repo to Vercel
- **GitHub Pages**: Push to GitHub and enable Pages
- **Surge.sh**: Use `surge` command for quick deployment

#### Option 2: Traditional Web Hosting
- Upload all files to your web server's public directory
- Ensure `index.html` is in the root directory

#### Option 3: CDN Deployment
- Upload to any CDN service like AWS S3 + CloudFront

## Enhanced Features

### Modern Design Elements
- **Glass morphism effects** with backdrop blur
- **Animated gradients** and color-shifting text
- **Enhanced shadows** including colored shadows
- **Smooth micro-interactions** on hover and click
- **Parallax scrolling** effects

### Interactive Components
- **Testimonial Carousel**: Auto-rotating with manual controls, touch/swipe support
- **FAQ Accordion**: Expandable questions with smooth animations
- **Contact Form**: Client-side validation with success/error notifications
- **Reveal Animations**: Elements animate into view as you scroll

### Accessibility Features
- **Keyboard navigation** throughout the site
- **ARIA labels** and semantic HTML
- **Focus indicators** for all interactive elements
- **Reduced motion** support for accessibility preferences
- **High contrast** mode compatibility

## Customization

### Colors
Edit the CSS custom properties in `styles.css`:

```css
:root {
    --primary-color: #6366f1;    /* Main indigo */
    --secondary-color: #06b6d4;  /* Cyan accent */
    --accent-color: #f59e0b;     /* Gold accent */
    /* ... more colors */
}
```

### Content
- Edit text content directly in `index.html`
- Replace placeholder images with actual photos
- Update contact information and social links

### Styling
- Modify `styles.css` for design changes
- All styles use modern CSS features
- Fully responsive design included

## Interactive Features

### Testimonial Carousel
- **Auto-play**: 10-second intervals
- **Manual navigation**: Arrow buttons and dot indicators
- **Touch support**: Swipe gestures on mobile
- **Keyboard navigation**: Left/right arrow keys
- **Pause on hover**: Auto-play pauses when hovering

### FAQ Accordion
- **Smooth animations**: Expand/collapse with easing
- **One-at-a-time**: Opening one closes others
- **Keyboard accessible**: Enter/Space to toggle
- **Visual feedback**: Icons rotate when expanded

### Contact Form
The contact form includes:
- **Client-side validation** with visual feedback
- **Success/error notifications** with animations
- **Accessible error messages** for screen readers
- **Responsive design** for all devices

**Note**: The form currently shows a success message but doesn't actually send emails. To make it functional, you'll need to:

1. **Add a backend service** (Node.js, PHP, etc.)
2. **Use a form service** like Formspree, Netlify Forms, or EmailJS
3. **Integrate with an email service** like SendGrid or Mailgun

## Performance Features

- **Lightweight**: ~150KB total size
- **Fast loading**: Optimized CSS/JS with minimal dependencies
- **Efficient animations**: Hardware-accelerated transforms
- **Debounced scroll events**: Smooth performance
- **Preloaded fonts**: Faster text rendering

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## SEO Features

- Semantic HTML structure
- Meta tags for description and keywords
- Open Graph tags ready for social sharing
- Structured data markup ready
- Fast loading times
- Mobile-first responsive design

## Accessibility Compliance

- **WCAG 2.1 AA compliant**
- **Keyboard navigation** support throughout
- **Screen reader friendly** with proper ARIA labels
- **High contrast mode** support
- **Focus indicators** for all interactive elements
- **Reduced motion** preferences respected

## License

This website template is created specifically for Primrose Parent Coaching. The design and code are original and do not infringe on any Wix or other proprietary copyrights.

## Support

For questions or modifications, please contact the developer or refer to standard web development resources.

## Recent Enhancements

### Ultra-Modern Design System
- **Enhanced color palette** with sophisticated gradients
- **Glass morphism effects** throughout the interface
- **Advanced shadow system** including colored shadows
- **Smooth animations** with staggered reveals
- **Interactive micro-animations** on all elements

### Performance Optimizations
- **Debounced scroll handlers** for smooth performance
- **Intersection Observer** for efficient animations
- **Hardware acceleration** for transforms
- **Optimized asset loading** with preloading

### Enhanced User Experience
- **Parallax effects** in hero section
- **Animated gradient text** for highlights
- **Hover state improvements** with scale and lift effects
- **Touch-optimized** interactions for mobile
- **Smooth state transitions** throughout the interface
