gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
    x: 300, // The amount of horizontal movement
    opacity: 0.7, // Target opacity at the end of the animation
    scrollTrigger: {
    trigger: ".box", // Element that triggers the animation
    start: "top 50%", // Animation starts when element is 50% in view
    end: "bottom 50%", // Animation ends when element is 50% out of view
    scrub: true, // Smoothly scrub through animation as you scroll
    markers: true // Display markers for trigger start/end points (debugging)
    }
});

ScrollTrigger.create({
  trigger: ".scroll-trigger",
  start: "top 80%",
  end: "bottom 20%",
  
  onEnter: element => gsap.to(element, { duration: 1, y: 0, opacity: 1 }),
  onLeaveBack: element => gsap.to(element, { duration: 1, y: 50, opacity: 0 }),
});