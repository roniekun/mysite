/* timeline animation */

const tl = gsap.timeline();

const el = element.current;

tl.to(el , { duration: 1, x: 100, opacity: 0.5 })
  .to(el , { duration: 1, y: 50, scale: 1.2 }, "-=0.5");

//fromTo

  tl.fromTo(
    title,
    {
      opacity: 0,
      y: 100,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
    }
  );