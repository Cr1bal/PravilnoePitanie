const slider = document.getElementById('slaider-list')
const arrowLeft = document.querySelector('.left')
const arrowRight = document.querySelector('.right')
const slides = document.querySelectorAll('.slaider-image')
const slideInfo = document.getElementById('top')

let currentSlideIndex = 0

const captions = ['Завтрак', 'Второй Завтрак', 'Обед', 'Полдник', 'Ужин']

function updateSlideInfo() {
	slideInfo.textContent = `${currentSlideIndex + 1} из ${slides.length} — ${
		captions[currentSlideIndex]
	}`
}

function showSlide() {
	slider.style.transform = `translateX(-${currentSlideIndex * 800}px)` 
	updateSlideInfo()
}

function nextSlide() {
	if (currentSlideIndex < slides.length - 1) {
		currentSlideIndex++
		showSlide()
	}
}

function previousSlide() {
	if (currentSlideIndex > 0) {
		currentSlideIndex--
		showSlide()
	}
}

window.onload = function () {
	currentSlideIndex = 0 
	updateSlideInfo()
	showSlide()
}

arrowLeft.addEventListener('click', previousSlide)
arrowRight.addEventListener('click', nextSlide)
