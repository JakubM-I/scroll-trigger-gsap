gsap.registerPlugin(ScrollTrigger);
// gsap.from(".container-body", {
//     x: "-1000px",
//     opacity: 0,
//     duration: 1,
//     delay: 0.5,
//     ease: "power2.out"
// });

const endAnimation = () => {
    alert("Animacja zakończona");
};

let tl = gsap.timeline({onComplete: endAnimation});
tl
    .from(".container-body h1", {x: "-1000px", opacity: 0, duration: 1, ease: "power2.out"})
    .from(".container-body p", {x: "-1000px", opacity: 0, duration: 1, ease: "power2.out"}, "-=0.5");

gsap.from(".page-section.second",{
    x: "-1000px",
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".page-section.second",
        start: "top 90%",
        end: "bottom center",
        toggleActions: "play none none none",
}}
);
// const descs = gsap.utils.toArray(".description");
const descs = document.querySelector(".desc-list");

const descHeight = Math.floor(descs.offsetHeight);
console.log(descHeight);


gsap.to(".page-section.third",{
    scrollTrigger: {
        trigger: ".page-section.third",
        start:"center center",
        end: "+=5000",
        scrub: true,
        pin: true,
        pinSpacing: true,
        markers: true,
        }}
    );