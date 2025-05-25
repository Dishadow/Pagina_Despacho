document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    
    // Ocultar preloader cuando la página esté cargada
    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.style.opacity = '0';
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        }, 1000);
    });

    // Menú hamburguesa
    const menuBtn = document.querySelector('.menu-hamburguesa');
    const navDer = document.querySelector('.nav_der');
    
    menuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navDer.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav_der a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuBtn.classList.remove('active');
            navDer.classList.remove('active');
        });
    });

    // Efecto scroll en navegación
    window.addEventListener('scroll', function() {
        const navMenu = document.querySelector('.nav_menu');
        if (window.scrollY > 50) {
            navMenu.classList.add('scrolled');
        } else {
            navMenu.classList.remove('scrolled');
        }
    });

    // Animación de contadores
    const contadores = document.querySelectorAll('.contador');
    const velocidad = 200;
    
    function animarContadores() {
        contadores.forEach(contador => {
            const target = +contador.getAttribute('data-target');
            const incremento = target / velocidad;
            let valor = 0;
            
            const actualizarContador = setInterval(() => {
                if (valor < target) {
                    valor += incremento;
                    contador.textContent = Math.ceil(valor);
                } else {
                    contador.textContent = target;
                    clearInterval(actualizarContador);
                }
            }, 1);
        });
    }

    // Observador de intersección para los contadores
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animarContadores();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const estadisticasSection = document.querySelector('.estadisticas');
    if (estadisticasSection) {
        observer.observe(estadisticasSection);
    }

    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Mostrar loader
            submitBtn.querySelector('.btn-text').style.display = 'none';
            submitBtn.querySelector('.btn-loader').style.display = 'block';
            
            // Simular envío (en un caso real sería una petición AJAX)
            setTimeout(function() {
                // Ocultar loader
                submitBtn.querySelector('.btn-text').style.display = 'inline-block';
                submitBtn.querySelector('.btn-loader').style.display = 'none';
                
                // Mostrar mensaje de éxito
                formMessage.textContent = '¡Gracias! Tu mensaje ha sido enviado. Nos pondremos en contacto contigo pronto.';
                formMessage.className = 'success';
                formMessage.style.display = 'block';
                
                // Resetear formulario
                contactForm.reset();
                
                // Ocultar mensaje después de 5 segundos
                setTimeout(function() {
                    formMessage.style.display = 'none';
                }, 5000);
            }, 1500);
        });
    }

    // Efecto hover en tarjetas
    const tarjetas = document.querySelectorAll('.tarjeta');
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('mouseenter', function() {
            this.querySelector('.tarjeta-texto h3').style.color = 'var(--gold)';
        });
        
        tarjeta.addEventListener('mouseleave', function() {
            this.querySelector('.tarjeta-texto h3').style.color = 'white';
        });
    });

    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efecto parallax en el hero
const imageContainer = document.querySelector('.image-container');
let initialBackgroundPositionY = 0;
if (imageContainer) {
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        // Establecer el valor inicial de backgroundPositionY
        if (scrollPosition === 0) {
            imageContainer.style.backgroundPositionY = '0px';
            initialBackgroundPositionY = 0;
        } else {
            imageContainer.style.backgroundPositionY = scrollPosition * 0.3 + 'px';
            initialBackgroundPositionY = scrollPosition * 0;
        }
    });
    }
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Solo animar una vez
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.35
});

document.querySelectorAll('.derecho_penal, .derecho_civil, .derecho_administrativo, .formulario-contacto, .quienes_somos-container, .testimonios-container')
  .forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
  });

