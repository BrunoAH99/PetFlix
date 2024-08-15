let currentImageIndex = 0;
const images = document.querySelectorAll('.carossel img');


function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i == index);
    });
}

function anterior() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

function proximo() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}