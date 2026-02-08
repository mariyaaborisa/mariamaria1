/**
 * Textile-Inspired Particle System
 * Interactive canvas animation for art portfolio
 */

class TextileParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.threads = [];
        this.mouse = { x: 0, y: 0, radius: 150 };
        this.colors = [
            { r: 140, g: 43, b: 89, name: 'berry' },       // --accent-coral (#8c2b59)
            { r: 87, g: 49, b: 90, name: 'plum' },         // --accent-purple (#57315a)
            { r: 190, g: 191, b: 149, name: 'sage' },      // --accent-peach (#bebf95)
            { r: 140, g: 132, b: 116, name: 'taupe' },     // --text-tertiary (#8C8474)
            { r: 184, g: 56, b: 120, name: 'magenta' }     // --accent-fuchsia (#b83878)
        ];

        this.init();
        this.setupEventListeners();
        this.animate();
    }

    init() {
        this.resize();
        this.createParticles();
        this.createThreads();
    }

    resize() {
        const rect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width * window.devicePixelRatio;
        this.canvas.height = rect.height * window.devicePixelRatio;
        this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        this.width = rect.width;
        this.height = rect.height;
    }

    createParticles() {
        const particleCount = Math.min(Math.floor((this.width * this.height) / 8000), 80);
        this.particles = [];

        for (let i = 0; i < particleCount; i++) {
            const color = this.colors[Math.floor(Math.random() * this.colors.length)];
            this.particles.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                color: color,
                baseX: Math.random() * this.width,
                baseY: Math.random() * this.height,
                angle: Math.random() * Math.PI * 2,
                speed: Math.random() * 0.02 + 0.01
            });
        }
    }

    createThreads() {
        // Create flowing thread paths
        const threadCount = 12;
        this.threads = [];

        for (let i = 0; i < threadCount; i++) {
            const color = this.colors[Math.floor(Math.random() * this.colors.length)];
            const points = [];
            const segments = 20;

            for (let j = 0; j < segments; j++) {
                points.push({
                    x: (this.width / segments) * j + Math.random() * 50,
                    y: this.height * 0.3 + Math.sin(j * 0.5) * 100 + Math.random() * this.height * 0.4,
                    baseY: this.height * 0.3 + Math.sin(j * 0.5) * 100 + Math.random() * this.height * 0.4,
                    offset: Math.random() * Math.PI * 2
                });
            }

            this.threads.push({
                points: points,
                color: color,
                speed: Math.random() * 0.02 + 0.01,
                amplitude: Math.random() * 20 + 10
            });
        }
    }

    setupEventListeners() {
        window.addEventListener('resize', () => {
            this.resize();
            this.createParticles();
            this.createThreads();
        });

        this.canvas.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouse.x = e.clientX - rect.left;
            this.mouse.y = e.clientY - rect.top;
        });

        this.canvas.addEventListener('mouseleave', () => {
            this.mouse.x = -1000;
            this.mouse.y = -1000;
        });

        // Touch support
        this.canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const rect = this.canvas.getBoundingClientRect();
            const touch = e.touches[0];
            this.mouse.x = touch.clientX - rect.left;
            this.mouse.y = touch.clientY - rect.top;
        });

        this.canvas.addEventListener('touchend', () => {
            this.mouse.x = -1000;
            this.mouse.y = -1000;
        });
    }

    drawThread(thread, time) {
        const { points, color, speed, amplitude } = thread;

        this.ctx.beginPath();
        this.ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.15)`;
        this.ctx.lineWidth = 2;
        this.ctx.lineCap = 'round';

        for (let i = 0; i < points.length; i++) {
            const point = points[i];
            const animatedY = point.baseY + Math.sin(time * speed + point.offset) * amplitude;

            if (i === 0) {
                this.ctx.moveTo(point.x, animatedY);
            } else {
                // Smooth curves using quadratic curves
                const prevPoint = points[i - 1];
                const prevAnimatedY = prevPoint.baseY + Math.sin(time * speed + prevPoint.offset) * amplitude;
                const cpX = (prevPoint.x + point.x) / 2;
                const cpY = (prevAnimatedY + animatedY) / 2;
                this.ctx.quadraticCurveTo(prevPoint.x, prevAnimatedY, cpX, cpY);
            }
        }

        this.ctx.stroke();
    }

    drawParticle(particle, time) {
        // Gentle floating animation
        particle.angle += particle.speed;
        const offsetX = Math.sin(particle.angle) * 30;
        const offsetY = Math.cos(particle.angle * 0.7) * 30;

        particle.x = particle.baseX + offsetX;
        particle.y = particle.baseY + offsetY;

        // Mouse interaction
        const dx = this.mouse.x - particle.x;
        const dy = this.mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.mouse.radius) {
            const force = (this.mouse.radius - distance) / this.mouse.radius;
            const angle = Math.atan2(dy, dx);
            particle.x -= Math.cos(angle) * force * 15;
            particle.y -= Math.sin(angle) * force * 15;
        }

        // Draw particle
        const gradient = this.ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.radius * 3
        );

        gradient.addColorStop(0, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, 0.6)`);
        gradient.addColorStop(0.5, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, 0.3)`);
        gradient.addColorStop(1, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, 0)`);

        this.ctx.beginPath();
        this.ctx.fillStyle = gradient;
        this.ctx.arc(particle.x, particle.y, particle.radius * 3, 0, Math.PI * 2);
        this.ctx.fill();

        // Core particle
        this.ctx.beginPath();
        this.ctx.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, 0.8)`;
        this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        this.ctx.fill();
    }

    connectParticles() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    const opacity = (1 - distance / 120) * 0.2;
                    const color = this.particles[i].color;

                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }

    animate() {
        const time = Date.now() * 0.001;

        // Clear canvas with subtle fade effect
        this.ctx.fillStyle = 'rgba(51, 50, 89, 0.1)';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Draw threads first (background layer)
        this.threads.forEach(thread => this.drawThread(thread, time));

        // Draw particle connections
        this.connectParticles();

        // Draw particles (foreground layer)
        this.particles.forEach(particle => this.drawParticle(particle, time));

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('textile-canvas');
    if (canvas) {
        new TextileParticleSystem(canvas);
    }
});
