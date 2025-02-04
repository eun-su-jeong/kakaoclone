document.addEventListener('DOMContentLoaded', () => {
	/* 드롭다운 토글 */
	const dropDownBtn = document.querySelector('.drop-down-btn');

	dropDownBtn.addEventListener('click', () => {
		dropDownBtn.classList.toggle('active');
	});

	/* Intersection Observer */
	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.1,
	};

	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('active');

				observer.unobserve(entry.target);
			} else {
				entry.target.classList.remove('active');
			}
		});
	}, options);

	const elements = document.querySelectorAll('.active-on-visible');
	elements.forEach((element) => observer.observe(element));
});
