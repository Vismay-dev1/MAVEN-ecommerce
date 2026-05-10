/* Premium JS Enhancements for MAVEN */

document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    // Initial reveal for elements already in view
    const observerItems = document.querySelectorAll('section, .product-card, .category-card, .testimonial-card');
    observerItems.forEach(el => {
        el.classList.add('reveal-on-scroll');
        revealObserver.observe(el);
    });

    // Handle dynamic products (since script.js renders them after DOMContentLoaded)
    const gridObserver = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) { // Element node
                    if (node.classList.contains('product-card') || node.querySelector('.product-card')) {
                        const cards = node.classList.contains('product-card') ? [node] : node.querySelectorAll('.product-card');
                        cards.forEach(card => {
                            card.classList.add('reveal-on-scroll');
                            revealObserver.observe(card);
                        });
                    }
                }
            });
        });
    });

    const grids = document.querySelectorAll('.product-grid, .featured-grid, .categories-grid');
    grids.forEach(grid => {
        gridObserver.observe(grid, { childList: true, subtree: true });
    });

    // Smooth hover effect for product images
    document.addEventListener('mouseover', (e) => {
        if (e.target.tagName === 'IMG' && e.target.closest('.product-image-container')) {
            e.target.style.transform = 'scale(1.1)';
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.tagName === 'IMG' && e.target.closest('.product-image-container')) {
            e.target.style.transform = 'scale(1)';
        }
    });

    // Service Worker Registration for PWA
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then(reg => console.log('Service Worker registered', reg))
                .catch(err => console.error('Service Worker registration failed', err));
        });
    }
});
