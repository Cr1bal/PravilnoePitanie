const correctAnswers = {
	q1: '2',
	q2: '3',
	q3: '2',
	q4: '2',
	q5: '2',
}

document.getElementById('submitQuiz').addEventListener('click', function () {
	let score = 0
	let totalQuestions = Object.keys(correctAnswers).length

	Object.keys(correctAnswers).forEach(question => {
		const selectedAnswer = document.querySelector(
			`input[name="${question}"]:checked`
		)
		if (selectedAnswer && selectedAnswer.value === correctAnswers[question]) {
			score++
		}
	})

	const result = document.getElementById('result')
	result.textContent = `Вы ответили правильно на ${score} из ${totalQuestions} вопросов.`

	// Сохранение результата в localStorage
	localStorage.setItem('test', score)
})

document.getElementById('restartQuiz').addEventListener('click', function () {
	// Сброс выбранных ответов
	const answers = document.querySelectorAll('input[type="radio"]')
	answers.forEach(answer => (answer.checked = false))

	// Очистка результата
	const result = document.getElementById('result')
	result.textContent = ''

	// Очистка сохраненного результата в localStorage
	localStorage.removeItem('test')
})
