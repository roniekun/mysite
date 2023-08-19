/* staggered animation */

const boxes = gsap.utils.toArray(".box");
gsap.to(boxes, { duration: 1, x: 100, opacity: 0.5, stagger: 0.2 });
