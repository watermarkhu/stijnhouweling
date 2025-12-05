// Configuration
const SLIDESHOW_INTERVAL = 5000; // 5 seconds between slides
const TRANSITION_EFFECTS = [
    'fade-transition',
    'scale-transition',
    'blur-transition',
    'zoom-transition',
    'slide-transition'
];

// Slideshow functionality
class Slideshow {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.currentSlideIndex = 0;
        this.images = [];
        this.transitionEffects = [...TRANSITION_EFFECTS];
        this.init();
    }

    async init() {
        await this.loadImages();
        if (this.images.length > 0) {
            this.setupSlides();
            this.start();
        }
    }

    async loadImages() {
        // Try to load images from pictures directory
        try {
            // Attempt to fetch a manifest or discover images
            // For GitHub Pages, we'll need to list images manually or use a manifest
            const imageNames = [
                'image1.jpg',
                'image2.jpg',
                'image3.jpg',
                'image4.jpg',
                'image5.jpg'
            ];

            // Test which images exist
            const imagePromises = imageNames.map(async (name) => {
                const url = `pictures/${name}`;
                try {
                    const response = await fetch(url, { method: 'HEAD' });
                    if (response.ok) {
                        return url;
                    }
                } catch (e) {
                    // Image doesn't exist
                }
                return null;
            });

            const results = await Promise.all(imagePromises);
            this.images = results.filter(url => url !== null);

            // If no images found, use placeholder gradient backgrounds
            if (this.images.length === 0) {
                this.images = this.generateGradientBackgrounds();
            }
        } catch (error) {
            console.log('Using gradient backgrounds');
            this.images = this.generateGradientBackgrounds();
        }
    }

    generateGradientBackgrounds() {
        // Generate beautiful gradient backgrounds as fallback
        return [
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
            'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
        ];
    }

    setupSlides() {
        this.slides.forEach((slide, index) => {
            // Assign random transition effect
            const randomEffect = this.transitionEffects[
                Math.floor(Math.random() * this.transitionEffects.length)
            ];
            slide.classList.add(randomEffect);

            // Set background
            const imageIndex = index % this.images.length;
            const imageUrl = this.images[imageIndex];
            
            if (imageUrl.startsWith('linear-gradient')) {
                slide.style.background = imageUrl;
            } else {
                slide.style.backgroundImage = `url('${imageUrl}')`;
            }
        });
    }

    start() {
        if (this.images.length <= 1) return;
        
        setInterval(() => {
            this.nextSlide();
        }, SLIDESHOW_INTERVAL);
    }

    nextSlide() {
        // Remove active class from current slide
        this.slides[this.currentSlideIndex].classList.remove('active');

        // Calculate next slide index
        this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;

        // Add active class to next slide
        this.slides[this.currentSlideIndex].classList.add('active');

        // Update background image for the slide that just became inactive
        const inactiveSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
        const nextImageIndex = (this.currentSlideIndex + 1) % this.images.length;
        const nextImageUrl = this.images[nextImageIndex];

        if (nextImageUrl.startsWith('linear-gradient')) {
            this.slides[inactiveSlideIndex].style.background = nextImageUrl;
        } else {
            this.slides[inactiveSlideIndex].style.backgroundImage = `url('${nextImageUrl}')`;
        }

        // Assign new random transition effect for variety
        const randomEffect = this.transitionEffects[
            Math.floor(Math.random() * this.transitionEffects.length)
        ];
        
        // Remove all transition classes
        TRANSITION_EFFECTS.forEach(effect => {
            this.slides[inactiveSlideIndex].classList.remove(effect);
        });
        
        // Add new random transition
        this.slides[inactiveSlideIndex].classList.add(randomEffect);
    }
}

// Spotify Integration
class SpotifyPlayer {
    constructor() {
        this.container = document.querySelector('.spotify-container');
        this.playerElement = document.getElementById('spotify-player');
        this.trackId = this.container.dataset.spotifyTrackId || '3n3Ppam7vgaVa1iaRUc9Lp';
        this.init();
    }

    init() {
        // Use Spotify embed iframe (simpler than Web Playback SDK which requires authentication)
        this.embedPlayer();
    }

    embedPlayer() {
        // Create Spotify embed iframe
        const iframe = document.createElement('iframe');
        iframe.style.borderRadius = '12px';
        iframe.src = `https://open.spotify.com/embed/track/${this.trackId}?utm_source=generator&theme=0`;
        iframe.width = '100%';
        iframe.height = '152';
        iframe.frameBorder = '0';
        iframe.allowFullscreen = '';
        iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
        iframe.loading = 'lazy';

        // Replace placeholder with iframe
        this.playerElement.innerHTML = '';
        this.playerElement.appendChild(iframe);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize slideshow
    const slideshow = new Slideshow();

    // Initialize Spotify player
    const spotifyPlayer = new SpotifyPlayer();
});
