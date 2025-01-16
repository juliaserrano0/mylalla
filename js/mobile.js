document.addEventListener('DOMContentLoaded', () => {
    // Gestion du menu mobile
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    } else {
        console.error("Les éléments .hamburger ou .mobile-menu n'ont pas été trouvés.");
    }

    // Carrousel
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.querySelectorAll(".mySlides");
        slides.forEach(function(slide) {
            slide.style.display = "none";
        });
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000); // Change d'image toutes les 3 secondes
    }

    // Boutons de navigation pour le carrousel
    function plusSlides(n) {
        showSlidesManual(slideIndex += n);
    }

    function showSlidesManual(n) {
        let slides = document.querySelectorAll(".mySlides");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        slides.forEach(function(slide) {
            slide.style.display = "none";
        });
        slides[slideIndex - 1].style.display = "block";
    }

    // Gestion de la vidéo Facebook
    const videoButton = document.getElementById("floating-video-button");
    const videoContainer = document.getElementById("video-container");

    if (videoButton && videoContainer) {
        function toggleVideo() {
            if (videoContainer.style.display === "none" || videoContainer.style.display === "") {
                videoContainer.style.display = "block"; // Affiche la vidéo
            } else {
                videoContainer.style.display = "none"; // Masque la vidéo
            }
        }

        videoButton.addEventListener("click", function (event) {
            event.stopPropagation(); // Empêche la propagation du clic
            toggleVideo();
        });

        document.addEventListener("click", function (event) {
            if (!videoContainer.contains(event.target) && event.target !== videoButton) {
                videoContainer.style.display = "none"; // Masque la vidéo
            }
        });
    } else {
        console.error("Les éléments #floating-video-button ou #video-container n'ont pas été trouvés.");
    }

    // Animation des sections (features)
    const features = document.querySelectorAll('.feature');
    if (features.length > 0) {
        const featureObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.5 });

        features.forEach(feature => {
            featureObserver.observe(feature);
        });
    } else {
        console.error("Aucun élément .feature n'a été trouvé.");
    }
});