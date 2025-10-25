// Landing page animations and interactions

document.addEventListener('DOMContentLoaded', () => {
    const mainName = document.querySelector('.main-name');
    const projectItems = document.querySelectorAll('.project-item');

    if (mainName) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        const originalText = mainName.textContent;

        const createWaveEffect = () => {
            const characters = Array.from(originalText);
            const waveCharacters = [];

            mainName.innerHTML = '';

            characters.forEach((character) => {
                const span = document.createElement('span');
                span.className = 'wave-char';
                span.textContent = character === ' ' ? '\u00A0' : character;
                mainName.appendChild(span);
                waveCharacters.push(span);
            });

            let pendingAnimationFrame = false;

            const updateWaveFromScroll = () => {
                pendingAnimationFrame = false;

                const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
                const progress = Math.min(scrollY / 220, 1);
                const amplitude = 12 * progress;
                const wavePhase = scrollY * 0.015;

                waveCharacters.forEach((span, index) => {
                    if (progress < 0.02) {
                        span.style.transform = '';
                        span.style.color = '';
                        span.style.textShadow = '';
                        return;
                    }

                    const offset = Math.sin(wavePhase + index * 0.55) * amplitude;
                    const hueShift = Math.sin(wavePhase + index * 0.25) * 12 * progress;
                    const lightness = 68 + progress * 6;
                    const shadowSize = 6 + progress * 12;
                    const shadowAlpha = 0.2 + progress * 0.35;

                    span.style.transform = `translate3d(0, ${offset}px, 0)`;
                    span.style.color = `hsl(${215 + hueShift}deg, 80%, ${lightness}%)`;
                    span.style.textShadow = `0 0 ${shadowSize}px hsla(${215 + hueShift}deg, 90%, 72%, ${shadowAlpha})`;
                });
            };

            const handleScroll = () => {
                if (!pendingAnimationFrame) {
                    pendingAnimationFrame = true;
                    requestAnimationFrame(updateWaveFromScroll);
                }
            };

            window.addEventListener('scroll', handleScroll, { passive: true });
            requestAnimationFrame(updateWaveFromScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
                waveCharacters.forEach((span) => {
                    span.style.transform = '';
                    span.style.color = '';
                    span.style.textShadow = '';
                });
            };
        };

        let cleanupWave;

        const setupWave = () => {
            if (prefersReducedMotion.matches) {
                if (cleanupWave) {
                    cleanupWave();
                    cleanupWave = undefined;
                }
                mainName.classList.add('wave-disabled');
                mainName.textContent = originalText;
            } else {
                mainName.classList.remove('wave-disabled');
                if (cleanupWave) {
                    cleanupWave();
                }
                cleanupWave = createWaveEffect();
            }
        };

        setupWave();

        if (typeof prefersReducedMotion.addEventListener === 'function') {
            prefersReducedMotion.addEventListener('change', setupWave);
        } else if (typeof prefersReducedMotion.addListener === 'function') {
            prefersReducedMotion.addListener(setupWave);
        }
    }

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
});
