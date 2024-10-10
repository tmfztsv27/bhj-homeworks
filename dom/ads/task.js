document.addEventListener('DOMContentLoaded', () => {
	const dropdowns = document.querySelectorAll('.dropdown');

	dropdowns.forEach(dropdown => {
		const valueElement = dropdown.querySelector('.dropdown__value');
		const listElement = dropdown.querySelector('.dropdown__list');
		const itemElements = dropdown.querySelectorAll('.dropdown__item');

		valueElement.addEventListener('click', (event) => {
			listElement.classList.toggle('dropdown__list_active');
		});

		itemElements.forEach(item => {
			const linkElement = item.querySelector('.dropdown__link');
			linkElement.addEventListener('click', (event) => {
				event.preventDefault();
				valueElement.textContent = linkElement.textContent;
				listElement.classList.remove('dropdown__list_active');
			});
		});
	});
});