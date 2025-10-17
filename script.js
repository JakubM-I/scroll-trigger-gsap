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

let tl = gsap.timeline({ onComplete: endAnimation });
tl
    .from(".container-body h1", { x: "-1000px", opacity: 0, duration: 1, ease: "power2.out" })
    .from(".container-body p", { x: "-1000px", opacity: 0, duration: 1, ease: "power2.out" }, "-=0.5");

gsap.from(".page-section.second", {
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
    }
}
);
// const descs = gsap.utils.toArray(".description");
const descs = document.querySelector(".desc-list");
const titles = document.querySelectorAll(".title-list-item");
const totalTitles = titles.length;

const descHeight = Math.floor(descs.offsetHeight);
console.log(descHeight);


gsap.to(".page-section.long", {
    scrollTrigger: {
        trigger: ".page-section.long",
        start: "top 20%",
        end: "bottom +=1000",
        scrub: true,
        pin: true,
        pinSpacing: false,
        markers: true,
    }
}
);

// titles.forEach((title, index) => {
//     gsap.to(title, {
//         color: "#fff",
//         scale: 1.2,

//         scrollTrigger: {
//             trigger: ".page-section.third",
//             start: () => {
//                 const percent = (index / totalTitles) * 5000;
//                 return `center+=${percent} center`;
//             },
//             end: () => {
//                 const percent = ((index + 1) / totalTitles) * 5000;
//                 return `center+=${percent} center`;
//             },
//             pinContainer: ".page-section.third",
//             scrub: true,
//         }
//     })
// });

// gsap.to(".page-section.last", {
//     scrollTrigger: {
//         trigger: ".page-section.third",
//         pin: true,
//         start: "top bottom",
//         markers: true,
//     }
// })