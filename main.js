document.addEventListener('DOMContentLoaded', () => {
	dropDownBtn();
	antiOverlapping();
	intersectionObserver();
	initSwiper();
	scrollEffect();
});

/* 드롭다운 버튼 */
const dropDown = () => {
	const dropDownBtn = document.querySelector('.drop-down-btn');
	if (dropDownBtn) return;

	dropDownBtn.addEventListener('click', () => {
		dropDownBtn.classList.toggle('active');
	});
};

/* menu 겹침 방지 */
const antiOverlapping = () => {
	const menuItems = document.querySelectorAll('.top-bar__menu1 > ul > li');
	menuItems.forEach((menu) => {
		menu.addEventListener('mouseenter', () => {
			const dropDownBtn = document.querySelector('.drop-down-btn');

			dropDownBtn.classList.remove('active');
		});
	});
};

/* Intersection Observer */
const intersectionObserver = () => {
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
};

/* swiper */
const initSwiper = () => {
	const swiper = new Swiper('.checkcard-swiper', {
		loop: true,
		slidesPerView: 3,
		centeredSlides: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
};

/* scroll effect */
const scrollEffect = () => {
	const logo = document.querySelector('.logo');
	let lastScrollTop = 0;

	window.addEventListener('scroll', () => {
		let currentScroll = window.scrollY;

		if (currentScroll > lastScrollTop) {
			logo.classList.add('active');
		} else {
			logo.classList.remove('active');
		}
	});
};
