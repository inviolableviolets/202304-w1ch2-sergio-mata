const slide = document.querySelector('.slide');
const slideImgs = document.querySelectorAll('.slide img');
const sliderDots = document.querySelectorAll('.slider-dots button');
let slideIndex = 1;
let isMoving = false;

slide.insertAdjacentElement('afterbegin', slideImgs[slideImgs.length - 1].cloneNode(true));
slide.insertAdjacentElement('beforeend', slideImgs[0].cloneNode(true));

const handleDots = () => {
  document.querySelector('.slider-dots button.active').classList.remove('active');
  sliderDots[slideIndex - 1].classList.add('active');
}

const moveSlides = () => {
  slide.style.transform = `translateX(-${slideIndex * 100}%)`;
}

const moveHandler = (direction) => {
  slide.style.transition = 'transform .8s ease-in-out';
  isMoving = true;
  if (direction === 'right') {
    slideIndex++;
  } else {
    slideIndex--;
  }
  moveSlides();
}

const resetSliderAuto = () => {
  clearInterval(sliderAuto);
  sliderAuto = setInterval(() => {
    moveHandler('right');
  }, 3500);
}

window.onload = () => moveSlides();

let sliderAuto = setInterval(() => {
  moveHandler('right');
}, 3500);

window.addEventListener('resize', () => {
  const someSliderImg = slide.querySelectorAll('img')[0];
  document.querySelector('.slider').style.maxWidth = someSliderImg.clientWidth;
})

document.querySelector('.slider-btn-left').addEventListener('click', () => {
  if (isMoving) return;
  resetSliderAuto();
  moveHandler('left');
  
});

document.querySelector('.slider-btn-right').addEventListener('click', () => {
  if (isMoving) return;
  resetSliderAuto();
  moveHandler('right');
});

slide.addEventListener('transitionend', () => {
  isMoving = false;
  const slidesArray = slide.querySelectorAll('img');
  if (slideIndex === 0) {
    slide.style.transition = 'none';
    slideIndex = slidesArray.length - 2;
    moveSlides();
  } else if (slideIndex === slidesArray.length - 1) {
    slide.style.transition = 'none';
    slideIndex = 1;
    moveSlides();
  }
  handleDots();
})

sliderDots.forEach(dot => {
  dot.addEventListener('click', e => {
    if (isMoving) {
      setTimeout(() => {
        isMoving = false;
      }, 800);
      return;
    }
    slide.style.transition = 'transform .8s ease-in-out';
    slideIndex = e.target.id;
    isMoving = true;
    handleDots();
    moveSlides();
  })
})
