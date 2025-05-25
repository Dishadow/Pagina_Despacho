const elements = document.querySelectorAll('.derecho_penal, .derecho_civil, .derecho_administrativo, .formulario-contacto, .quienes_somos-container');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

elements.forEach(el => observer.observe(el));
