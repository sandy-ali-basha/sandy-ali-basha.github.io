// Add will-change property to the elements you're going to animate
document.querySelector('.imgToTop').style.willChange = 'transform';
document.querySelector('.imgToBottom').style.willChange = 'transform';

let imgToTop = gsap.timeline({
    scrollTrigger: {
        trigger: ".imgToTop",
        id: "imgToTop",
        scrub: 2,
        start: "center center",
        end: "top top",
        toggleActions: "resume pause resume pause",
    },
});
imgToTop.to(".imgToTop", {
    y: "-8vh",
    duration: 10,
    ease: "power1.in"
})

// imgToBottom
let imgToBottom = gsap.timeline({
    scrollTrigger: {
        trigger: ".imgToBottom",
        id: "imgToBottom",
        scrub: 2,
        start: "center center",
        end: "top top",
        toggleActions: "resume pause resume pause",
    },
});
imgToBottom.to(".imgToBottom", {
    y: "10vh",
    duration: 10,
    ease: "power1.in"
})
