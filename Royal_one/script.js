// Efecto de partículas
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Tamaño aleatorio entre 2px y 6px
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Posición aleatoria
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Opacidad aleatoria
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        // Animación
        const duration = Math.random() * 20 + 10;
        particle.style.animation = `float ${duration}s linear infinite`;
        
        // Dirección de animación aleatoria
        const direction = Math.random() > 0.5 ? 1 : -1;
        particle.style.animationName = `float${direction > 0 ? 'Right' : 'Left'}`;
        
        particlesContainer.appendChild(particle);
    }
    
    // Crear keyframes dinámicamente
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes floatRight {
            0% { transform: translate(0, 0) rotate(0deg); }
            100% { transform: translate(20px, -100px) rotate(360deg); }
        }
        
        @keyframes floatLeft {
            0% { transform: translate(0, 0) rotate(0deg); }
            100% { transform: translate(-20px, -100px) rotate(-360deg); }
        }
    `;
    document.head.appendChild(style);
}

// Carrusel de testimonios
function initTestimonialSlider() {
    const slider = document.getElementById('testimonialSlider');
    const dots = document.querySelectorAll('.slider-dot');
    let currentIndex = 0;
    
    function goToSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
        
        // Actualizar dots activos
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        
        currentIndex = index;
    }
    
    // Event listeners para dots
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'));
            goToSlide(index);
        });
    });
    
    // Auto slide
    setInterval(() => {
        currentIndex = (currentIndex + 1) % dots.length;
        goToSlide(currentIndex);
    }, 5000);
}

// Efecto parallax para el hero
function initParallax() {
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
}

// Animación al hacer scroll
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.destination-card, .service-item').forEach(element => {
        observer.observe(element);
    });
}

// Inicializar todo cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initTestimonialSlider();
    initParallax();
    initScrollAnimations();
});