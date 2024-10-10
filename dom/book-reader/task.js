document.addEventListener('DOMContentLoaded', () => {
	const book = document.getElementById('book');
	const fontSizeControls = document.querySelectorAll('.font-size');

	fontSizeControls.forEach(control => {
		control.addEventListener('click', (event) => {
			event.preventDefault();

			fontSizeControls.forEach(item => item.classList.remove('font-size_active'));

			control.classList.add('font-size_active');

			const size = control.dataset.size;
			book.classList.remove('book_fs-small', 'book_fs-big');

			if (size === 'small') {
				book.classList.add('book_fs-small');
			} else if (size === 'big') {
				book.classList.add('book_fs-big');
			}
		});
	});
});