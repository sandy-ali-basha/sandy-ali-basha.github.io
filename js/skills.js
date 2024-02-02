
//-- -----------------------------
var recentWorkTitle = document.getElementById('recentWorkTitle')
Splitting({
	target: recentWorkTitle,
	by: 'chars'
});
var responsive_section_text = document.getElementById('responsive_section_text')
Splitting({
	target: responsive_section_text,
	by: 'chars'
});
var headerText = document.getElementById('headerText')
Splitting({
	target: headerText,
	by: 'chars'
});

var heyHeader = document.getElementById('heyHeader')
Splitting({
	target: heyHeader,
	by: 'chars'
});

var Experience_title = document.getElementById('Experience_title')
Splitting({
	target: Experience_title,
	by: 'chars'
});


var Experience_title = document.getElementById('getInTouch_title')
Splitting({
	target: Experience_title,
	by: 'chars'
});


const slideDown = (divId) => {
	var scroll = $(window).scrollTop();
	var targetOffset = $(`#${divId}`).offset().top - $(`#${divId}`).outerHeight();

	if (scroll >= targetOffset) {
		$(`#${divId}`).addClass('animation');
	} else {
		$(`#${divId}`).removeClass('animation');
	}
}

$(window).scroll(function () {
	slideDown('recentWorkTitle')
	slideDown('responsive_section_text')
	slideDown('heyHeader')
	slideDown('Experience_title')
	slideDown('getInTouch_title')

});

//-------------------------------------
$(document).ready(function () {
	$(".btn").hover(function () {
		$(this).toggleClass("animate__animated");
	});

	//Preloader
	preloaderFadeOutTime = 500;
	function hidePreloader() {
		var preloader = $(".spinner-wrapper");
		console.log("loader");
		preloader.fadeOut(preloaderFadeOutTime);
	}

	hidePreloader()

	slideDown('headerText')


	$(".showMore").click(function () {
		$(".work").slideDown();
	});

	$(".powerPoint").click(function () {
		$(".web").hide();
		$(".power").show();
		$(".powerPoint").addClass("liActive");
		$(".websites").removeClass("liActive");
	});
	$(".websites").click(function () {
		$(".power").hide();
		$(".web").show();
		$(".websites").addClass("liActive");
		$(".powerPoint").removeClass("liActive");
	});
});