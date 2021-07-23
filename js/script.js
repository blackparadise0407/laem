$(document).ready(function () {
  $("#fullpage").fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
  });
});

var tl = gsap.timeline({ delay: 0.5 });
tl.from($(".title"), { opacity: 0, duration: 1, x: -1000 });
tl.from($(".sub-title"), { opacity: 0, duration: 1 });
tl.from("#description_above", { opacity: 0, duration: 0.8, x: 500 });
tl.from("#description_laem", { opacity: 0, duration: 0.8 });
tl.from("#description_under", { opacity: 0, duration: 0.8, y: 100 });
