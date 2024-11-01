// assign sequential IDs to slides

var slides = document.querySelectorAll('.slide');

slides.forEach((slide, index) => {
  if (slide.id === '') {
    slide.setAttribute('id', index);
  }
});

var snapToSlideTimeout = null;
var keyScrollTime = 0;

function SnapToSlide() {
  let best = null;
  let bestDistance = Number.MAX_VALUE;
  for (let slide of slides) {
    const rect = slide.getBoundingClientRect();
    const distance = Math.abs(rect.top);
    if (distance < bestDistance) {
      best = slide;
      bestDistance = distance;
    }
  }
  ScrollTo(best, true);
}

document.addEventListener('scroll', (e) => {
  if (snapToSlideTimeout) {
    clearTimeout(snapToSlideTimeout);
  }
  if (Date.now() - keyScrollTime < 2000) {
    return;
  }
  snapToSlideTimeout = setTimeout(SnapToSlide, 500);
});

function CurrentSlide() {
  let currentID = location.hash.split('#')[1];
  if (currentID) {
    return document.getElementById(currentID);
  }
  for (let slide of slides) {
    const rect = slide.getBoundingClientRect();
    if (rect.top >= -innerHeight / 2) {
      return slide;
    }
  }
}

function PrevSlide() {
  let current = CurrentSlide();
  let prev = current.previousElementSibling;
  if (prev && prev.id) {
    return prev;
  }
  return current;
}

function NextSlide() {
  let current = CurrentSlide();
  let next = current.nextElementSibling;
  if (next && next.id) {
    return next;
  }
  return current;
}

function ScrollTo(slide, fromMouse) {
  if (fromMouse) {
  } else {
    keyScrollTime = Date.now();
  }
  slide.scrollIntoView({ behavior: 'smooth' });
  history.replaceState(null, null, '#' + slide.id);
  if (!IsPresentationMode()) {
    RevealAllLayers(slide);
  }
}

function ArrowRight() {
  let current = CurrentSlide();
  let nextLayer = current.querySelector('.layer:not(.shown');
  if (nextLayer) {
    nextLayer.classList.add('shown');
    return;
  }
  ScrollTo(NextSlide());
}

function ArrowLeft() {
  let current = CurrentSlide();
  let prevLayers = current.querySelectorAll('.layer.shown');
  if (prevLayers.length > 0) {
    prevLayers[prevLayers.length - 1].classList.remove('shown');
    return;
  }
  ScrollTo(PrevSlide());
}

function RevealAllLayers(elem) {
  let hiddenLayers = elem.querySelectorAll('.layer:not(.shown');
  for (let layer of hiddenLayers) {
    layer.classList.add('shown');
  }
}

let presentationModeCheck = document.getElementById('presentationMode');
presentationModeCheck.addEventListener('change', (e) => {
  localStorage.setItem('presentationMode', presentationModeCheck.checked);
});
presentationModeCheck.checked = localStorage.getItem('presentationMode') === 'true';

function IsPresentationMode() {
  return presentationModeCheck.checked;
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ' || e.key === 'ArrowDown') {
    if (IsPresentationMode()) {
      ArrowRight();
    } else {
      ScrollTo(NextSlide());
      RevealAllLayers(CurrentSlide());
    }
  } else if (e.key === 'ArrowLeft' || e.key === 'PageUp' || e.key === 'ArrowUp') {
    if (IsPresentationMode()) {
      ArrowLeft();
    } else {
      ScrollTo(PrevSlide());
      RevealAllLayers(CurrentSlide());
    }
  } else if (e.key === 'Home') {
    ScrollTo(slides[0]);
  } else if (e.key === 'End') {
    RevealAllLayers(document.body);
    ScrollTo(slides[slides.length - 1]);
  } else {
    return true;
  }
  e.preventDefault();
  return false;
});