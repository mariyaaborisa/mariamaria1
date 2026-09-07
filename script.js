// Landing page animations and interactions

document.addEventListener('DOMContentLoaded', () => {
    const mainName = document.querySelector('.main-name');
    const projectItems = document.querySelectorAll('.project-item');
    const skillCategories = document.querySelectorAll('.skill-category');
    const skillTriggers = document.querySelectorAll('.skill-trigger');
    const stackCards = document.querySelectorAll('.stack-card');
    const stackTriggers = document.querySelectorAll('.stack-card-trigger');

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
                    const shadowSize = 6 + progress * 12;
                    const lightness = 80 + progress * 15;
                    const alpha = 0.3 + progress * 0.5;

                    span.style.transform = `translate3d(0, ${offset}px, 0)`;
                    span.style.color = `hsl(0deg, 0%, ${lightness}%)`;
                    span.style.textShadow = `0 0 ${shadowSize}px rgba(255, 255, 255, ${alpha})`;
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

    // Accessible skills accordion
    if (skillCategories.length && skillTriggers.length) {
        const categoryList = Array.from(skillCategories);
        const triggerList = Array.from(skillTriggers);
        const stackedQuery = window.matchMedia('(max-width: 768px)');

        const syncCategoryState = (category, expanded) => {
            const trigger = category.querySelector('.skill-trigger');
            const content = category.querySelector('.skill-content');
            category.dataset.open = expanded ? 'true' : 'false';
            if (trigger) {
                trigger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
            }
            if (content) {
                // Use a timeout to allow CSS transitions to work properly
                if (expanded) {
                    content.hidden = false;
                    // Force reflow to ensure transition works
                    content.offsetHeight;
                } else {
                    // Wait for transition to complete before hiding
                    setTimeout(() => {
                        if (category.dataset.open === 'false') {
                            content.hidden = true;
                        }
                    }, 400);
                }
            }
        };

        const activateCategory = (targetCategory) => {
            if (!targetCategory || targetCategory.dataset.open === 'true') {
                return;
            }

            categoryList.forEach((category) => {
                syncCategoryState(category, category === targetCategory);
            });
        };

        const ensureDesktopDefault = () => {
            if (!stackedQuery.matches && categoryList.length) {
                const openCategory = categoryList.find((category) => category.dataset.open === 'true');
                if (!openCategory) {
                    syncCategoryState(categoryList[0], true);
                }
            }
        };

        const anyOpen = categoryList.some((category) => category.dataset.open === 'true');
        if (!anyOpen && categoryList.length) {
            syncCategoryState(categoryList[0], true);
        } else {
            categoryList.forEach((category) => {
                syncCategoryState(category, category.dataset.open === 'true');
            });
            ensureDesktopDefault();
        }

        const handleStackedChange = (event) => {
            if (event.matches) {
                return;
            }
            ensureDesktopDefault();
        };

        if (typeof stackedQuery.addEventListener === 'function') {
            stackedQuery.addEventListener('change', handleStackedChange);
        } else if (typeof stackedQuery.addListener === 'function') {
            stackedQuery.addListener(handleStackedChange);
        }

        triggerList.forEach((trigger, index) => {
            const category = categoryList[index];

            trigger.addEventListener('click', () => {
                const isSmallViewport = stackedQuery.matches;
                const isOpen = category.dataset.open === 'true';

                if (isSmallViewport && isOpen) {
                    syncCategoryState(category, false);
                    return;
                }

                activateCategory(category);
            });

            trigger.addEventListener('keydown', (event) => {
                if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
                    event.preventDefault();
                    const nextIndex = (index + 1) % triggerList.length;
                    triggerList[nextIndex].focus();
                }

                if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
                    event.preventDefault();
                    const prevIndex = (index - 1 + triggerList.length) % triggerList.length;
                    triggerList[prevIndex].focus();
                }

                if (event.key === 'Home') {
                    event.preventDefault();
                    triggerList[0].focus();
                    activateCategory(categoryList[0]);
                }

                if (event.key === 'End') {
                    event.preventDefault();
                    const lastIndex = triggerList.length - 1;
                    triggerList[lastIndex].focus();
                    activateCategory(categoryList[lastIndex]);
                }

                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    trigger.click();
                }
            });
        });
    }

    // Sovereign Stack interactive cards
    if (stackCards.length && stackTriggers.length) {
        const cardList = Array.from(stackCards);
        const triggerList = Array.from(stackTriggers);
        const multiColumnQuery = window.matchMedia('(min-width: 769px)');

        const syncCardState = (card, expanded) => {
            const trigger = card.querySelector('.stack-card-trigger');
            const content = card.querySelector('.stack-card-content');

            card.dataset.open = expanded ? 'true' : 'false';

            if (trigger) {
                trigger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
            }

            if (content) {
                content.hidden = !expanded;
            }
        };

        const openExclusiveCard = (targetCard) => {
            cardList.forEach((card) => {
                syncCardState(card, card === targetCard);
            });
        };

        const ensureDefaultCard = () => {
            const currentOpen = cardList.find((card) => card.dataset.open === 'true');
            if (!currentOpen && cardList.length) {
                syncCardState(cardList[0], true);
            }
        };

        const initialOpen = cardList.find((card) => card.dataset.open === 'true');
        if (initialOpen) {
            syncCardState(initialOpen, true);
        } else {
            ensureDefaultCard();
        }

        triggerList.forEach((trigger, index) => {
            const card = cardList[index];

            trigger.addEventListener('click', () => {
                const isOpen = card.dataset.open === 'true';
                if (isOpen && !multiColumnQuery.matches) {
                    syncCardState(card, false);
                    return;
                }

                openExclusiveCard(card);
            });

            trigger.addEventListener('keydown', (event) => {
                if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
                    event.preventDefault();
                    const nextIndex = (index + 1) % triggerList.length;
                    triggerList[nextIndex].focus();
                }

                if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
                    event.preventDefault();
                    const prevIndex = (index - 1 + triggerList.length) % triggerList.length;
                    triggerList[prevIndex].focus();
                }

                if (event.key === 'Home') {
                    event.preventDefault();
                    triggerList[0].focus();
                }

                if (event.key === 'End') {
                    event.preventDefault();
                    triggerList[triggerList.length - 1].focus();
                }
            });
        });

        const handleColumnChange = (event) => {
            if (event.matches) {
                ensureDefaultCard();
            }
        };

        if (typeof multiColumnQuery.addEventListener === 'function') {
            multiColumnQuery.addEventListener('change', handleColumnChange);
        } else if (typeof multiColumnQuery.addListener === 'function') {
            multiColumnQuery.addListener(handleColumnChange);
        }
    }

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
                    const shadowSize = 6 + progress * 12;
                    const lightness = 80 + progress * 15;
                    const alpha = 0.3 + progress * 0.5;

                    span.style.transform = `translate3d(0, ${offset}px, 0)`;
                    span.style.color = `hsl(0deg, 0%, ${lightness}%)`;
                    span.style.textShadow = `0 0 ${shadowSize}px rgba(255, 255, 255, ${alpha})`;
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
                background: rgba(255, 255, 255, 0.15);
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

    // Sovereign Stack expandable cards
    const sovereignCards = document.querySelectorAll('.sovereign-stack-card');

    if (sovereignCards.length) {
        sovereignCards.forEach((card) => {
            const toggleCard = () => {
                const isExpanded = card.getAttribute('aria-expanded') === 'true';
                const content = card.querySelector('.stack-layer-content');

                // Toggle state
                card.setAttribute('aria-expanded', !isExpanded);

                if (content) {
                    content.setAttribute('aria-hidden', isExpanded);
                }
            };

            // Click event
            card.addEventListener('click', toggleCard);

            // Keyboard events
            card.addEventListener('keydown', (event) => {
                // Enter or Space to toggle
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    toggleCard();
                }

                // Arrow navigation between cards
                const allCards = Array.from(sovereignCards);
                const currentIndex = allCards.indexOf(card);

                if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
                    event.preventDefault();
                    const nextIndex = (currentIndex + 1) % allCards.length;
                    allCards[nextIndex].focus();
                }

                if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
                    event.preventDefault();
                    const prevIndex = (currentIndex - 1 + allCards.length) % allCards.length;
                    allCards[prevIndex].focus();
                }

                // Home/End keys
                if (event.key === 'Home') {
                    event.preventDefault();
                    allCards[0].focus();
                }

                if (event.key === 'End') {
                    event.preventDefault();
                    allCards[allCards.length - 1].focus();
                }
            });
        });
    }
});

/**
 * Project Highlights Slider
 * Vanilla JS horizontal slider with:
 * - Pixel-based translateX transitions
 * - Arrow navigation (desktop)
 * - Dot navigation (mobile)
 * - Keyboard support (← →)
 * - 700ms ease-out transitions
 */
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.projects-slider-track');
    const cards = document.querySelectorAll('.projects-slider-card');
    const prevBtn = document.querySelector('.slider-arrow-prev');
    const nextBtn = document.querySelector('.slider-arrow-next');
    const dots = document.querySelectorAll('.slider-dot');

    if (!slider || !cards.length) return;

    let currentSlide = 0;
    const totalSlides = cards.length;

    /**
     * Update slider position and UI states
     */
    const updateSlider = () => {
        // Pixel-based translateX: -100% per slide
        const translateX = -currentSlide * 100;
        slider.style.transform = `translateX(${translateX}%)`;

        // Update arrow states (disabled on bounds)
        if (prevBtn && nextBtn) {
            prevBtn.disabled = currentSlide === 0;
            nextBtn.disabled = currentSlide === totalSlides - 1;
        }

        // Update active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
            dot.setAttribute('aria-pressed', index === currentSlide ? 'true' : 'false');
        });

        // Announce to screen readers
        const currentCard = cards[currentSlide];
        const title = currentCard.querySelector('h3')?.textContent || '';
        if (title) {
            announceSlideChange(title, currentSlide + 1, totalSlides);
        }
    };

    /**
     * Navigate to specific slide (with bounds checking)
     */
    const goToSlide = (index) => {
        const newSlide = Math.max(0, Math.min(index, totalSlides - 1));
        if (newSlide !== currentSlide) {
            currentSlide = newSlide;
            updateSlider();
        }
    };

    /**
     * Announce slide change for screen readers
     */
    const announceSlideChange = (title, current, total) => {
        const announcement = `Slide ${current} of ${total}: ${title}`;
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('role', 'status');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.className = 'sr-only';
        liveRegion.textContent = announcement;
        document.body.appendChild(liveRegion);
        setTimeout(() => liveRegion.remove(), 1000);
    };

    // Arrow button navigation
    if (prevBtn) {
        prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
    }

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });

    // Keyboard navigation (global arrow keys)
    const handleKeyboard = (e) => {
        // Only handle if slider is in viewport
        const sliderRect = slider.getBoundingClientRect();
        const inViewport = sliderRect.top < window.innerHeight && sliderRect.bottom > 0;

        if (!inViewport) return;

        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            goToSlide(currentSlide - 1);
        }
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            goToSlide(currentSlide + 1);
        }
    };

    document.addEventListener('keydown', handleKeyboard);

    // Optional: Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    const minSwipeDistance = 50;

    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    const handleSwipe = () => {
        const swipeDistance = touchStartX - touchEndX;
        if (Math.abs(swipeDistance) < minSwipeDistance) return;

        if (swipeDistance > 0) {
            // Swipe left → next slide
            goToSlide(currentSlide + 1);
        } else {
            // Swipe right → prev slide
            goToSlide(currentSlide - 1);
        }
    };

    // Initialize slider
    updateSlider();
});

// Add screen-reader-only class to CSS if not present
if (!document.querySelector('style[data-slider-sr]')) {
    const srStyle = document.createElement('style');
    srStyle.setAttribute('data-slider-sr', 'true');
    srStyle.textContent = `
        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border-width: 0;
        }
    `;
    document.head.appendChild(srStyle);
}

/**
 * IntersectionObserver for entrance animations
 * Triggers 700ms fade + blur on scroll into view
 */
document.addEventListener('DOMContentLoaded', () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Skip animations if user prefers reduced motion
    if (prefersReducedMotion.matches) return;

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe major sections
    const animatedSections = document.querySelectorAll(
        '.expertise-section, .projects-section, .currently-section, .philosophy-section'
    );

    animatedSections.forEach(section => {
        section.classList.add('fade-in-on-scroll');
        observer.observe(section);
    });
});
