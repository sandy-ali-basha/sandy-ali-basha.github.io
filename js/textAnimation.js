let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".shape-4",
        start: "top center",
        end: "+1000",
        scrub: 1,
    },
});
tl.from(".shape-4", {
    y: 100,
    ease: 'cubic-bezier(0.98,-0.29, 0.4, 1.17)'
}).to(".shape-4", {
    y: 0,
    ease: 'cubic-bezier(0.98,-0.29, 0.4, 1.17)'
}).to(".shape-4", {
    y: 100,
    ease: 'cubic-bezier(0.98,-0.29, 0.4, 1.17)'
})
// shape_10
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".shape_10",
        start: "top center",
        end: "-500",
        id: "shape_10"
    },
});
tl2.from(".shape_10", {
    y: 0,
    transition: '1',
    ease: "power1.in"
}).to(".shape_10", {
    y: 100,
    transition: '1',
    ease: "power1.in"
})
// shape_7
let shape_7 = gsap.timeline({
    scrollTrigger: {
        trigger: ".shape_7",
        start: "top center",
        end: "-500",
        id: "shape_10"
    },
});

shape_7.from(".shape_7", {
    x: 100,
    transition: '1',
    ease: "power1.in"
}).to(".shape_7", {
    x: 0,
    transition: '1',
    ease: "power1.in"
})
// imgToTop
let imgToTop = gsap.timeline({
    scrollTrigger: {
        trigger: ".imgToTop",
        id: "imgToTop",
        scrub: 5,
        start: "center center",
        end: "top top",
        toggleActions: "resume pause resume pause",
        markers: true
    },
});
imgToTop.to(".imgToTop", {
    y: "-20vh",
    duration: 10,
    ease: "power1.in"
})

// imgToBottom
let imgToBottom = gsap.timeline({
    scrollTrigger: {
        trigger: ".imgToBottom",
        id: "imgToBottom",
        scrub: 5,
        start: "center center",
        end: "top top",
        toggleActions: "resume pause resume pause",
        markers: true
    },
});
imgToBottom.to(".imgToBottom", {
    y: "20vh",
    duration: 10,
    ease: "power1.in"
})
