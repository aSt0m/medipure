var time = gsap.timeline();

time.from('#titulo', { duration: 1, x: -150 });
// time.to('#bot', { duration: 1, scale: 1.12, yoyo: true},"-=0.5");
time.from('#paragraph', { duration: 1.5, y: 100, opacity: 0 });
time.from('#contrata', { duration: 1, opacity: 0, ease: 'bounce' });

gsap.registerPlugin(ScrollTrigger);

gsap.from(".cards-first", {
    scrollTrigger: ".cards-first", //Inicia la animacion cuando ".texto" entra en el viewport (una vez)
    y: 100,
    duration: 2,
   opacity: 0,
   ease: "power1"

  });
gsap.from(".cards-sec", {
    scrollTrigger: ".cards-sec", //Inicia la animacion cuando ".texto" entra en el viewport (una vez)
    x: 100,
    duration: 2,
   opacity: 0,
   ease: "power1"

  });

gsap.from(".card-1", {
    scrollTrigger: ".card-1", // start the animation when ".box" enters the viewport (once)
    y: 100,
    duration: 0.5,
   opacity: 0
  });
gsap.from(".card-2", {
    scrollTrigger: ".card-2", // start the animation when ".box" enters the viewport (once)
    y: 100,
    duration: 1,
   opacity: 0
  });
gsap.from(".card-3", {
    scrollTrigger: ".card-2", // start the animation when ".box" enters the viewport (once)
    y: 100,
    duration: 1.5,
   opacity: 0
  });

gsap.from(".card2-1", {
    scrollTrigger: ".card2-1", // start the animation when ".box" enters the viewport (once)
    x: -100,
    duration: 3,
   opacity: 0
  });
gsap.from(".card2-2", {
    scrollTrigger: ".card2-2", // start the animation when ".box" enters the viewport (once)
    y: 100,
    duration: 3,
   opacity: 0
  });
gsap.from(".card2-3", {
    scrollTrigger: ".card2-3", // start the animation when ".box" enters the viewport (once)
    x: 100,
    duration: 3,
   opacity: 0
  });






// gsap.from(".icono.fluido", {
//     scrollTrigger: ".icono.fluido", // start the animation when ".box" enters the viewport (once)
//     y: 100,
//     duration: 2,
//    opacity: 0
//   });
// gsap.from(".icono.amigable", {
//     scrollTrigger: ".icono.amigable", // start the animation when ".box" enters the viewport (once)
//     x: 100,
//     duration: 2,
//    opacity: 0
//   });

// gsap.from(".texto-2.ventaja", {
//     scrollTrigger: ".texto-2.ventaja", // start the animation when ".box" enters the viewport (once)
//     x: 100,
//     duration: 2,
//     opacity: 0
//   });

  
// gsap.from(".icono.mejora", {
//     scrollTrigger: ".icono.mejora", // start the animation when ".box" enters the viewport (once)
//     x: -100,
//     duration: 2,
//    opacity: 0
//   });

// gsap.from(".icono.oportunidades", {
//     scrollTrigger: ".icono.oportunidades", // start the animation when ".box" enters the viewport (once)
//     y: -100,
//     duration: 2,
//    opacity: 0
//   });
// gsap.from(".icono.marketing", {
//     scrollTrigger: ".icono.marketing", // start the animation when ".box" enters the viewport (once)
//     y: 100,
//     duration: 2,
//    opacity: 0
//   });
// gsap.from(".icono.datos", {
//     scrollTrigger: ".icono.datos", // start the animation when ".box" enters the viewport (once)
//     x: 100,
//     duration: 2,
//    opacity: 0
//   });

//   gsap.from("#comienza", {
//     scrollTrigger: "#comienza", // start the animation when ".box" enters the viewport (once)
//     duration: 2,
//     opacity: 0,
//     scale:2
//   });



  