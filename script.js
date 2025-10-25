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

            let animationFrame;

            const animateWave = (time) => {
                waveCharacters.forEach((span, index) => {
                    const waveOffset = Math.sin(time * 0.005 + index * 0.55);
                    const glowStrength = (Math.cos(time * 0.004 + index * 0.4) + 1) / 2;
                    const hue = 215 + waveOffset * 35;

                    span.style.transform = `translate3d(0, ${waveOffset * 8}px, 0)`;
                    span.style.color = `hsl(${hue}deg, 85%, ${68 + glowStrength * 6}%)`;
                    span.style.textShadow = `0 0 ${10 + glowStrength * 8}px hsla(${hue}deg, 95%, 72%, ${0.45 + glowStrength * 0.35})`;
                });

                animationFrame = requestAnimationFrame(animateWave);
            };

            animationFrame = requestAnimationFrame(animateWave);

            return () => cancelAnimationFrame(animationFrame);
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
