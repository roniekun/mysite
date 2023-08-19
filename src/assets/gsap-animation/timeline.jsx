/* timeline animation */

const tl = gsap.timeline();
tl.to("#element1", { duration: 1, x: 100, opacity: 0.5 })
  .to("#element2", { duration: 1, y: 50, scale: 1.2 }, "-=0.5");