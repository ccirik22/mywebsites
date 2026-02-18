/**
 * NEXUS Studio - Interactive Effects
 * Premium JavaScript interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initCustomCursor();
    initScrollAnimations();
    initCounterAnimation();
    initCardTilt();
    initSmoothNav();
    initHeroAnimations();
    initMobileMenu();
    initFormHandler();
});

/* ========================================
   Particle Canvas Background
   ======================================== */

function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = 80;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticleArray();
    }

    function initParticleArray() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 0.5,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`;
            ctx.fill();

            // Connect nearby particles
            particles.slice(i + 1).forEach(p2 => {
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            });
        });

        requestAnimationFrame(animate);
    }

    resize();
    window.addEventListener('resize', resize);
    animate();
}

/* ========================================
   Custom Cursor (Desktop only)
   ======================================== */

function initCustomCursor() {
    const cursorGlow = document.querySelector('.cursor-glow');
    const cursorDot = document.querySelector('.cursor-dot');

    if (!cursorGlow || !cursorDot || window.matchMedia('(max-width: 768px)').matches) {
        document.body.classList.add('no-cursor');
        return;
    }

    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth follow for glow
    function animateCursor() {
        glowX += (mouseX - glowX) * 0.15;
        glowY += (mouseY - glowY) * 0.15;

        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
        cursorGlow.style.left = glowX + 'px';
        cursorGlow.style.top = glowY + 'px';

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, .service-card, .work-item');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(2)';
            cursorDot.style.background = 'rgba(99, 102, 241, 0.5)';
            cursorGlow.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorDot.style.background = '';
            cursorGlow.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

/* ========================================
   Scroll Animations (Intersection Observer)
   ======================================== */

function initScrollAnimations() {
    const revealElements = document.querySelectorAll(
        '.section-header, .service-card, .work-item, .about-text, .about-visual, .contact-wrapper, .hero-badge, .hero-tagline, .hero-logo, .hero-subtitle, .hero-cta, .hero-stats'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

/* ========================================
   Hero Text Animation
   ======================================== */

function initHeroAnimations() {
    const words = document.querySelectorAll('.hero-title .word');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                words.forEach((word, i) => {
                    setTimeout(() => word.classList.add('visible'), i * 200);
                });
            }
        });
    }, { threshold: 0.3 });

    const hero = document.querySelector('.hero');
    if (hero) observer.observe(hero);
}

/* ========================================
   Counter Animation
   ======================================== */

function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    const duration = 2000;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));

    function animateCounter(el, target) {
        let start = 0;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
            const current = Math.floor(eased * target);
            el.textContent = current;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.textContent = target;
            }
        }

        requestAnimationFrame(update);
    }
}

/* ========================================
   3D Card Tilt Effect
   ======================================== */

function initCardTilt() {
    const cards = document.querySelectorAll('[data-tilt]');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

/* ========================================
   Smooth Nav on Scroll
   ======================================== */

function initSmoothNav() {
    const nav = document.querySelector('.nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    });
}

/* ========================================
   Mobile Menu
   ======================================== */

function initMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!toggle || !navLinks) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    const closeMenu = () => {
        toggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
    };

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    const overlay = document.querySelector('.nav-overlay');
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }
}

/* ========================================
   Form Handler
   ======================================== */

function initFormHandler() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span>Gönderiliyor...</span>';
        btn.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            btn.innerHTML = '<span>✓ Gönderildi!</span>';
            form.reset();

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 2000);
        }, 1500);
    });
}

/* ========================================
   Smooth Scroll for anchor links
   ======================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
