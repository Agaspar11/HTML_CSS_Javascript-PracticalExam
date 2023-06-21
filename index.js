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

// Animations
function playAnimation() {
  resetElements();

  setTimeout(() => {
    femaleCharacter.style.opacity = '1';
  }, 1000);

  setTimeout(() => {
    femaleCharacter.style.opacity = '0';
  }, 3000);

  setTimeout(() => {
    headline1.style.opacity = '1';
    headline1.style.transform = 'translate(-50%, -30%) scale(1)';
    headline1.style.left = '80%';
    headline1.classList.add('slide-in-left');
  }, 1000);

  setTimeout(() => {
    headline1.classList.add('zoom-in-out');
  }, 1000);

  setTimeout(() => {
    headline1.style.opacity = '0';
  }, 4000);

  setTimeout(() => {
    headline2.style.transform = 'translate(-50%, 0)';
  }, 3000);

  setTimeout(() => {
    subheadline.style.opacity = '1';
  }, 4000);

  setTimeout(() => {
    learnMore.style.opacity = '1';
  }, 5000);

  setTimeout(() => {
    logo.style.opacity = '1';
    logo.style.transform = 'translate(0, -50%)';
  }, 6000);

  setTimeout(() => {
    replay.style.opacity = '1';
  }, 7000);

  setTimeout(() => {
    headline1.classList.add('zoom-out');
  }, 8000);
}

// Replay area
replay.addEventListener('click', () => {
  replay.style.pointerEvents = 'none';

  resetElements();

  setTimeout(() => {
    container.scrollTop = 0;

    setTimeout(() => {
      playAnimation();
      replay.style.pointerEvents = 'auto';
    }, 1000);
  }, 1000);
});

playAnimation();