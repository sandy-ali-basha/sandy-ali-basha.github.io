// (function () {

// 	var Progress = function (element) {

// 		this.context = element.getContext("2d");
// 		this.refElement = element.parentNode;
// 		this.loaded = 0;
// 		this.start = 4.72;
// 		this.width = this.context.canvas.width;
// 		this.height = this.context.canvas.height;
// 		this.total = parseInt(this.refElement.dataset.percent, 10);
// 		this.timer = null;

// 		this.diff = 0;

// 		this.init();
// 	};

// 	Progress.prototype = {
// 		init: function () {
// 			var self = this;
// 			self.timer = setInterval(function () {
// 				self.run();
// 			}, 25);
// 		},
// 		run: function () {
// 			var self = this;

// 			self.diff = ((self.loaded / 100) * Math.PI * 2 * 10).toFixed(2);
// 			self.context.clearRect(0, 0, self.width, self.height);
// 			self.context.lineWidth = 10;
// 			self.context.fillStyle = "#000";
// 			self.context.strokeStyle = "#d30000";
// 			self.context.textAlign = "center";

// 			self.context.fillText(self.loaded + "%", self.width * .5, self.height * .5 + 2, self.width);
// 			self.context.beginPath();
// 			self.context.arc(35, 35, 30, self.start, self.diff / 10 + self.start, false);
// 			self.context.stroke();

// 			if (self.loaded >= self.total) {
// 				clearInterval(self.timer);
// 			}

// 			self.loaded++;
// 		}
// 	};

// 	var CircularSkillBar = function (elements) {
// 		this.bars = document.querySelectorAll(elements);
// 		if (this.bars.length > 0) {
// 			this.init();
// 		}
// 	};

// 	CircularSkillBar.prototype = {
// 		init: function () {
// 			this.tick = 25;
// 			this.progress();

// 		},
// 		progress: function () {
// 			var self = this;
// 			var index = 0;
// 			var firstCanvas = self.bars[0].querySelector("canvas");
// 			var firstProg = new Progress(firstCanvas);



// 			var timer = setInterval(function () {
// 				index++;

// 				var canvas = self.bars[index].querySelector("canvas");
// 				var prog = new Progress(canvas);

// 				if (index == self.bars.length) {
// 					clearInterval(timer);
// 				}

// 			}, self.tick * 100);

// 		}
// 	};

// 	document.addEventListener("DOMContentLoaded", function () {
// 		var circularBars = new CircularSkillBar("#bars .bar");
// 	});

// })();


// const items = document.querySelectorAll('.item')

// const expand = (item, i) => {
// 	items.forEach((it, ind) => {
// 		if (i === ind) return
// 		it.clicked = false
// 	})

// 	gsap.to(items, {
// 		width: item.clicked ? '10vw' : '8vw',
// 		duration: 1.5,
// 		ease: 'elastic(1, .9)'
// 	})

// 	item.clicked = !item.clicked

// 	gsap.to(item, {
// 		width: item.clicked ? '42vw' : '10vw',
// 		duration: 1.5,
// 		ease: 'elastic(1, .9)'
// 	})

// 	gsap.set(item.querySelector('.goToWebsite'), { display: item.clicked ? 'block' : 'none' })

// }

// items.forEach((item, i) => {
// 	item.clicked = false
// 	item.addEventListener('click', () => expand(item, i))
// })

//-- -----------------------------
var recentWorkTitle = document.getElementById('recentWorkTitle')
Splitting({
	target: recentWorkTitle,
	by: 'chars'
});

const animationTl1 = gsap.timeline({
	paused: false
});

let animationItems1 = gsap.utils.toArray(".char");

animationItems1.map((elem, index) => {
	animationTl1.to(elem, {
		y: '0em',
		ease: 'cubic-bezier(0.65, 0.19, 0.07, 0.99)',
		duration: '0.001',
		delay: index / 1000
	});
});


//-------------------------------------
$(document).ready(function () {
	ScrollTrigger.create({
		animation: animationTl1,
		trigger: recentWorkTitle,
		start: 'top center',
		end: 'bottom bottom',
		id: 'recentWorkTitle',
		markers: true,
	});
	$(".btn").hover(function () {
		$(this).toggleClass("animate__animated");
	});
	$(".zar").hover(function () {
		$(this).toggleClass("animate__animated");
	});
	//Preloader
	preloaderFadeOutTime = 500;
	function hidePreloader() {
		var preloader = $(".spinner-wrapper");
		console.log("loader");
		preloader.fadeOut(preloaderFadeOutTime);
	}
	hidePreloader();

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