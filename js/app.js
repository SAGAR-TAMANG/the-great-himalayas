window.addEventListener("load", function() {
  console.log("Page fully loaded");
  document.getElementById("loading-screen").style.display = "none";
  document.getElementById("main").style.display = "block";
});

function checkScreenWidth() {
  // Get the screen width
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Check if screen width is below a certain threshold (e.g., 768 pixels)
  if (screenWidth < 768) {
    console.log("Small Screen Detected - Please Rotate")
    document.querySelector(".text h3").style.display = "block";
  }
}

window.addEventListener("load", checkScreenWidth);

const parallax_el = document.querySelectorAll(".parallax");
const main = document.querySelector("main");

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

if (window.innerWidth >= 900) {
  console.log("I am in if");
  main.style.maxHeight = `${window.innerWidth * 0.6}px`;
} else {
  console.log("I am in else");
  main.style.maxHeight = `${window.innerWidth * 3}px`;
}

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
    ".text h3",
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


// Particle.js starts

particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 2,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 100,
        "color": "#ffffff",
        "opacity": 1,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.5,
        "direction": "bottom",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 3000,
          "rotateY": 3000
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": ["repulse", "grab"]
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 200,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 200,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 50,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

// Sweet Alerts

const aboutButton = () => {
  Swal.fire({
    title: "Welcome!",
    html: "This is an example of a parallax website. Technologies used: Vanilla HTML CSS JS, font awesome, GSAP, Sweet Alerts, and Particle JS. <a href='https://github.com/SAGAR-TAMANG/the-great-himalayas'>More Details</a>",
    icon: "info"
  });
};
