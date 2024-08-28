// Get the overlay element
var overlay = document.getElementById("myNav");
// Get the hamburger menu icon
var hamburger = document.getElementById("hamburger");
// Get the close button inside the overlay
var closebtn = document.getElementById("closebtn");

// When the user clicks on the hamburger icon, open the overlay
hamburger.onclick = function() {
  overlay.classList.add("open");
}

// When the user clicks on the close button, close the overlay
closebtn.onclick = function() {
  overlay.classList.remove("open");
}

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
var navbar = document.getElementById("navbar");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

window.onscroll = function() {
  shrinkNavbar();
};

function shrinkNavbar() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.classList.add("small");
  } else {
    navbar.classList.remove("small");
  }
}
let sectionIndex = 1;

function nextSection() {
    // Increment the section index
    sectionIndex++;

    // Change content based on section index
    const sectionNumber = document.querySelector('.section-number');
    const heading = document.querySelector('.left1-content h1');
    const paragraph1 = document.querySelector('.left1-content p:first-of-type');
    const paragraph2 = document.querySelector('.left1-content p:last-of-type');
    const image = document.querySelector('.right1-content img');

    if (sectionIndex === 2) {
        sectionNumber.textContent = '02';
        heading.textContent = 'epillaze Next';
        paragraph1.innerHTML = 'Advanced fat reduction and muscle toning.<sup>3,4</sup>';
        paragraph2.textContent = 'The next-generation solution for body sculpting, providing faster and more effective results.';
        image.src = 'epillaze2.png';  // Change this to the path of your next image
        image.alt = 'epillaze Next Device';
        image.style.width = '50%';
    } else if (sectionIndex === 3) {
        sectionNumber.textContent = '03';
        heading.textContent = 'epillaze Ultimate';
        paragraph1.innerHTML = 'Complete body transformation.<sup>5,6</sup>';
        paragraph2.textContent = 'Experience the ultimate in body sculpting technology with epillaze Ultimate, designed for maximum results.';
        image.src = 'epillaze_ultimate.png';  // Change this to the path of your third image
        image.alt = 'epillaze Ultimate Device';
    } else {
        // Reset to first section when beyond third section
        sectionIndex = 1;
        sectionNumber.textContent = '01';
        heading.textContent = 'epillaze';
        paragraph1.innerHTML = 'Reduce fat. Build muscle.<sup>1,2</sup>';
        paragraph2.textContent = 'Reveal their true potential with a personalized approach to body sculpting. truBody® optimizes results by combining two proven technologies to take your patients beyond their best.';
        image.src = 'epillaze.png';  // Change this to the path of your first image
        image.alt = 'epillaze Device';
    }
}


