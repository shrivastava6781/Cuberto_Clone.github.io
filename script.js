Shery.mouseFollower();
Shery.makeMagnet(".magnet")
Shery.hoverWithMediaCircle(".hvr",{videos : ["https://cdn.cuberto.com/cb/home/hero/1.mp4"]})
Shery.hoverWithMediaCircle(".hvh",{videos : [" https://cdn.cuberto.com/cb/smfeed/1.mp4"]})


gsap.to(".fleftelem", {
    scrollTrigger: {
      trigger: "#fimages",
      pin: true,
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".last",
      scrub: 1,
    },
    y: "-300%",
    ease: Power1,
  });


let sections = document.querySelectorAll(".fleftelem");
Shery.imageEffect(".images", {
  style: 5,
//   config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
        setScroll(prog.progress + index);
        },
      });
    });
  },
});

Shery.imageEffect(".design", {
  style: 1,
  config: { onMouse: { value: 1 } },
});

gsap.to(".box", { 
  rotation: 360,
  duration: 6, 
  repeat: -1,
  ease: "none",
});
