
const products = [
	{
		name: 'Авокадо',
		info: 'Авокадо можно найти в супермаркетах, таких как «Перекрёсток», «Ашан», а также на рынках.',
	},
	{
		name: 'Брокколи',
		info: 'Брокколи продается в сетевых супермаркетах и специализированных магазинах здорового питания.',
	},
	{
		name: 'Куриная грудка',
		info: 'Куриная грудка доступна в мясных отделах супермаркетов, а также в онлайн-магазинах.',
	},
	{
		name: 'Гречка',
		info: 'Гречку можно приобрести в любом супермаркете, таких как «Лента», «Магнит».',
	},
	{
		name: 'Тунец',
		info: 'Тунец можно найти в крупных супермаркетах и специализированных магазинах рыбы.',
	},
	{
		name: 'Киноа',
		info: 'Киноа продается в магазинах здорового питания и крупных супермаркетах.',
	},
	{
		name: 'Яйца',
		info: 'Яйца доступны в супермаркетах, таких как «Перекрёсток» и «Дикси».',
	},
	{
		name: 'Огурцы',
		info: 'Огурцы можно купить в овощных отделах супермаркетов или на рынках.',
	},
	{
		name: 'Морковь',
		info: 'Морковь можно найти в любом супермаркете, а также на рынках.',
	},
	{
		name: 'Лосось',
		info: 'Лосось продается в супермаркетах и специализированных рыбных магазинах.',
	},
	{
		name: 'Шпинат',
		info: 'Шпинат можно найти в крупных супермаркетах и магазинах органических продуктов.',
	},
	{
		name: 'Творог',
		info: 'Творог доступен в молочных отделах большинства супермаркетов.',
	},
	{
		name: 'Орехи',
		info: 'Орехи можно найти в супермаркетах и специализированных магазинах орехов.',
	},
	{
		name: 'Банан',
		info: 'Бананы продаются в супермаркетах и магазинах фруктов.',
	},
	{
		name: 'Яблоки',
		info: 'Яблоки доступны в любых супермаркетах и на рынках.',
	},
]


function displayProducts(filteredProducts) {
	const productList = document.getElementById('product-list')
	productList.innerHTML = ''
    
	if (filteredProducts.length === 0) {
		productList.innerHTML = '<li>Продукты не найдены</li>'
		return
	}

	filteredProducts.forEach(product => {
		const listItem = document.createElement('li')
		listItem.textContent = product.name
		listItem.addEventListener('click', () => showProductInfo(product))
		productList.appendChild(listItem)
	})
}

function filterProducts() {
	const searchTerm = document.getElementById('search-input').value.toLowerCase()
	const filteredProducts = products.filter(product =>
		product.name.toLowerCase().includes(searchTerm)
	)
	displayProducts(filteredProducts)
}


function showProductInfo(product) {
	const productInfo = document.getElementById('product-info')
	productInfo.style.display = 'block' 
	productInfo.textContent = product.info 
}

document
	.getElementById('search-input')
	.addEventListener('input', filterProducts)

window.onload = function () {
	displayProducts(products)
}
