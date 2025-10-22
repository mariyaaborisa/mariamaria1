// Landing page animations and interactions

document.addEventListener('DOMContentLoaded', () => {
    const projectItems = document.querySelectorAll('.project-item');

    // Stagger animation for project items
    projectItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';

        setTimeout(() => {
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 * index);
    });

    // Add click ripple effect
    projectItems.forEach(item => {
        item.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                width: 10px;
                height: 10px;
                background: rgba(74, 63, 53, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                left: ${e.clientX - this.getBoundingClientRect().left}px;
                top: ${e.clientY - this.getBoundingClientRect().top}px;
            `;

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add CSS for ripple animation
    if (!document.getElementById('ripple-style')) {
        const style = document.createElement('style');
        style.id = 'ripple-style';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(40);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Athena animation for About page
    const aboutLink = document.querySelector('.about-item');
    const animationOverlay = document.getElementById('athena-animation');
    const soundToggle = document.getElementById('sound-toggle');

    // Audio elements
    const crackSound = document.getElementById('crack-sound');
    const thunderSound = document.getElementById('thunder-sound');
    const whooshSound = document.getElementById('whoosh-sound');

    // Check if sound is enabled (default: true)
    let soundEnabled = localStorage.getItem('athena-sound') !== 'false';

    // Update sound toggle button
    if (soundToggle) {
        soundToggle.textContent = soundEnabled ? '🔊' : '🔇';
        soundToggle.classList.toggle('muted', !soundEnabled);

        soundToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            soundEnabled = !soundEnabled;
            localStorage.setItem('athena-sound', soundEnabled);
            soundToggle.textContent = soundEnabled ? '🔊' : '🔇';
            soundToggle.classList.toggle('muted', !soundEnabled);
        });
    }

    // Play sound helper function
    function playSound(audioElement) {
        if (soundEnabled && audioElement) {
            audioElement.currentTime = 0;
            audioElement.play().catch(err => console.log('Audio play failed:', err));
        }
    }

    if (aboutLink && animationOverlay) {
        aboutLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default navigation

            // Show animation overlay
            animationOverlay.classList.add('active');

            // Sound timeline:
            // 0.5s - Crack sound when crack starts
            setTimeout(() => playSound(crackSound), 500);

            // 1.0s - Whoosh sound when Zeus shakes
            setTimeout(() => playSound(whooshSound), 1000);

            // 1.7s - Thunder sound with lightning
            setTimeout(() => playSound(thunderSound), 1700);

            // Navigate to about page after animation completes (3.5 seconds total)
            setTimeout(() => {
                window.location.href = 'about.html';
            }, 3500);
        });
    }
});
