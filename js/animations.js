document.addEventListener('DOMContentLoaded', () => {
    // 1. Intersection Observer for Scroll Reveal Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    //Trigger initial section so hero isn't hidden if on top
    const heroSection = document.getElementById('home');
    if(heroSection) {
        heroSection.classList.add('visible');
    }

    // 2. Smooth scrolling for top navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Corner certificates interaction
    const certCorner = document.getElementById('certCorner');
    if(certCorner) {
        certCorner.addEventListener('click', (e) => {
            if (e.target.tagName !== 'A') {
                const target = document.querySelector('#certificates');
                if(target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }
});
