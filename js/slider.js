const SLIDER_WIDTH = 1989;
const SECTION_PADDING = 8;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slider = document.querySelector('.slider');
const sectionElement = document.querySelector('.slider-section');
const wrapperElement = document.querySelector('#slider-wrapper');
let wrapperMargin;
let amountSteps;
let sliderOffset;
let currentStep = 0;
let currentOffset = 0;

if (wrapperElement) {
  wrapperMargin = parseFloat(window.getComputedStyle(wrapperElement).marginLeft);
}

const getStep = () => {
  const sectionWidth = sectionElement.getBoundingClientRect().width;
  amountSteps = sectionWidth < 768 ? 6 : 3;

  return (SLIDER_WIDTH - sectionWidth) / amountSteps;
}

const initializeSlider = () => {
  currentStep = 0;
  currentOffset = 0;
  slider.style.transform = `translate(0px)`;
  prevBtn.classList.add('inactive');
  nextBtn.classList.remove('inactive');
  sliderOffset = getStep();
};

const onNextClick = () => {
  if (currentStep === 0) {
    prevBtn.classList.remove('inactive');
    currentOffset = 2 * wrapperMargin + 2 * SECTION_PADDING;
  }

  currentOffset += sliderOffset;
  currentStep += 1;
  slider.style.transform = `translate(-${currentOffset}px)`;

  if (currentStep === amountSteps) {
    nextBtn.classList.add('inactive');
  }
}

const onPrevClick = () => {
  if (currentStep === 3) {
    nextBtn.classList.remove('inactive');
  }

  currentOffset -= sliderOffset;
  currentStep -= 1;
  prevBtn.classList.remove('inactive');
  
  if (currentStep === 0) {
    prevBtn.classList.add('inactive');
    currentOffset = 0;
  }
  slider.style.transform = `translate(-${currentOffset}px)`;
}

if (slider) {
  window.addEventListener('resize', () => {
    wrapperMargin = parseFloat(window.getComputedStyle(wrapperElement).marginLeft);
    initializeSlider();
  });
  
  nextBtn.addEventListener('click', onNextClick);
  prevBtn.addEventListener('click', onPrevClick);
  initializeSlider();
}

