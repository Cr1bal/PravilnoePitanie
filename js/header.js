const userName = localStorage.getItem('name')
const userNamePlaceholder = document.getElementById('user-name-placeholder')
const logoutButton = document.getElementById('logoutButton')

// Если имя пользователя существует, отображаем его
if (userName) {
	userNamePlaceholder.textContent = userName
}

// Обработчик для кнопки выхода
logoutButton.addEventListener('click', function () {
	// Удаляем данные из localStorage
	localStorage.removeItem('name')
	localStorage.removeItem('gender')
	localStorage.removeItem('birthday')

	// Перенаправляем пользователя на страницу авторизации (например, index.html)
	window.location.href = 'index.html'
})
