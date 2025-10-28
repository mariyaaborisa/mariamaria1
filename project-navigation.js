// Project page navigation - keyboard controls and transitions

document.addEventListener('DOMContentLoaded', () => {
    // Define the navigation structure
    const pages = [
        'responsible-ai.html',
        'show-me-your-colors.html',
        'junipers-clompass.html',
        'black-eco-feminisms.html',
        'rebrew.html',
        'art.html'
    ];

    // Get current page
    const currentPage = window.location.pathname.split('/').pop();
    const currentIndex = pages.indexOf(currentPage);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        // Left arrow key
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            navigateToPage(pages[currentIndex - 1]);
        }
        // Right arrow key
        else if (e.key === 'ArrowRight' && currentIndex < pages.length - 1) {
            navigateToPage(pages[currentIndex + 1]);
        }
        // Home key or Escape to go back to landing
        else if (e.key === 'Home' || e.key === 'Escape') {
            navigateToPage('index.html');
        }
    });

    // Navigation function with animation
    function navigateToPage(url) {
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '0';

        setTimeout(() => {
            window.location.href = url;
        }, 300);
    }

    // Add swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        // Swipe left (next page)
        if (diff > swipeThreshold && currentIndex < pages.length - 1) {
            navigateToPage(pages[currentIndex + 1]);
        }
        // Swipe right (previous page)
        else if (diff < -swipeThreshold && currentIndex > 0) {
            navigateToPage(pages[currentIndex - 1]);
        }
    }

    // Animate content on load
    const container = document.querySelector('.project-container');
    if (container) {
        container.style.animation = 'slideInRight 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    }

    const resumeFilters = document.querySelectorAll('.resume-filter');
    const resumeItems = document.querySelectorAll('.resume-item');

    if (resumeFilters.length && resumeItems.length) {
        resumeFilters.forEach((button) => {
            button.addEventListener('click', () => {
                const targetFilter = button.dataset.filter;

                resumeFilters.forEach((filterButton) => {
                    const isActive = filterButton === button;
                    filterButton.classList.toggle('is-active', isActive);
                    filterButton.setAttribute('aria-pressed', isActive ? 'true' : 'false');
                });

                resumeItems.forEach((item) => {
                    const tags = (item.dataset.tags || '')
                        .split(' ')
                        .map((tag) => tag.trim())
                        .filter(Boolean);

                    if (targetFilter === 'all' || tags.includes(targetFilter)) {
                        item.classList.remove('is-hidden');
                    } else {
                        item.classList.add('is-hidden');
                        item.open = false;
                    }
                });
            });
        });
    }
});
