var typed = new Typed(".typing", {
    strings: ["a Developer.", "an Engineer."],
    typeSpeed: 100,
    loop: true,
    cursorChar: "_",
    backSpeed: 80,
    backDelay: 2000,
  });
  
  ScrollReveal({ reset: false });
  
  var slideRight = {
    duration: 3000,
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    reset: false,
  };
  var slideLeft = {
    duration: 3000,
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    reset: false,
  };
  
  var containerAnimation = {
    duration: 2000,
    origin: "bottom",
    distance: "100px",
    easing: "ease-in-out",
  };
  
  ScrollReveal().reveal(".container_animation", containerAnimation);
  ScrollReveal().reveal(".hero-content", slideLeft);
  ScrollReveal().reveal(".fade_fade", slideLeft);
  ScrollReveal().reveal(".fade_element", slideRight);
  
  ScrollReveal().reveal(".slideUp_1", {
    duration: 2000,
    origin: "bottom",
    distance: "100px",
    easing: "cubic-bezier(.37,.01,.74,1)",
    opacity: 0.01,
    delay: 500,
  });
  ScrollReveal().reveal(".slideUp_2", {
    duration: 2000,
    origin: "bottom",
    distance: "100px",
    easing: "cubic-bezier(.37,.01,.74,1)",
    opacity: 0.01,
    delay: 1000,
  });
  ScrollReveal().reveal(".slideUp_3", {
    duration: 2000,
    origin: "bottom",
    distance: "100px",
    easing: "cubic-bezier(.37,.01,.74,1)",
    opacity: 0.01,
    delay: 1500,
  });
  
  // Hamburger
  const hamburger = document.querySelector("#hamburger");
  const navMenu = document.querySelector("#nav-menu");
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  });
  
  const showOnPx = 400;
  const backToTopButton = document.querySelector(".back_top");
  
  const scrollContainer = () => {
    return document.documentElement || document.body;
  };
  
  document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > showOnPx) {
      backToTopButton.classList.remove("hidden");
    } else {
      backToTopButton.classList.add("hidden");
    }
  });
  
  backToTopButton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
  
  // Fixed navbar
  window.onscroll = function () {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
    if (window.pageYOffset > fixedNav) {
      header.classList.add("fixed-navbar");
    } else {
      header.classList.remove("fixed-navbar");
    }
  };
  
  // Dark mode
  const darkMode = document.querySelector(".check_dark");
  const html = document.querySelector("html");
  darkMode.addEventListener("click", () => {
    if (darkMode.checked) {
      html.classList.add("dark");
      localStorage.theme = 'dark'
    } else {
      html.classList.remove("dark");
      localStorage.theme = 'light'
    }
  });
  
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    darkMode.checked = true;
  } else {
    document.documentElement.classList.remove("dark");
    darkMode.checked = false;
  }
  
  // Age increment ageIncrement
  function hitungUmur(tanggalLahir) {
    var today = new Date();
    var birthDate = new Date(tanggalLahir);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

var tanggalLahir = "2005-11-13";
var umur = hitungUmur(tanggalLahir);
document.querySelector(".ageIncrement").innerText = umur;

window.onload = function() {
    var tanggalLahir = "2005-11-13";
    var umur = hitungUmur(tanggalLahir);
    document.querySelector(".ageIncrement").innerText = umur;
}
  
  // tilt
  ( function( $ ) {
  
      "use strict";
  
    $(".saya_").tilt({
      maxTilt: 15,
      perspective: 1400,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      speed: 1000,
      glare: true,
      maxGlare: 0.2,
      scale: 1.04
    });
    
  }( jQuery ) );

  lightbox.option({
    'resizeDuration': 1000,
    'disableScrolling' : true
  })
