// Navigation Bar Function
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

// Add shadow on navigation bar while scrolling
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");
  const scrollTop = document.documentElement.scrollTop;

  if (scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

// Typing Effect
var typingEffect = new Typed(".typedText", {
  strings: ["a Designer", "a Learner", "a Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 2000
});

// Scroll Reveal Animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

// Home Section
sr.reveal('.featured-text-card', {});
sr.reveal('.featured-name', { delay: 100 });
sr.reveal('.featured-text-info', { delay: 200 });
sr.reveal('.featured-text-btn', { delay: 200 });
sr.reveal('.social_icons', { delay: 200 });
sr.reveal('.featured-image', { delay: 300 });

// Project Box
sr.reveal('.project-box', { interval: 200 });

// Headings
sr.reveal('.top-header', {});

// Scroll Reveal Left Animation
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
});

// About Info Animation
srLeft.reveal('.about-info', { delay: 100 });

// Scroll Reveal Right Animation
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
});

// About Skills Animation
srRight.reveal('.skills-box', { delay: 0 });

// Change Active Link
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.scrollY || window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');
    const navLink = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink.classList.add('active-link');
    } else {
      navLink.classList.remove('active-link');
    }
  });
}

// Debounce function for scroll event
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

window.addEventListener('scroll', debounce(scrollActive));

// Add event listeners for project boxes
const projectBoxes = document.querySelector('.project-container');

projectBoxes.addEventListener('mouseover', function (event) {
  if (event.target.classList.contains('project-box')) {
    event.target.style.transform = 'translateY(-10px)';
    event.target.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
  }
});

projectBoxes.addEventListener('mouseout', function (event) {
  if (event.target.classList.contains('project-box')) {
    event.target.style.transform = 'translateY(0)';
    event.target.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
  }
});