var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// // video player
// const player = document.querySelector('.player');
// console.log(player);
// const video = player.querySelector('.player-video');
// const progress = player.querySelector('.progress');
// const progressFilled = player.querySelector('.filled-progress');
// const toggle = player.querySelector('.toggle-play');
// const skippers = player.querySelectorAll('[data-skip]');
// const ranges = player.querySelectorAll('.player-slider');
//
// // Logic
// function togglePlay() {
//   const playState = video.paused ? 'play' : 'pause';
//   video[playState](); // Call play or paused method
// }
//
// function updateButton() {
//   const togglePlayBtn = document.querySelector('.toggle-play');
//
//   if(this.paused) {
//     togglePlayBtn.innerHTML = `<svg class="" width="16" height="16" viewBox="0 0 16 16"><title>play</title><path d="M3 2l10 6-10 6z"></path></svg>`;
//   } else {
//     togglePlayBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16"><title>pause</title><path d="M2 2h5v12H2zm7 0h5v12H9z"></path></svg>`;
//   }
// }
//
// function skip() {
//   video.currentTime += parseFloat(this.dataset.skip);
// }
//
// function rangeUpdate() {
//   video[this.name] = this.value;
// }
//
// function progressUpdate() {
//   const percent = (video.currentTime / video.duration) * 100;
//   progressFilled.style.flexBasis = `${percent}%`;
// }
//
// function scrub(e) {
//   const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
//   video.currentTime = scrubTime;
// }
//
// // Event listeners
// video.addEventListener('click', togglePlay);
// video.addEventListener('play', updateButton);
// video.addEventListener('pause', updateButton);
// video.addEventListener('timeupdate', progressUpdate);
//
// toggle.addEventListener('click', togglePlay);
// skippers.forEach(button => button.addEventListener('click', skip));
// ranges.forEach(range => range.addEventListener('change', rangeUpdate));
// ranges.forEach(range => range.addEventListener('mousemove', rangeUpdate));
//
// let mousedown = false;
// progress.addEventListener('click', scrub);
// progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
// progress.addEventListener('mousedown', () => mousedown = true);
// progress.addEventListener('mouseup', () => mousedown = false);

//slideshow code
var slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//dropdown sidenav
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("mouseenter", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
