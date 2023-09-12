function mobileNav_1() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon_1 = document.querySelector('.nav-icon_1');

	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		menuIcon_1.classList.toggle('nav-icon_1--active');
		document.body.classList.toggle('no-scroll');
	};	
}

export default mobileNav_1;

