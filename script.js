gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
    smooth: 1,
    effects: true
})

gsap.from(".bl-principal", {
    opacity: 0,
    duration: 1
})
gsap.to(".personagens", {
    y: 60,
    duration: 1
})

gsap.from(".bl-agradecimento .lista-cidades li h3", {
    opacity: 0,
    x: 40,
    stagger: .3,
    duration: 1,
    scrollTrigger: {
        trigger: ".lista-cidades",
        start: "0% 80%",
    }
})

gsap.from("footer", {
    y: -200,
    immediateRender: false,
    scrollTrigger: {
        trigger: "footer",
        scrub: true,
        invalidateOnRefresh: true,
        end: "100% 100%",
    }
})





const grupoTextoSplit = document.querySelectorAll(".textoSplit");

grupoTextoSplit.forEach((textoUnicoSplit) => {
    const split = SplitText.create(textoUnicoSplit, {
        type: "lines, words, chars",
        mask: "lines",
    });

    gsap.from(split.chars, {
        y: 40,
        opacity: 0,
        duration: 0.3,
        stagger: 0.03,
        scrollTrigger: {
            trigger: textoUnicoSplit,
        }
    });
});

// const timeline = gsap.timeline({
//     onComplete(){
//         gsap.to("#preloader-site", {
//             opacity: 0,
//             display: "none",
//             // onComplete(){
//             //     gsap.to("#preloader-site", {
//             //     })
//             // }
//         })
//     }
// })


gsap.to("#preloader-site svg path", {
    duration: 2,
    strokeDashOffset: 0
})