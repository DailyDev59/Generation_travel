function mobileNav_2() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon_2 = document.querySelector('.nav-icon_2');

	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		menuIcon_2.classList.toggle('nav-icon_2--active');
		document.body.classList.toggle('no-scroll');
	};	
}

export default mobileNav_2;

