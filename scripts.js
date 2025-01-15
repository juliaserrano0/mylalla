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
    setTimeout(showSlides, 3000);
}

const features = document.querySelectorAll('.feature');

const featureObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.5
});

features.forEach(feature => {
    featureObserver.observe(feature);
});

function toggleVideo() {
    const videoContainer = document.getElementById("video-container");
    if (videoContainer.style.display === "none" || videoContainer.style.display === "") {
        videoContainer.style.display = "block";
    } else {
        videoContainer.style.display = "none";
    }
}