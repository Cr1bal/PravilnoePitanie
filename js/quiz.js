const correctAnswers = {
	q1: '2',
	q2: '3',
	q3: '2',
	q4: '2',
	q5: '2',
}

const explanations = {
	q1: 'Правильный ответ: 2-2.5 литра.',
	q2: 'Правильный ответ: Болгарский перец.',
	q3: 'Правильный ответ: Основной строительный материал для клеток.',
	q4: 'Правильный ответ: Овсянка.',
	q5: 'Правильный ответ: 25-50%.',
}

let isQuizSubmitted = false 

const submitButton = document.getElementById('submitQuiz')
const restartButton = document.getElementById('restartQuiz')


submitButton.addEventListener('click', function () {
	if (isQuizSubmitted) return 

	let score = 0
	const totalQuestions = Object.keys(correctAnswers).length

	Object.keys(correctAnswers).forEach(question => {
		const selectedAnswer = document.querySelector(
			`input[name="${question}"]:checked`
		)
		const answerElement = document.getElementById(`answer-${question}`)

		if (selectedAnswer && selectedAnswer.value === correctAnswers[question]) {
			score++
			answerElement.textContent = `Верно! ${explanations[question]}`
		} else {
			answerElement.textContent = `Неверно. ${explanations[question]}`
		}
	})

	const result = document.getElementById('result')
	result.textContent = `Вы ответили правильно на ${score} из ${totalQuestions} вопросов.`

	localStorage.setItem('test', score)
	isQuizSubmitted = true 

	submitButton.disabled = true
})

restartButton.addEventListener('click', function () {
	const answers = document.querySelectorAll('input[type="radio"]')
	answers.forEach(answer => (answer.checked = false))

	const result = document.getElementById('result')
	result.textContent = ''

	const correctAnswerElements = document.querySelectorAll('.correct-answer')
	correctAnswerElements.forEach(element => (element.textContent = ''))

	localStorage.removeItem('test')

	isQuizSubmitted = false
	submitButton.disabled = false
})
