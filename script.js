// Portfolio Data
const portfolioData = {
    personalInfo: {
        name: "CELİL ÇİRİK",
        title: "Web Tasarımcısı & UI/UX Designer",
        description: "Modern ve kullanıcı dostu web siteleri tasarlayan deneyimli bir web tasarımcısıyım. Her projede estetik ve fonksiyonelliği bir araya getirerek mükemmel dijital deneyimler yaratıyorum.",
        email: "celil.cirik@example.com",
        phone: "+90 532 123 45 67",
        instagram: "@celilcirik",
        profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    
    projects: [
        {
            id: 1,
            title: "Lüks E-ticaret Platformu",
            category: "E-ticaret",
            description: "Premium moda markası için tasarlanan modern e-ticaret sitesi. Minimalist tasarım anlayışı ile kullanıcı deneyimini ön planda tutan çözüm.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            year: "2024",
            client: "Luxury Fashion Co.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
        },
        {
            id: 2,
            title: "Kurumsal Web Sitesi",
            category: "Kurumsal",
            description: "Teknoloji şirketi için profesyonel kurumsal web sitesi. Modern tasarım dili ve güçlü içerik yönetim sistemi ile entegre edildi.",
            technologies: ["WordPress", "PHP", "MySQL", "GSAP"],
            year: "2024",
            client: "TechCorp Industries",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
        },
        {
            id: 3,
            title: "Kişisel Blog Platformu",
            category: "Blog",
            description: "Yazar ve içerik üreticileri için özel tasarlanmış blog platformu. Temiz tipografi ve okunabilirlik odaklı tasarım.",
            technologies: ["Next.js", "Tailwind CSS", "Sanity CMS"],
            year: "2023",
            client: "Creative Writers Hub",
            image: "https://images.unsplash.com/photo-1486312338219-ce68e2c14b2a?w=800&h=600&fit=crop"
        },
        {
            id: 4,
            title: "Restoran Web Sitesi",
            category: "Restoran",
            description: "Fine dining restoranı için tasarlanan elegant web sitesi. Online rezervasyon sistemi ve interaktif menü özelliği.",
            technologies: ["Vue.js", "Firebase", "Stripe", "Maps API"],
            year: "2024",
            client: "Bella Vista Restaurant",
            image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop"
        },
        {
            id: 5,
            title: "SaaS Dashboard",
            category: "SaaS",
            description: "Veri analizi şirketi için geliştirilmiş kapsamlı dashboard arayüzü. Karmaşık verileri basit ve anlaşılır şekilde sunan tasarım.",
            technologies: ["React", "D3.js", "PostgreSQL", "Express"],
            year: "2023",
            client: "DataFlow Analytics",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
        },
        {
            id: 6,
            title: "Sanat Galerisi Portfolyosu",
            category: "Sanat",
            description: "Çağdaş sanatçı için tasarlanan portfolyo web sitesi. Eserleri en iyi şekilde sergileyen minimal ve etkileyici tasarım.",
            technologies: ["Gatsby", "GraphQL", "Contentful", "GSAP"],
            year: "2024",
            client: "Modern Art Gallery",
            image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop"
        },
        {
            id: 7,
            title: "Tekstil E-ticaret Sitesi",
            category: "E-ticaret",
            description: "Modern ve kullanıcı dostu tekstil e-ticaret platformu. Çok dilli destek ve responsive tasarım ile Braça markası için geliştirildi.",
            technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
            year: "2024",
            client: "Braça Tekstil",
            image: "images/logo1 (1).png",
            link: "tekstil.html"
        },
        {
            id: 8,
            title: "QR Kod Oluşturucu",
            category: "SaaS",
            description: "Dinamik QR kod oluşturma ve yönetim sistemi. Kullanıcı dostu arayüz ile hızlı QR kod üretimi ve özelleştirme seçenekleri.",
            technologies: ["HTML5", "CSS3", "JavaScript", "QR.js"],
            year: "2024",
            client: "QR Solutions",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
            link: "qr.html"
        },
        {
            id: 9,
            title: "Tasarım Portfolyosu",
            category: "Sanat",
            description: "Yaratıcı tasarım portföyü ve showcase platformu. Modern animasyonlar ve etkileşimli tasarım ile sanat eserlerini sergileme.",
            technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
            year: "2024",
            client: "Design Studio",
            image: "assets/img/moon.jpg.jpg",
            link: "fake.html"
        },
        {
            id: 10,
            title: "IHA Scale - Şirket Tanıtımı",
            category: "Kurumsal",
            description: "IHA (İnsansız Hava Aracı) şirketi için profesyonel tanıtım sitesi. Teknoloji odaklı modern tasarım ve şirket bilgileri.",
            technologies: ["HTML5", "CSS3", "JavaScript"],
            year: "2024",
            client: "IHA Scale",
            image: "images/zeka.jpg",
            link: "iha.html"
        },
        {
            id: 11,
            title: "IHA Schema - Şirket Tanıtımı",
            category: "Kurumsal",
            description: "IHA teknolojileri şirketi için kurumsal web sitesi. Sistem mimarisi ve çözümlerin detaylı tanıtımı.",
            technologies: ["HTML5", "CSS3", "JavaScript"],
            year: "2024",
            client: "IHA Schema",
            image: "images/2.webp",
            link: "iha2.html"
        },
        {
            id: 12,
            title: "IHA Test Platformu",
            category: "SaaS",
            description: "IHA sistemleri test ve simülasyon platformu. Teknik test araçları ve analiz dashboard'u ile kapsamlı test çözümleri.",
            technologies: ["HTML5", "CSS3", "JavaScript", "Chart.js"],
            year: "2024",
            client: "IHA Test Systems",
            image: "images/bgnew2.jpg",
            link: "ih-test.html"
        },
        {
            id: 13,
            title: "Cosplay Game",
            category: "Blog",
            description: "Arkadaşlarınızla kaliteli vakit geçirin. Eğlenceli cosplay oyunu ve topluluk platformu ile sosyal etkileşim.",
            technologies: ["HTML5", "CSS3", "JavaScript", "Game Engine"],
            year: "2024",
            client: "Cosplay Community",
            image: "images/cplogo.png",
            link: "cp.html"
        },
        {
            id: 14,
            title: "Autopulse - Araba Kanalı",
            category: "Blog",
            description: "Otomotiv tutkunları için blog ve video platformu. Araba incelemeleri, teknik bilgiler ve otomotiv içerikleri.",
            technologies: ["HTML5", "CSS3", "JavaScript", "Video Player"],
            year: "2024",
            client: "Autopulse Media",
            image: "images/blog1.jpeg",
            link: "auto.html"
        }
       
    ]
};

// DOM Elements
const typingElement = document.getElementById('typing-text');
const projectsGrid = document.getElementById('projects-grid');
const filterButtons = document.getElementById('filter-buttons');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Typing Animation
function typeWriter() {
    const text = portfolioData.personalInfo.name;
    let index = 0;
    
    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 150);
        }
    }
    
    // Start typing after page load
    setTimeout(type, 500);
}

// Smooth Scroll Function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        hamburger.classList.toggle('active');
    });
    
    // Close menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Render Projects
function renderProjects(projects = portfolioData.projects) {
    // Add loading state
    projectsGrid.innerHTML = '<div class="projects-loading">Projeler yükleniyor...</div>';
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        projectsGrid.innerHTML = projects.map((project, index) => `
            <div class="project-card fade-in" data-category="${project.category}" style="animation-delay: ${index * 0.1}s">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                    <div class="project-overlay">
                        <div class="project-tech">
                            ${project.technologies.slice(0, 3).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                    </div>
                </div>
                <div class="project-info">
                    <span class="project-category">${project.category}</span>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-meta">
                        <span class="project-year">${project.year}</span>
                        <span class="project-client">${project.client}</span>
                    </div>
                    <a href="${project.link || '#'}" class="project-link" ${project.link ? 'target="_blank"' : 'onclick="openProjectModal(' + project.id + ')"'}>
                        <span>${project.link ? 'Projeyi İncele' : 'Detayları Gör'}</span>
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>
        `).join('');
        
        // Trigger animation
        observeElements();
    }, 300);
}

// Filter Projects
function setupProjectFilters() {
    filterButtons.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            // Remove active class from all buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            e.target.classList.add('active');
            
            const filter = e.target.dataset.filter;
            
            if (filter === 'all') {
                renderProjects();
            } else {
                const filteredProjects = portfolioData.projects.filter(
                    project => project.category === filter
                );
                renderProjects(filteredProjects);
            }
        }
    });
}

// Intersection Observer for Animations
function observeElements() {
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
    
    // Observe all elements with animation classes
    document.querySelectorAll('.fade-in, .scale-in').forEach(el => {
        observer.observe(el);
    });
}

// Navbar Scroll Effect
function setupNavbarScroll() {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.8)';
        }
    });
}

// Smooth scroll for navigation links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                scrollToSection(target.id);
            }
        });
    });
}

// Loading Animation
function showLoadingAnimation() {
    // Add loading class to body
    document.body.classList.add('loading');
    
    // Remove loading class after content is loaded
    window.addEventListener('load', () => {
        document.body.classList.remove('loading');
        
        // Start animations
        setTimeout(() => {
            typeWriter();
            observeElements();
        }, 300);
    });
}

// Contact Form Animation (if needed)
function animateContactItems() {
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('fade-in');
    });
}

// Service Cards Animation
function animateServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('scale-in');
    });
}

// Parallax Effect for Background Circles
function setupParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const circles = document.querySelectorAll('.bg-circle');
        
        circles.forEach((circle, index) => {
            const speed = 0.1 + (index * 0.05);
            const yPos = -(scrolled * speed);
            circle.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Initialize Everything
function init() {
    // Start loading animation
    showLoadingAnimation();
    
    // Setup mobile menu
    toggleMobileMenu();
    
    // Setup smooth scrolling
    setupSmoothScroll();
    
    // Setup navbar scroll effect
    setupNavbarScroll();
    
    // Setup parallax effect
    setupParallax();
    
    // Render initial projects
    renderProjects();
    
    // Setup project filters
    setupProjectFilters();
    
    // Animate service cards
    animateServiceCards();
    
    // Animate contact items
    animateContactItems();
    
    // Setup intersection observer
    observeElements();
}

// Start when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Project Modal Function
function openProjectModal(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project) return;
    
    // Create modal HTML
    const modalHTML = `
        <div class="project-modal-overlay" onclick="closeProjectModal()">
            <div class="project-modal" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="closeProjectModal()">
                    <i class="fas fa-times"></i>
                </button>
                <div class="modal-content">
                    <div class="modal-image">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    <div class="modal-info">
                        <span class="modal-category">${project.category}</span>
                        <h2 class="modal-title">${project.title}</h2>
                        <p class="modal-description">${project.description}</p>
                        <div class="modal-details">
                            <div class="detail-item">
                                <strong>Yıl:</strong> ${project.year}
                            </div>
                            <div class="detail-item">
                                <strong>Müşteri:</strong> ${project.client}
                            </div>
                            <div class="detail-item">
                                <strong>Teknolojiler:</strong>
                                <div class="modal-tech">
                                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                                </div>
                            </div>
                        </div>
                        <div class="modal-actions">
                            <a href="#" class="btn btn-primary">
                                <i class="fas fa-external-link-alt"></i>
                                Projeyi İncele
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.body.style.overflow = 'hidden';
    
    // Animate modal in
    setTimeout(() => {
        const modal = document.querySelector('.project-modal-overlay');
        modal.classList.add('active');
    }, 10);
}

function closeProjectModal() {
    const modal = document.querySelector('.project-modal-overlay');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = '';
        }, 300);
    }
}

// Export functions for global access
window.scrollToSection = scrollToSection;
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;