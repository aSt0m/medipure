var time = gsap.timeline();

time.from('#titulo', { duration: 1, x: -150 });
// time.to('.img-article', { duration: .5, scale: 1.42, yoyo: },"-=0.5");
time.from('#paragraph', { duration: 1.5, y: 100, opacity: 0 });
time.from('.container-tel', { duration: 1, opacity: 0, ease: 'bounce'});
time.from('#contrata', { duration: 3, opacity: 0, ease: 'bounce' });

gsap.registerPlugin(ScrollTrigger);

gsap.from(".cards-first", {
    scrollTrigger: ".cards-first", //Inicia la animacion cuando ".texto" entra en el viewport (una vez)
    x: -200,
    duration: 4,
   opacity: 1,
   ease: "power4"

  });
gsap.from(".cards-sec", {
    scrollTrigger: ".cards-sec", //Inicia la animacion cuando ".texto" entra en el viewport (una vez)
    x: 100,
    duration: 2,
   opacity: 0,
   ease: "power1"

  });

gsap.from(".cards-doctor", {
    scrollTrigger: ".cards-doctor", // start the animation when ".box" enters the viewport (once)
    y: -100,
    duration: 1,
   opacity: 0
  });
gsap.from(".card-2", {
    scrollTrigger: ".card-2", // start the animation when ".box" enters the viewport (once)
    y: 100,
    duration: 2,
   opacity: 0
  });
gsap.from(".card-3", {
    scrollTrigger: ".card-3", // start the animation when ".box" enters the viewport (once)
    y: 100,
    duration: 3,
   opacity: 0
  });


gsap.from(".img-article", {
    scrollTrigger: ".img-article", // start the animation when ".box" enters the viewport (once)
    y: 10,
    duration: 1,
   opacity: 0
  });








  