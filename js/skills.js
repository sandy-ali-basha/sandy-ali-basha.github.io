// Store elements in an object
var elements = {
	recentWorkTitle: document.getElementById('recentWorkTitle'),
	responsive_section_text: document.getElementById('responsive_section_text'),
	headerText: document.getElementById('headerText'),
	heyHeader: document.getElementById('heyHeader'),
	Experience_title: document.getElementById('Experience_title'),
	getInTouch_title: document.getElementById('getInTouch_title')
};

// Apply Splitting to each element
Object.keys(elements).forEach(function (key) {
	Splitting({ target: elements[key], by: 'chars' });
});

// Debounce function
function debounce(func, wait) {
	var timeout;
	return function () {
		clearTimeout(timeout);
		timeout = setTimeout(func, wait);
	};
}

// Slide down function
function slideDown() {
	var scroll = $(window).scrollTop();
	Object.keys(elements).forEach(function (key) {
		var targetOffset = $(`#${key}`).offset().top - $(`#${key}`).outerHeight();
		if (scroll >= targetOffset) {
			$(`#${key}`).addClass('animation');
		} else {
			$(`#${key}`).removeClass('animation');
		}
	});
}

// Debounce scroll event
$(window).scroll(debounce(slideDown, 100));

// Document ready
$(document).ready(function () {
	$(".btn").hover(function () {
		$(this).toggleClass("animate__animated");
	});

	// Preloader
	var preloaderFadeOutTime = 500;
	function hidePreloader() {
		var preloader = $(".spinner-wrapper");
		console.log("loader");
		preloader.fadeOut(preloaderFadeOutTime);
	}

	hidePreloader();
	slideDown();
});
