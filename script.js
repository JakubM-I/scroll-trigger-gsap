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

gsap.fromTo(".page-section.second",{
    x: "-1000px",
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power2.out"
}
);