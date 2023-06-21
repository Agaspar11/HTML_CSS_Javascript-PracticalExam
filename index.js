const container = document.getElementById('video-container');
const contentContainer = document.querySelector('#video-container .content-container');
const femaleCharacter = document.querySelector('.female-character');
const headline1 = document.querySelector('.headline1');
const headline2 = document.querySelector('.headline2');
const subheadline = document.querySelector('.subheadline');
const learnMore = document.querySelector('.learn-more');
const logo = document.querySelector('.logo');
const replay = document.querySelector('.replay');

// Function to reset the elements to their initial state
function resetElements() {
  femaleCharacter.style.opacity = '0';
  headline1.style.opacity = '0';
  headline1.style.transform = 'translate(-50%, -30%) scale(0)';
  headline1.style.left = '-600px';
  headline1.classList.remove('zoom-out');
  headline1.classList.remove('zoom-in-outro');
  headline1.classList.remove('slide-in-left');
  headline2.style.transform = 'translate(1000%, -100%)';
  subheadline.style.opacity = '0';
  learnMore.style.opacity = '0';
  logo.style.opacity = '0';
  logo.style.transform = 'translate(-100%, -50%)';
  replay.style.opacity = '0';
}

// Function to play the animation
function playAnimation() {
  resetElements();

  // Fade in female character with a delay of 1 second
  setTimeout(() => {
    femaleCharacter.style.opacity = '1';
  }, 1000);

  // Fade out female character
  setTimeout(() => {
    femaleCharacter.style.opacity = '0';
  }, 3000);

  // Delay and then animate headline1 from outside to inside
  setTimeout(() => {
    headline1.style.opacity = '1';
    headline1.style.transform = 'translate(-50%, -30%) scale(1)';
    headline1.style.left = '80%';
    headline1.classList.add('slide-in-left');
  }, 1000);

  setTimeout(() => {
    headline1.classList.add('zoom-in-outro');
  }, 1000);

  // Fade out headline1 at the end of the zoom-in animation
  setTimeout(() => {
    headline1.style.opacity = '0';
  }, 4000);

  // Slide in headline2 from right
  setTimeout(() => {
    headline2.style.transform = 'translate(-50%, 0)';
  }, 3000);

  // Display subheadline on the right side
  setTimeout(() => {
    subheadline.style.opacity = '1';
  }, 4000);

  // Display learn more below subheadline
  setTimeout(() => {
    learnMore.style.opacity = '1';
  }, 5000);

  // Display logo on the top right of subheadline
  setTimeout(() => {
    logo.style.opacity = '1';
    logo.style.transform = 'translate(0, -50%)';
  }, 6000);

  // Display replay below learn more
  setTimeout(() => {
    replay.style.opacity = '1';
  }, 7000);

  // Zoom out and fade out headline1 at the end
  setTimeout(() => {
    headline1.classList.add('zoom-out');
  }, 8000);
}

// Replay animation when replay is clicked
replay.addEventListener('click', () => {
  replay.style.pointerEvents = 'none';

  // Reset all elements to initial state
  resetElements();

  setTimeout(() => {
    // Reset container scroll position
    container.scrollTop = 0;

    // Call the playAnimation function after a brief delay to restart the animation
    setTimeout(() => {
      playAnimation();
      replay.style.pointerEvents = 'auto';
    }, 1000);
  }, 1000);
});

// Initial animation play
playAnimation();