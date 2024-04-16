let slideIndex = 1;
let isFullscreen = false; // Track fullscreen state

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { 
        slideIndex = 1; 
    }
    if (n < 1) { 
        slideIndex = slides.length; 
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        plusSlides(-1);
    } else if (event.key === "ArrowRight") {
        plusSlides(1);
    }
});

function toggleFullScreen() {
    const elem = document.querySelector('.slideshow-container');
    if (!isFullscreen) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen().catch(err => {
                alert(`Error attempting to enable fullscreen mode: ${err.message}`);
            });
            document.querySelector('.fullscreen-btn').textContent = 'Exit Fullscreen';
            isFullscreen = true;
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            document.querySelector('.fullscreen-btn').textContent = 'Fullscreen';
            isFullscreen = false;
        }
    }
}
