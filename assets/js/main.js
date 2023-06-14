document.addEventListener("alpine:init", () => {
    Alpine.data("data", () => ({
        isMenuOpen: false,
        isSubMenuOpen: false,
        files: null
    }));

     // Get all gallery containers on the page
    const galleries = document.querySelectorAll('[data-glightbox]');

    // Loop through each gallery container
    if (galleries.length > 0) {
        galleries.forEach((gallery) => {
            // Initialize GLightbox for the current gallery
            const lightbox = GLightbox({
            selector: `#${gallery.id} a`,
            touchNavigation: true
            // Add more configuration options as needed
            });
        });
    }


    // gsap animations
    gsap.registerPlugin(ScrollTrigger);

    const animatedText = document.querySelector('#animatedText');
    if(animatedText) {
        let htmlText = animatedText.innerHTML
        let speed = Math.ceil(Math.ceil(htmlText.length / 10) / 2)
        gsap.to("#animatedText", {
            duration: speed,
            text: {
                value: htmlText,
                newClass: "text-white"
            },
            delay: 1,
            ease: "none"
        });
    }

    // Animation Slide up
    const animationUp = document.querySelectorAll('.animate-up');
    if (animationUp) {
        gsap.set('.animate-up', { opacity : 0, y: 100 });
        ScrollTrigger.batch(".animate-up", {
            onEnter: elements => {
                gsap.to(elements, {
                    autoAlpha: 1,
                    y: 0,
                    duration: 2,
                    stagger: 0.2,
                    ease: 'expo.out'
                });
            },
            once: false
        });
    }

        // Parallax Image 
        const parallaxImage = document.querySelectorAll('.parallax-image');
        if (parallaxImage) {
            gsap.utils.toArray(".parallax-image > img").forEach(function(elem) {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: elem.parentElement,
                        scrub: true,
                        // markers: true,
                        start: "top bottom",
                        end: "+=200%"
                    }
                }).fromTo(elem, {
                    y: -150,
                    transformOrigin: "center"
                }, {
                    y: 150,
                }, 0)
            });
        }
});

