// script.js

// Initialiseer de AOS-bibliotheek
AOS.init({
    duration: 1000, // Duur van de animaties in milliseconden
    once: true,     // Animaties worden slechts één keer geactiveerd
});

// Functie om het hamburger-menu te toggelen op mobiele apparaten
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Voeg de GSAP-bibliotheek toe voor geavanceerde animaties
// Plaats deze script tags in je HTML-bestand, net boven je eigen script.js
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/gsap.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/ScrollTrigger.min.js"></script>

// Registreer de ScrollTrigger-plugin
gsap.registerPlugin(ScrollTrigger);

// Animatie voor de hero-sectie
gsap.from('.hero-content h1', {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: 'power2.out'
});

gsap.from('.hero-content p', {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.5,
    ease: 'power2.out'
});

gsap.from('.hero-content .btn-primary', {
    duration: 1,
    scale: 0.8,
    opacity: 0,
    delay: 1,
    ease: 'back.out(1.7)'
});

// Animatie voor sectietitels
gsap.utils.toArray('section h2').forEach((element) => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    });
});

// Animatie voor campagne-stappen
gsap.utils.toArray('.campaign-step').forEach((step, index) => {
    gsap.from(step, {
        scrollTrigger: {
            trigger: step,
            start: 'top 80%',
        },
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    });
});

// Animatie voor voordelenlijst
gsap.from('.benefits-list li', {
    scrollTrigger: {
        trigger: '.benefits-list',
        start: 'top 80%',
    },
    y: 20,
    opacity: 0,
    duration: 0.5,
    ease: 'power2.out',
    stagger: 0.2
});

// Animatie voor klantreis stappen
gsap.utils.toArray('.journey-step').forEach((step) => {
    gsap.from(step, {
        scrollTrigger: {
            trigger: step,
            start: 'top 80%',
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
});

// Animatie voor partner-uitnodiging
gsap.from('.partner-invitation', {
    scrollTrigger: {
        trigger: '.partner-invitation',
        start: 'top 80%',
    },
    scale: 0.9,
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
});

// Animatie voor contactgegevens
gsap.from('.contact-details p', {
    scrollTrigger: {
        trigger: '.contact-details',
        start: 'top 80%',
    },
    y: 20,
    opacity: 0,
    duration: 0.5,
    ease: 'power2.out',
    stagger: 0.2
});
