// Project Data
const projects = [
    {
        id: 'junipers-clompass',
        number: '01',
        title: "Juniper's Clompass",
        category: 'Edtech · Curriculum Design · Learning Science',
        color: 'accent',
        slides: [
            { type: 'hero' },
            {
                type: 'meta',
                cards: [
                    { label: 'Domain', title: 'AI in Education', desc: 'Conversational AI learning companion for elementary students' },
                    { label: 'Role', title: 'Lead Designer & Developer', desc: 'Full-stack development, prompt engineering, pedagogical design' }
                ]
            },
            { type: 'image', src: 'assets/IMG_3952.jpg' },
            {
                type: 'about',
                title: 'About This Project',
                text: 'Juniper\'s Clompass is an AI-powered learning companion designed for elementary students, using conversational AI to support curriculum-based learning.'
            }
        ]
    },
    {
        id: 'responsible-ai',
        number: '02',
        title: 'Responsible AI in the Humanities',
        category: 'Digital Humanities · Responsible AI · HCI Research',
        color: 'accent',
        slides: [
            { type: 'hero' },
            {
                type: 'meta',
                cards: [
                    { label: 'Institution', title: 'UC Berkeley English Dept Research Team', desc: 'Digital humanities research exploring responsible AI' },
                    { label: 'Focus', title: 'HCI Research & Design Engineering', desc: 'Responsible AI prototyping and UX research' }
                ]
            },
            { type: 'image', src: 'assets/IMG_3931.jpg' },
            {
                type: 'about',
                title: 'About This Project',
                text: 'Research project with UC Berkeley English Department exploring responsible AI applications in digital humanities contexts.'
            }
        ]
    },
    {
        id: 'black-eco-feminisms',
        number: '03',
        title: 'Black Eco Feminisms',
        category: 'Community/Social Impact Design',
        color: 'accent',
        slides: [
            { type: 'hero' },
            {
                type: 'meta',
                cards: [
                    { label: 'Organization', title: 'Ninth Root Nonprofit', desc: 'Oakland-based environmental justice organization' },
                    { label: 'Methods', title: 'Systems Mapping · Co-design', desc: 'Community-centered civic design tools' }
                ]
            },
            { type: 'image', src: 'assets/IMG_3838.jpg' },
            {
                type: 'about',
                title: 'About This Project',
                text: 'Urban planning internship focused on environmental justice and Black land stewardship in Oakland.'
            }
        ]
    },
    {
        id: 'show-me-your-colors',
        number: '04',
        title: 'Show Me Your Colors',
        category: 'AI in Children\'s Health · Design Prototyping · User Research',
        color: 'accent',
        slides: [
            { type: 'hero' },
            {
                type: 'meta',
                cards: [
                    { label: 'System', title: 'HRV Wearable + Parent Remote', desc: 'Student health monitoring in classroom settings' },
                    { label: 'Stack', title: 'Arduino · HRV Sensors · AI Policy Design', desc: 'Real-time physiological data with privacy architecture' }
                ]
            },
            { type: 'image', src: 'assets/parentcontroller.jpg' },
            {
                type: 'about',
                title: 'About This Project',
                text: 'HRV-based wearable system with AI-guided breathing exercises, designed to balance child privacy with parental awareness through a three-tier information architecture.'
            }
        ]
    },
    {
        id: 'rebrew',
        number: '05',
        title: 'ReBrew',
        category: 'Material Design',
        color: 'accent',
        slides: [
            { type: 'hero' },
            {
                type: 'meta',
                cards: [
                    { label: 'Recognition', title: 'SF Design Week Awards', desc: 'Featured in San Francisco Design Week' },
                    { label: 'Focus', title: 'Material Futures', desc: 'Sustainable material design exploration' }
                ]
            },
            { type: 'image', src: 'assets/IMG_3874.jpg' },
            {
                type: 'about',
                title: 'About This Project',
                text: 'Material design project exploring sustainable futures and speculative design methodologies.'
            }
        ]
    },
    {
        id: 'art',
        number: '06',
        title: 'Art',
        category: 'Mixed Media',
        color: 'accent',
        slides: [
            { type: 'hero' },
            {
                type: 'meta',
                cards: [
                    { label: 'Medium', title: 'Textile Arts & Embroidery', desc: 'Exploring texture and materiality' },
                    { label: 'Practice', title: 'Mixed Media', desc: 'Experimental creative work' }
                ]
            },
            { type: 'image', src: 'assets/IMG_3917.JPG' },
            {
                type: 'about',
                title: 'About This Project',
                text: 'Collection of mixed media artworks exploring texture, materiality, and color through embroidery and textile arts.'
            }
        ]
    }
];

// State
let currentCycle = 0;
let storyStates = [0, 0, 0]; // Current slide index for each column

// Initialize
function init() {
    renderColumns();
    setupEventListeners();
}

// Render columns based on current cycle
function renderColumns() {
    const columns = document.querySelectorAll('.story-column');
    const startIdx = currentCycle * 3;

    columns.forEach((column, idx) => {
        const projectIdx = startIdx + idx;
        if (projectIdx < projects.length) {
            column.dataset.project = projectIdx;
            storyStates[idx] = 0;
            renderStory(column, projectIdx, 0);
        }
    });
}

// Render story slide
function renderStory(column, projectIdx, slideIdx) {
    const project = projects[projectIdx];
    const slide = project.slides[slideIdx];
    const content = column.querySelector('.story-content');

    // Update progress bars
    const progressBars = column.querySelectorAll('.progress-bar');
    progressBars.forEach((bar, idx) => {
        bar.classList.remove('active', 'completed');
        if (idx < slideIdx) bar.classList.add('completed');
        if (idx === slideIdx) bar.classList.add('active');
    });

    // Render slide content
    let html = '';

    if (slide.type === 'hero') {
        html = `
            <div class="story-slide active slide-hero">
                <div class="project-number">${project.number}</div>
                <h2 class="project-title">${project.title}</h2>
                <p class="project-category">${project.category}</p>
            </div>
        `;
    } else if (slide.type === 'meta') {
        const cardsHtml = slide.cards.map(card => `
            <div class="meta-card-compact">
                <span>${card.label}</span>
                <strong>${card.title}</strong>
                <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.5rem;">${card.desc}</p>
            </div>
        `).join('');

        html = `
            <div class="story-slide active slide-meta">
                ${cardsHtml}
            </div>
        `;
    } else if (slide.type === 'image') {
        html = `
            <div class="story-slide active slide-image">
                <img src="${slide.src}" alt="${project.title}" onerror="this.src='assets/placeholder.jpg'">
            </div>
        `;
    } else if (slide.type === 'about') {
        html = `
            <div class="story-slide active slide-about">
                <h3>${slide.title}</h3>
                <p>${slide.text}</p>
            </div>
        `;
    }

    content.innerHTML = html;
}

// Setup event listeners
function setupEventListeners() {
    // Column clicks
    document.querySelectorAll('.story-column').forEach((column, idx) => {
        column.addEventListener('click', (e) => {
            // Ignore if clicking nav buttons
            if (e.target.closest('.nav-prev') || e.target.closest('.nav-next')) return;

            const projectIdx = parseInt(column.dataset.project);
            const currentSlide = storyStates[idx];
            const nextSlide = (currentSlide + 1) % projects[projectIdx].slides.length;

            storyStates[idx] = nextSlide;
            renderStory(column, projectIdx, nextSlide);
        });
    });

    // Navigation buttons
    document.querySelectorAll('.nav-prev').forEach((btn, idx) => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const column = btn.closest('.story-column');
            const projectIdx = parseInt(column.dataset.project);
            const currentSlide = storyStates[idx];
            const prevSlide = currentSlide === 0 ? projects[projectIdx].slides.length - 1 : currentSlide - 1;

            storyStates[idx] = prevSlide;
            renderStory(column, projectIdx, prevSlide);
        });
    });

    document.querySelectorAll('.nav-next').forEach((btn, idx) => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const column = btn.closest('.story-column');
            const projectIdx = parseInt(column.dataset.project);
            const currentSlide = storyStates[idx];
            const nextSlide = (currentSlide + 1) % projects[projectIdx].slides.length;

            storyStates[idx] = nextSlide;
            renderStory(column, projectIdx, nextSlide);
        });
    });

    // Cycle buttons
    document.querySelectorAll('.cycle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const cycle = parseInt(btn.dataset.cycle);
            if (cycle === currentCycle) return;

            currentCycle = cycle;
            document.querySelectorAll('.cycle-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            renderColumns();
        });
    });
}

// Start
init();
