const mirrortryOnContainer = document.querySelector('.try__on__overlay');
const tryOnStartBtn = document.querySelector('.try__on__start_btn');
const tryOnCloseBtn = document.querySelector('.close_try_on');
const tryOnCloseOverlay = document.querySelector('.overlay_try_on');

const startTryOn = () => {
  mirrortryOnContainer.classList.add('active_tryon_mirror');
  document.body.classList.add('noscroll');
  mirrorTryOn();
};
const stopTryOn = () => {
  JEELIZVTOWIDGET.pause();
  mirrortryOnContainer.classList.remove('active_tryon_mirror');
  document.body.classList.remove('noscroll');
  mirrorTryOn();
};
if (mirrortryOnContainer) {
  tryOnStartBtn.addEventListener('click', startTryOn);
  tryOnCloseBtn.addEventListener('click', stopTryOn);
  tryOnCloseOverlay.addEventListener('click', stopTryOn);
}