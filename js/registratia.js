const registratiaForm = document.getElementById('registratiaForm')
const nameError = document.getElementById('nameError')
const genderError = document.getElementById('genderError')
const birthdayError = document.getElementById('birthdayError')

registratiaForm.addEventListener('submit', function (event) {
	event.preventDefault()

	const user = document.getElementById('name').value.trim()
	const gender = document.getElementById('gender').value
	const birthday = document.getElementById('birthday').value

	let hasError = false

	if (!user || user.length < 4 || user.length > 10) {
		nameError.textContent = 'От 4 до 10 символов.'
		hasError = true
	} else {
		nameError.textContent = ''
	}

	if (!gender) {
		genderError.textContent = 'Выберите пол.'
		hasError = true
	} else {
		genderError.textContent = ''
	}

	if (!birthday) {
		birthdayError.textContent = 'Укажите дату.'
		hasError = true
	} else {
		birthdayError.textContent = ''
	}

	if (hasError) return

	localStorage.setItem('name', user)
	localStorage.setItem('gender', gender)
	localStorage.setItem('birthday', birthday)

	window.location.href = './glavnaia.html'
})

document.getElementById('name').addEventListener('input', function () {
    if (this.value.trim().length >= 4 && this.value.trim().length <= 10) {
        nameError.textContent = ''
    }
})

document.getElementById('gender').addEventListener('change', function () {
    if (this.value) {
        genderError.textContent = ''
    }
})

document.getElementById('birthday').addEventListener('input', function () {
    if (this.value) {
        birthdayError.textContent = ''
    }
})
