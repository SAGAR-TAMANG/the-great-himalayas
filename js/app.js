const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0,
  yValue = 0;

window.addEventListener("mousemove", (e) => {
  // if (timeline.isActive()) return false;
  
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

  parallax_el.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;

    let isLeft =
      parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
    let zValue =
      (e.clientX - parseFloat(getComputedStyle(el).left)) * isLeft * 0.1;

    el.style.transform = `translateX(calc(-50% + ${
      xValue * speedx
    }px)) translateY(calc(-50% + ${
      yValue * speedy
    }px)) perspective(2000px) translateZ(${zValue}px)`;
  });
});

// GSAP Animation

let timeline = gsap.timeline();

// parallax_el.forEach((el) => {
//   timeline.from(el, {
//     top: `${el.offsetHeight / 2 + el.dataset.distance}px`,
//     duration: 1.5,
//   });
// });

timeline
  .from(
    ".text h1",
    {
      y:
        window.innerHeight -
        document.querySelector(".text h1").getBoundingClientRect().top,
      duration: 3,
    },
    "0.5"
  )
  .from(
    ".text h2",
    {
      y: -150,
      opacity: 0,
      duration: 3,
    },
    "0.5"
  )
  .from(
    ".hide",
    {
      opacity: 0,
      duration: 3,
    },
    "0.5  "
  );
