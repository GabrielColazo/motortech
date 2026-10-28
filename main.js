document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. ANIMACIÓN GSAP (Hero Section) ---
    const tl = gsap.timeline();

    tl.from(".hero-content .badge", { y: -20, opacity: 0, duration: 0.5, ease: "power2.out" })
      .from(".hero-content h1", { x: -50, opacity: 0, duration: 0.7, ease: "power2.out" }, "-=0.2")
      .from(".hero-content p", { x: -30, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
      .from(".hero-actions", { y: 20, opacity: 0, duration: 0.5, ease: "power2.out" }, "-=0.3")
      .from(".hero-image", { scale: 0.9, x: 50, opacity: 0, duration: 1, ease: "power3.out" }, "-=1");

    // --- 2. MENÚ MÓVIL ---
    const menuBtn = document.querySelector('.menu-btn');
    const mainNav = document.querySelector('.main-nav');

    if (menuBtn && mainNav) {
        menuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    // --- 3. ANIMACIÓN DE SCROLL (Fade In de Servicios) ---
    const observerOptions = { threshold: 0.2 };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        scrollObserver.observe(card);
    });

    // --- MAGIA 4: EFECTO PARALLAX EN LA IMAGEN DEL HERO ---
    // Cuando movés el mouse, la imagen se inclina o se mueve apenas
    const heroImage = document.querySelector(".hero-image img");
    
    if(heroImage) {
        document.addEventListener("mousemove", (e) => {
            // Calculamos el centro de la pantalla
            const xAxis = (window.innerWidth / 2 - e.pageX) / 40; // Dividido 40 para que sea sutil
            const yAxis = (window.innerHeight / 2 - e.pageY) / 40;
            
            // Aplicamos la transformación a la foto
            heroImage.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
        });
    }
});