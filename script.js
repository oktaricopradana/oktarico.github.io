// Gallery slider
const galleryData = {
    'indie-ppc': [
        '1_PowerReference_DirectQ_Qpriority.png',
        '2_PowerReference_DirectQ_Ppriority.png',
        '3_PowerReference_SimpleAVR_Droop_Qpriority.png',
        '4_PowerReference_SimpleAVR_Droop_Ppriority.png',
        '5_PowerReference_SimpleAVR_LDC_Qpriority.png',
        '6_PowerReference_SimpleAVR_LDC_Ppriority.png',
        '7_PowerReference_Pfactor_Qpriority.png',
        '8_PowerReference_Pfactor_Ppriority.png',
        '9_PowerReference_DualAVR_Droop_Qpriority.png',
        '10_PowerReference_DualAVR_Droop_Ppriority.png',
        '11_PowerReference_DualAVR_LDC_Qpriority.png',
        '12_PowerReference_DualAVR_LDC_Ppriority.png',
        '13_ReactiveReference_DirectQ_Qpriority.png',
        '14_ReactiveReference_DirectQ_Ppriority.png',
        '15_VoltageReference_SimpleAVR_Droop_Qpriority.png',
        '16_VoltageReference_SimpleAVR_Droop_Ppriority.png',
        '17_VoltageReference_SimpleAVR_LDC_Qpriority.png',
        '18_VoltageReference_SimpleAVR_LDC_Ppriority.png',
        '19_ReactiveReference_Pfactor_Qpriority.png',
        '20_ReactiveReference_Pfactor_Ppriority.png',
        '21_VoltageReference_DualAVR_Droop_Qpriority.png',
        '22_VoltageReference_DualAVR_Droop_Ppriority.png',
        '23_VoltageReference_DualAVR_LDC_Qpriority.png',
        '24_VoltageReference_DualAVR_LDC_Ppriority.png',
        '25_3PHG_SimpleAVR_LDC_Qpriority_nofreeze.png',
        '26_3PHG_SimpleAVR_LDC_Qpriority.png',
        '27_GridFrequency_SimpleAVR_LDC_Qpriority_FFR.png',
        '28_GridFrequency_SimpleAVR_LDC_Qpriority_FFR.png',
        '29_GridFrequency_SimpleAVR_LDC_Qpriority_FFR.png',
        '30_GridFrequency_SimpleAVR_LDC_Qpriority.png',
        '31_GridFrequency_SimpleAVR_LDC_Qpriority.png',
    ]
};

const galleryIndex = {};

function changeSlide(galleryId, direction) {
    const images = galleryData[galleryId];
    if (!images) return;

    if (galleryIndex[galleryId] === undefined) galleryIndex[galleryId] = 0;
    galleryIndex[galleryId] += direction;

    if (galleryIndex[galleryId] < 0) galleryIndex[galleryId] = images.length - 1;
    if (galleryIndex[galleryId] >= images.length) galleryIndex[galleryId] = 0;

    const idx = galleryIndex[galleryId];
    const gallery = document.getElementById('gallery-' + galleryId);
    const img = gallery.querySelector('.gallery-img');
    const caption = gallery.querySelector('.gallery-caption');
    const counter = gallery.querySelector('.current-slide');

    img.src = 'images/' + galleryId + '/' + images[idx];
    img.alt = images[idx].replace('.png', '');
    caption.textContent = images[idx].replace('.png', '').replace(/_/g, ' ');
    counter.textContent = idx + 1;
}

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(section);
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add active state to timeline items on scroll
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.timeline-item').forEach(item => {
    timelineObserver.observe(item);
});

// Dynamic year in footer
const footerNote = document.querySelector('.footer-note');
if (footerNote) {
    const currentYear = new Date().getFullYear();
    footerNote.innerHTML = footerNote.innerHTML.replace('2026', currentYear);
}

// Cursor glow effect
document.addEventListener('mousemove', (e) => {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.style.left = e.pageX + 'px';
    glow.style.top = e.pageY + 'px';
    document.body.appendChild(glow);
    
    setTimeout(() => {
        glow.remove();
    }, 600);
});
