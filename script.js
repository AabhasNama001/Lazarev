// For smooth scrolling effect use locomotive.Firstly go to locomotive js cdn and copy the url of js & paste to script file and
// then copy the url of css file and paste to link(css). Then search locomotive scrolltrigger codepen and copy the js code
// and paste to script.js. Now remove the whole code written under the Red Panel in the below code.
function locomotiveScrolling() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
  });

  // --- RED PANEL ---

  // --- ORANGE PANEL ---

  // --- PURPLE/GREEN PANEL ---

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
locomotiveScrolling();

function landingPageAnimation() {
  var tl = gsap.timeline();
  tl.from("#page1", {
    opacity: 0,
    duration: 0.3,
    delay: 0.2,
  });

  tl.from("#page1", {
    transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
    duration: 1,
    ease: "expo.out",
  });

  tl.from("nav", {
    opacity: 0,
    delay: -0.2,
  });

  tl.from("#page1 h1 , #page1 p , #page1 div", {
    opacity: 0,
    duration: 0.3,
    stagger: 0.2,
  });
}
landingPageAnimation();

function navAnimation() {
  var nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();

    tl.to("#nav-bottom", {
      height: "19vh",
    });

    tl.to(".nav-part2 h5", {
      display: "block",
    });

    tl.to(".nav-part2 h5 span", {
      y: 0,
      stagger: {
        amount: 0.6,
      },
    });
  });

  nav.addEventListener("mouseleave", function () {
    var tl = gsap.timeline();
    tl.to(".nav-part2 h5 span", {
      y: 25,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".nav-part h5", {
      display: "none",
      duration: 0.1,
    });

    tl.to("#nav-bottom", {
      height: 0,
      duration: 0.2,
    });
  });
}
navAnimation();

function page2Animation() {
  var rightElems = document.querySelectorAll(".right-elem");

  rightElems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });

    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });

    elem.addEventListener("mousemove", function (dets) {
      gsap.to(elem.childNodes[3], {
        // getBoundingClientRect is used to locate the mouse.Matlab jaha mouse ja rha hai wahan ki location
        // btaata haiiiiiiii.
        x: dets.x - elem.getBoundingClientRect().x - 100,
        y: dets.y - elem.getBoundingClientRect().y - 170,
      });
    });
  });
}
page2Animation();

function page3VideoAnimation() {
  var page3Center = document.querySelector(".page3-center");
  var video = document.querySelector("#page3 video");

  page3Center.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
    });
  });

  video.addEventListener("click", function () {
    video.pause();
    gsap.to(video, {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: "30px",
    });
  });
}
page3VideoAnimation();

function page6VideoAnimation() {
  var sections = document.querySelectorAll(".sec-right");

  sections.forEach(function (elem) {
    elem.addEventListener("mousemove", function () {
      elem.childNodes[3].style.opacity = 1;
      elem.childNodes[3].play();
    });

    elem.addEventListener("mouseleave", function () {
      elem.childNodes[3].style.opacity = 0;
      elem.childNodes[3].load();
    });
  });
}
page6VideoAnimation();

function movingOfTabsOnScrolling() {
  gsap.from("#bottom8-part2 h4", {
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#bottom8-part2",
      scroller: "#main",
      // markers: true,
      start: "top 80%",
      end: "top 10%",
      scrub: true,
    },
  });
  gsap.from("#bottom8-part3 h4", {
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#bottom8-part3",
      scroller: "#main",
      // markers: true,
      start: "top 80%",
      end: "top 10%",
      scrub: true,
    },
  });
  gsap.from("#bottom8-part4 h4", {
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#bottom8-part4",
      scroller: "#main",
      // markers: true,
      start: "top 80%",
      end: "top 10%",
      scrub: true,
    },
  });
}
movingOfTabsOnScrolling();
