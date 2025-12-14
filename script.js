gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin);
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

// Dodanie wywolania funkcji po zakonczeniu animacji
// let tl2 = gsap.timeline({ onComplete: endAnimation }); 

const countdownNumbers = gsap.utils.toArray([".countdown-n3", ".countdown-n2", ".countdown-n1", ".countdown-go"]);

const countdown = () => {
    let numberTl = gsap.timeline();
    countdownNumbers.forEach((selector, index) => {
        numberTl.from(selector, { opacity: 0, duration: 1, ease: "power2.out" })
            .to(selector, { opacity: 0, duration: 0.5, ease: "power2.in", delay: 1 });
    });
};

gsap.set(countdownNumbers, { opacity: 0 });
gsap.set(".first .container-body h1", { opacity: 0, x: -1000 });
gsap.set(".first .container-body h2", { opacity: 0, x: -1000 });
gsap.set(".countdown-ready", { opacity: 0, x: -1000 });
gsap.set(".countdown-go", { opacity: 0 });
gsap.set(".go-scroll", { opacity: 0 });

let tl2 = gsap.timeline();
tl2
    .to(".first .container-body h1", { x: 0, opacity: 1, visibility: "visible", duration: 1, ease: "power2.out", delay: 0.5 })
    .to(".first .container-body h2", { x: 0, opacity: 1, visibility: "visible", duration: 1, ease: "power2.out" }, "-=0.5")
    .to(".countdown-ready", { x: 0, opacity: 1, visibility: "visible", duration: 1, ease: "power2.out" }, "-=0.5")
    .to(".countdown-ready", { x: 0, opacity: 0, duration: 0.5, ease: "power2.in", delay: 0.5 })
    .to(".countdown-n3", { opacity: 1, visibility: "visible", scale: 1, duration: 0.3, ease: "power2.out" })
    .to(".countdown-n3", { opacity: 0, scale: 1.3, duration: 0.3, ease: "power2.out", delay: 0.6 })
    .to(".countdown-n2", { opacity: 1, visibility: "visible", scale: 1, duration: 0.3, ease: "power2.out" })
    .to(".countdown-n2", { opacity: 0, scale: 1.3, duration: 0.3, ease: "power2.out", delay: 0.6 })
    .to(".countdown-n1", { opacity: 1, visibility: "visible", scale: 1, duration: 0.3, ease: "power2.out" })
    .to(".countdown-n1", { opacity: 0, scale: 1.3, duration: 0.3, ease: "power2.out", delay: 0.6 })
    .to(".countdown-go", { opacity: 1, visibility: "visible", duration: 0.5, ease: "power2.out" })
    .to(".go-scroll", { opacity: 1, visibility: "visible", duration: 1, ease: "power2.out" }, "+=0.5")
// gsap.set(descriptions[0], { opacity: 1, y: 0 });




gsap.from(".page-section.second", {
    x: "-1000px",
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".page-section.second",
        start: "top 98%",
        end: "bottom center",
        toggleActions: "play none none none",
    }
});
// const descs = gsap.utils.toArray(".description");
// const descs = document.querySelector(".desc-list");
const titles = gsap.utils.toArray(".title-list-item");
const descriptions = gsap.utils.toArray(".desc-list-item");
const images = gsap.utils.toArray(".desc-list-images__item");
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
        // markers: true,
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


    if (currentActiveIndex !== index && currentActiveIndex >= 0) {
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
        });

        const currentImage = images[currentActiveIndex];
        gsap.to(currentImage, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
                currentImage.classList.remove("active");
                currentImage.style.pointerEvents = "none";
            }
        });
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

    const newImage = images[index];
    newImage.style.pointerEvents = "auto";
    gsap.to(newImage, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        onStart: () => {
            newImage.classList.add("active");
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



// Features section

const featuresTitles = gsap.utils.toArray(".features-title-item");
const featureDescriptions = gsap.utils.toArray(".features-descs-item");
const featureImages = gsap.utils.toArray(".features-images__item");
const featureTotalTitles = featuresTitles.length;
let isNavigating = false;

const featTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page-section.features",
        start: "center center",
        end: "+=1000",
        pin: true,
        scrub: true,
        pinSpacing: true,
        markers: true,
        onUpdate: (self) => {
            if(isNavigating) return;
            const progress = self.progress;
            const currentIndex = Math.floor(progress * featureTotalTitles);
            const clampedIndex = Math.min(currentIndex, featureTotalTitles - 1);

            upadateFeatureActiveElements(clampedIndex);
        }
    }
});

let currentFeatureActiveIndex = 0;

const upadateFeatureActiveElements = (index) => {
    console.log("Updating to index:", index);
    if (index === currentFeatureActiveIndex) return;

    featuresTitles.forEach((title, i) => {
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


    if (currentFeatureActiveIndex !== index && currentFeatureActiveIndex >= 0) {
        const currentDesc = featureDescriptions[currentFeatureActiveIndex];
        gsap.to(currentDesc, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
                currentDesc.classList.remove("active");
                currentDesc.style.poiunterEvents = "none";
            }
        });

        const currentImage = featureImages[currentFeatureActiveIndex];
        gsap.to(currentImage, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
                currentImage.classList.remove("active");
                currentImage.style.pointerEvents = "none";
            }
        });
    }

    const newDesc = featureDescriptions[index];
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

    const newImage = featureImages[index];
    newImage.style.pointerEvents = "auto";
    gsap.to(newImage, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        onStart: () => {
            newImage.classList.add("active");
        }
    });

    currentFeatureActiveIndex = index;

};

gsap.set(featureDescriptions, { opacity: 0, y: 20 });
gsap.set(featureDescriptions[0], { opacity: 1, y: 0 });



const handleTitleClick = (index) => {
    if (index === currentFeatureActiveIndex) return;

    const st = featTl.scrollTrigger;
    isNavigating = true;
    
    upadateFeatureActiveElements(index);

    const scrollStart = st.start;
    const scrollEnd = st.end;

    const targetProgress = (index + 0.01) / featureTotalTitles;
    const targetScroll = scrollStart + targetProgress * (scrollEnd - scrollStart);

    st.scroll(targetScroll);

    setTimeout(() => {
        isNavigating = false;
    }, 100);
};

featuresTitles.forEach((title, index) => {
    title.addEventListener("click", () => {
        console.log("Clicked title index:", index);
        handleTitleClick(index);
    });
});

// Observer version

// const featureSection = document.querySelector(".page-section.feature");
// const featuresTitles = gsap.utils.toArray(".features-title-item");
// const featureDescriptions = gsap.utils.toArray(".features-descs-item");
// const featureImages = gsap.utils.toArray(".features-images__item");
// const featureTotalTitles = featuresTitles.length;

// let currentFeatureActiveIndex = 0;
// let isAnimating = false;
// // let scrollLocked = false;
// let allowScroll = false;

// let scrollTimeout = gsap.delayedCall(0.5, () => {
//     allowScroll = true;
// }).pause();

// const goToNewElement = (index) => {
//     if (index === currentFeatureActiveIndex) return;

//     isAnimating = true;

//     const oldIndex = currentFeatureActiveIndex;

//     featuresTitles.forEach((title, i) => {
//         if (i === index) {
//             title.classList.add("active");
//             gsap.to(title, {
//                 scale: 1.1,
//                 duration: 0.3,
//                 ease: "power2.out"
//             });
//         } else {
//             title.classList.remove("active");
//             gsap.to(title, {
//                 scale: 1,
//                 duration: 0.3,
//                 ease: "power2.out"
//             });
//         }
//     });

//     if (oldIndex >= 0 && oldIndex < featureDescriptions.length) {
//         const currentDesc = featureDescriptions[oldIndex];
//         gsap.to(currentDesc, {
//             opacity: 0,
//             y: -20,
//             duration: 0.3,
//             ease: "power2.out",
//             onComplete: () => {
//                 currentDesc.classList.remove("active");
//                 currentDesc.style.pointerEvents = "none";
//             }
//         });

//         if (featureImages && featureImages.length && featureImages[oldIndex]) {
//             const currentImage = featureImages[oldIndex];
//             gsap.to(currentImage, {
//                 opacity: 0,
//                 y: -20,
//                 duration: 0.3,
//                 ease: "power2.out",
//                 onComplete: () => {
//                     currentImage.classList.remove("active");
//                     currentImage.style.pointerEvents = "none";
//                 }
//             });
//         }
//     };

//     const newDesc = featureDescriptions[index];
//     console.log(newDesc);
//     newDesc.style.pointerEvents = "auto";
//     gsap.to(newDesc, {
//         opacity: 1,
//         y: 0,
//         duration: 0.5,
//         ease: "power2.out",
//         onStart: () => {
//             newDesc.classList.add("active");
//         },
//         onComplete: () => {
//             isAnimating = false;
//             currentFeatureActiveIndex = index;
//         }
//     });

//     if (featureImages && featureImages.length && featureImages[index]) {
//         const newImage = featureImages[index];
//         newImage.style.pointerEvents = "auto";
//         gsap.to(newImage, {
//             opacity: 1,
//             y: 0,
//             duration: 0.5,
//             ease: "power2.out",
//             onStart: () => {
//                 newImage.classList.add("active");
//             }
//         });
//     }

//     // currentFeatureActiveIndex = index;
// }

// const hanldeScroll = (direction) => {
//     if (isAnimating || !allowScroll) return;

//     allowScroll = false;
//     scrollTimeout.restart(true);

//     if (direction === 1) {
//         console.log('➡️ scroll down');
//         if (currentFeatureActiveIndex < featureTotalTitles - 1) {
//             goToNewElement(currentFeatureActiveIndex + 1);
//         } else {
//             // unlockScroll();
//             preventScroll.disable();
//             intentObserver.disable();
//         }
//     }

//     if (direction === -1) {
//         console.log('⬅️ scroll up');
//         if (currentFeatureActiveIndex > 0) {
//             goToNewElement(currentFeatureActiveIndex - 1);
//         } else {
//             // unlockScroll();
//             preventScroll.disable();
//             intentObserver.disable();
//         }
//     }
// }

// let wheelBlocker = null;

// const preventScroll = ScrollTrigger.observe({
//     preventDefault: true,
//     type: "wheel,touch,pointer,scroll",
//     allowClicks: true,

//     onEnable(self) {
//         self.savedScroll = self.scrollY();

//         // wheelBlocker = (e) => {
//         //     e.preventDefault();
//         //     e.stopPropagation();
//         // }
//         // window.addEventListener("scroll", wheelBlocker, { passive: false, capture: true });

//         const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
//         document.body.style.paddingRight = scrollbarWidth + 'px';
//         document.body.style.overflow = 'hidden';
//     },

//     onDisable(self) {
//         document.body.style.overflow = '';
//         document.body.style.paddingRight = '';

//         // if(wheelBlocker){
//         //     window.removeEventListener("scroll", wheelBlocker, { capture: true });
//         //     wheelBlocker = null;
//         // }
//     },

//     onChangeY(self) {
//         self.scrollY(self.savedScroll);
//     }
// });
// preventScroll.disable();


// const intentObserver = ScrollTrigger.observe({
//     target: window,
//     type: "wheel,touch,pointer",
//     preventDefault: true,
//     // enabled: false,
//     tolerance: 10,
//     // onEnable(self) {
//     //     let savedScroll = self.scrollY();
//     //     self._restoreScroll = () => self.scrollY(savedScroll);
//     //     document.addEventListener("scroll", self._restoreScroll, {passice: false});
//     // },

//     // onDisable(self) {
//     //     document.removeEventListener("scroll", self._restoreScroll);
//     // },
//     onUp: () => hanldeScroll(-1),
//     onDown: () => hanldeScroll(1),
// });
// intentObserver.disable();
// // console.log(intentObserver);

// // const lockScroll = () => {
// //     if (scrollLocked) return;

// //     scrollLocked = true;
// //     intentObserver.enable();
// // }

// // const unlockScroll = () => {
// //     if (!scrollLocked) return;
// //     scrollLocked = false;
// //     intentObserver.disable();
// // }

// ScrollTrigger.create({
//     trigger: featureSection,
//     start: "center center",
//     end: "+=1",
//     markers: true,

//     onEnter: (self) => {
//         // lockScroll();
//         self.scroll(self.start + 1);
//         allowScroll = true;
//         preventScroll.enable();
//         intentObserver.enable();
//     },

//     onEnterBack: (self) => {
//         console.log('◀️ onEnterBack - enabling observer');
//         self.scroll(self.end - 1);
//         currentFeatureActiveIndex = featureTotalTitles - 1;
//         goToNewElement(currentFeatureActiveIndex);
//         // lockScroll();
//         preventScroll.enable();
//         intentObserver.enable();
//     },

// });

// gsap.set(featureDescriptions, { opacity: 0, y: 20 });
// gsap.set(featureDescriptions[0], { opacity: 1, y: 0 });
// featuresTitles[0].classList.add("active");
// featureDescriptions[0].classList.add("active");

// if (featureImages && featureImages.length) {
//     gsap.set(featureImages, { opacity: 0, y: 20 });
//     gsap.set(featureImages[0], { opacity: 1, y: 0 });
//     featureImages[0].classList.add("active");
// }

// intentObserver.disable();

// Video play/pause on scroll

let videoStarted = false;
let videoPaused = false;
const bannerTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".image-srcoll-wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        // markers: true,
        onUpdate: (self) => {
            const video = document.querySelector(".bottom-banner__video");
            const startPlay = 0.55;
            const endPlay = 0.89;

            if (self.progress > startPlay && self.progress < endPlay) {
                if (!videoStarted || videoPaused) {
                    video.muted = true;
                    video.play();
                    videoStarted = true;
                    videoPaused = false;
                }
            } else if (self.progress <= startPlay) {
                if (videoStarted && !videoPaused) {
                    {
                        video.pause();
                        videoPaused = true;
                    }
                }
            }
            else if (self.progress >= endPlay) {
                if (videoStarted && !videoPaused) {
                    {
                        video.pause();
                        videoPaused = true;
                    }
                }
            }
        }
    }
})

bannerTl.to(".bottom-banner__h2", { y: -180, opacity: 0, duration: 0.5 })
    .to(".bottom-banner__h3", { y: 180, opacity: 0, duration: 0.5 }, "<")
    .to(".bottom-banner__body", { backgroundColor: "transparent", duration: 0.8 }, 0.5)



// gsap.from(".page-section.last", {
//     x: "-1000px",
//     opacity: 0,
//     duration: 1,
//     delay: 0.5,
//     ease: "power2.out",
//     scrollTrigger: {
//         trigger: ".image-srcoll-wrapper",
//         start: "top 98%",
//         end: "bottom center",
//         toggleActions: "play none none none",
//     }
// });


// onUpdate: (self) => {
//             if (self.progress > 0.55 && !videoStarted) {
//                 const video = document.querySelector(".bottom-banner__video");
//                 video.muted = true;
//                 video.play();
//                 videoStarted = true;
//             }

//             if (self.progress < 0.55 && videoStarted) {
//                 const video = document.querySelector(".bottom-banner__video");
//                 video.pause();
//                 videoStarted = false;
//             }
//         }





// .call(() => {
//     const video = document.querySelector(".bottom-banner__video");
//     video.muted = true;
//     video.play();
// })

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