document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. ANIMACIÓN GSAP (Hero Section) ---
    const tl = gsap.timeline();

    tl.from(".hero-content .badge", { y: -20, opacity: 0, duration: 0.5, ease: "power2.out" })
      .from(".hero-content h1", { x: -50, opacity: 0, duration: 0.7, ease: "power2.out" }, "-=0.2")
      .from(".hero-content p", { x: -30, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
      .from(".hero-actions", { y: 20, opacity: 0, duration: 0.5, ease: "power2.out" }, "-=0.3")
      .from(".hero-image", { scale: 0.9, x: 50, opacity: 0, duration: 1, ease: "power3.out" }, "-=1");

    // --- 2. MENÚ MÓVIL Y CIERRE AUTOMÁTICO ---
    const menuBtn = document.querySelector('.menu-btn');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a'); // Capturamos todos los links

    if (menuBtn && mainNav) {
        // Abrir y cerrar al tocar el botón hamburguesa
        menuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });

        // Cerrar menú al tocar CUALQUIER link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
            });
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

    // --- 4. EFECTO PARALLAX EN LA IMAGEN DEL HERO (Solo PC) ---
    const heroImage = document.querySelector(".hero-image img");
    
    if(heroImage && window.innerWidth > 900) {
        document.addEventListener("mousemove", (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 40;
            heroImage.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
        });
    }
});