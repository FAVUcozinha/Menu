// Seleciona os slides
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentSlide = 0;

// Função para avançar os slides
function nextSlide() {
    slides[currentSlide].style.opacity = 0; // Oculta o slide atual
    currentSlide = (currentSlide + 1) % totalSlides; // Avança para o próximo slide (retorna ao primeiro após o último)
    slides[currentSlide].style.opacity = 1; // Exibe o próximo slide
}

// Inicia o slideshow com uma transição a cada 5 segundos
setInterval(nextSlide, 5000);

// Inicializa o primeiro slide como visível
slides[currentSlide].style.opacity = 1;