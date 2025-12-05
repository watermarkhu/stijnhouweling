# Stijn Houweling - Personal GitHub Pages Site

A beautiful, responsive GitHub Pages site featuring a centered poem display, Spotify music integration, and a dynamic slideshow background.

## Features

- **📝 Poem Display**: Beautiful centered display of a custom poem on the main page
- **🎵 Spotify Integration**: Embedded Spotify player with customizable track
- **🖼️ Slideshow Background**: Full-screen slideshow with random CSS transitions
- **📱 Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **🎨 Modern UI**: Clean, elegant design with glassmorphism effects

## Live Site

Visit the site at: `https://watermarkhu.github.io/stijnhouweling/`

## Customization

### Change the Poem

Edit the poem content in `index.html` within the `.poem-text` div:

```html
<div class="poem-text">
    <p>Your custom poem lines here...</p>
</div>
```

### Change the Spotify Track

Update the `data-spotify-track-id` attribute in `index.html`:

```html
<div class="spotify-container" data-spotify-track-id="YOUR_TRACK_ID">
```

To find a Spotify track ID:
1. Open Spotify and find your desired track
2. Right-click the track and select "Share" → "Copy Song Link"
3. The track ID is the last part of the URL after `/track/`
   - Example: `https://open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp`
   - Track ID: `3n3Ppam7vgaVa1iaRUc9Lp`

### Add Your Own Images

1. Add images to the `pictures/` directory
2. Name them sequentially: `image1.jpg`, `image2.jpg`, `image3.jpg`, etc.
3. The slideshow will automatically detect and cycle through them

**Note**: If no images are added, the site will display beautiful gradient backgrounds as a fallback.

## Slideshow Features

The background slideshow includes:
- **Random Transitions**: Each slide uses a random effect (fade, scale, blur, zoom, slide)
- **Auto-advance**: Slides change every 5 seconds
- **Smooth Animations**: Professional CSS transitions
- **Fallback Gradients**: Beautiful gradients if no images are present

## File Structure

```
stijnhouweling/
├── index.html          # Main HTML page
├── styles.css          # Stylesheet with responsive design
├── script.js           # JavaScript for slideshow and Spotify
├── pictures/           # Directory for slideshow images
│   └── README.md       # Instructions for adding images
├── _config.yml         # GitHub Pages configuration
└── README.md           # This file
```

## Development

### Local Testing

To test the site locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/watermarkhu/stijnhouweling.git
   cd stijnhouweling
   ```

2. Open `index.html` in a web browser, or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

3. Visit `http://localhost:8000` in your browser

### Making Changes

1. Edit the HTML, CSS, or JavaScript files
2. Test your changes locally
3. Commit and push to GitHub
4. GitHub Pages will automatically update the live site

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations, transitions, and responsive design
- **JavaScript (ES6+)**: Dynamic slideshow and Spotify integration
- **GitHub Pages**: Free hosting and deployment
- **Spotify Embed API**: Music player integration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This is a personal site. All rights reserved.