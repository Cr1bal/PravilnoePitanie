const user = localStorage.getItem('name')
const gender = localStorage.getItem('gender')
const birthday = localStorage.getItem('birthday')
const test = localStorage.getItem('test')
const logOut = document.getElementById('logOut')

document.getElementById('prof-name-span').textContent = user || 'Не задано'
document.getElementById('prof-gender-span').textContent = gender
	? gender === 'male'
		? 'Мужской'
		: 'Женский'
	: 'Не задано'

document.getElementById('prof-birthday-span').textContent =
	birthday || 'Не задано'

document.getElementById('prof-quiz-span').textContent = test
	? `${test} баллов`
	: 'Тест не пройден'

logOut.addEventListener('click', function () {
	localStorage.clear()
	window.location.href = './index.html'
})