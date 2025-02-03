document.addEventListener('DOMContentLoaded', () => {
	const dropDownBtn = document.querySelector('.drop-down-btn');

	dropDownBtn.addEventListener('click', () => {
		dropDownBtn.classList.toggle('active');
	});
});
