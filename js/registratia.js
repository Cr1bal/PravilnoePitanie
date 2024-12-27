const registratiaForm = document.getElementById('registratiaForm')
const nameError = document.getElementById('nameError')
const genderError = document.getElementById('genderError')
const birthdayError = document.getElementById('birthdayError')

registratiaForm.addEventListener('submit', function (event) {
	event.preventDefault()

	const nameInput = document.getElementById('name')
	const genderInput = document.getElementById('gender')
	const birthdayInput = document.getElementById('birthday')

	let hasError = false

	if (!nameInput.validity.valid) {
		if (nameInput.validity.valueMissing) {
			nameError.textContent = 'Логин обязателен.'
		} else if (nameInput.validity.tooShort) {
			nameError.textContent = 'Логин должен быть не менее 4 символов.'
		} else if (nameInput.validity.tooLong) {
			nameError.textContent = 'Логин не должен превышать 10 символов.'
		}
		hasError = true
		nameInput.classList.add('invalid')
	} else {
		nameError.textContent = ''
		nameInput.classList.remove('invalid')
	}

	if (!genderInput.validity.valid) {
		genderError.textContent = 'Выберите пол.'
		hasError = true
		genderInput.classList.add('invalid')
	} else {
		genderError.textContent = ''
		genderInput.classList.remove('invalid')
	}

	if (!birthdayInput.validity.valid) {
		birthdayError.textContent = 'Укажите дату.'
		hasError = true
		birthdayInput.classList.add('invalid')
	} else {
		birthdayError.textContent = ''
		birthdayInput.classList.remove('invalid')
	}

	if (hasError) return

	localStorage.setItem('name', nameInput.value)
	localStorage.setItem('gender', genderInput.value)
	localStorage.setItem('birthday', birthdayInput.value)

	window.location.href = '../glavnaia.html'
})

nameInput.addEventListener('input', function () {
	if (this.validity.valid) {
		nameError.textContent = ''
		this.classList.remove('invalid')
	}
})

genderInput.addEventListener('change', function () {
	if (this.validity.valid) {
		genderError.textContent = ''
		this.classList.remove('invalid')
	}
})

birthdayInput.addEventListener('input', function () {
	if (this.validity.valid) {
		birthdayError.textContent = ''
		this.classList.remove('invalid')
	}
})
