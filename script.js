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

let tl2 = gsap.timeline({ onComplete: endAnimation });
tl2
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
// const descs = document.querySelector(".desc-list");
const titles = gsap.utils.toArray(".title-list-item");
const descriptions = gsap.utils.toArray(".desc-list-item")
const totalTitles = titles.length;

// const descHeight = Math.floor(descs.offsetHeight);
// const descHeight = descs.offsetHeight;
// console.log(descHeight * totalTitles);
// const descItemHeight = (descHeight * totalTitles) + "px";
// console.log(descItemHeight);



// const mainTrigger = ScrollTrigger.create({
//     trigger: ".page-section.long",
//     start: "top top",
//     end: "bottom bottom",
//     markers: true,
// })


const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page-section.long",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        markers: true,
        onUpdate: (self) => {
            const progress = self.progress;
            const currentIndex = Math.floor(progress * totalTitles);
            const clampedIndex = Math.min(currentIndex, totalTitles - 1);

            upadateActiveElements(clampedIndex);
        }
    }
});

let currentActiveIndex = 0;

const upadateActiveElements = (index) => {
    if (index === currentActiveIndex) return;

    titles.forEach((title, i) => {
        if (i === index) {
            title.classList.add("active");
            gsap.to(title, {
                scale: 1.1,
                duration: 0.3,
                ease: "power2.out"
            });
        } else {
            title.classList.remove("active");
            gsap.to(title, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        }
    });


    if(currentActiveIndex !== index && currentActiveIndex >= 0){
        const currentDesc = descriptions[currentActiveIndex];
        gsap.to(currentDesc, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
                currentDesc.classList.remove("active");
                currentDesc.style.poiunterEvents = "none";
            }
        })
    }

    const newDesc = descriptions[index];
    newDesc.style.pointerEvents = "auto";
    gsap.to(newDesc, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        onStart: () => {
            newDesc.classList.add("active");
        }
    });

    currentActiveIndex = index;

    // descriptions.forEach((desc, i) => {
    //     if (i === index) {
    //         desc.classList.add("active");
    //         gsap.to(desc, {
    //             opacity: 1,
    //             y: 0,
    //             duration: 0.5,
    //             ease: "power2.out"
    //         });
    //     } else {
    //         desc.classList.remove("active");
    //         gsap.to(desc, {
    //             opacity: 0,
    //             y: 20,
    //             duration: 0.3,
    //             ease: "power2.out"
    //         })
    //     }
    // });
};


gsap.set(descriptions, { opacity: 0, y: 20 });
gsap.set(descriptions[0], { opacity: 1, y: 0 });


// gsap.to(".page-section.long", {
//     scrollTrigger: {
//         trigger: ".page-section.long",
//         start: "top 20%",
//         end: "bottom bottom",
//         scrub: true,
//         pin: true,
//         pinSpacing: false,
//         markers: fetch,
//     }
// }
// );

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

// const tl = gsap.timeLine({
//     scrollTrigger: {
//         trigger: ".page-section.third",
//         start: "top top",
//         end: "+=500%",
//         scrub: true,
//         pin: true,
//         pinSpacing: false,
//         pinContainer: ".page-section.long",
//         markers: true,
//     }
// })

// titles.forEach((title, index) => {
//     if(titles[index + 1]){
//         tl.to(title, {
//             color: "#fff",
//             scale: 1.2,
//             duration: 1,
//         }).to(titles[index + 1], {
//             color: "#000",
//             scale: 1,
//             duration: 1,
//         }, "<").to(descs, {yPrecent: -(100 * (index +1)), ease: "none"}, "<")
//     }
// })

// const mainPin = ScrollTrigger.create({
//     trigger: ".page-section.long",
//     start: "top 20%",
//     end: "bottom bottom",
//     pin: true,
//     pinSpacing: false,
//     markers: true,

//       onUpdate: (self) => {
//     console.log('Progress:', self.progress);
//   }
// })
// () => "+=" + descItemHeight,

// let tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".page-section.long",
//         start: "top 20%",
//         end: () => "+=" + descItemHeight,
//         pin: true,
//         scrub: true,
//         markers: {
//             startColor: "blue",
//             endColor: "red",
//         },
//     }
// })

// titles.forEach((title, index) => {
//     if(titles[index + 1]){
//         tl.to(title, {
//             color: "#fff",
//             scale: 1.2,
//             duration: 1,
//         }).to(titles[index + 1], {
//             color: "#000",
//             scale: 1,
//             duration: 1,
//         }, "<").to(descs, {yPrecent: -(100 * (index +1)), ease: "none"}, "<")
//     }
// })