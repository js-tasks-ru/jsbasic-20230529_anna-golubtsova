function initCarousel() {
  const carouselElement = document.querySelector('.carousel');
  const carouselRightArrowButton = carouselElement.querySelector('.carousel__arrow_right');
  const carouselLeftArrowButton = carouselElement.querySelector('.carousel__arrow_left');
  const carouselInnerElement = document.querySelector(".carousel__inner");
  const countSlideLength = document.querySelectorAll('.carousel__slide').length;
  let counterIndex = 1;

  if (counterIndex === 1) {
    carouselLeftArrowButton.style.display = 'none';
  }

  carouselElement.addEventListener("click", (event) => {
    const carouselSLideElement = carouselInnerElement.querySelector(".carousel__slide");
    const slideWidth = carouselSLideElement.offsetWidth;

    if (counterIndex === 0) {
      carouselLeftArrowButton.style.display = 'none';
      counterIndex++;
    }

    if (event.target.closest(".carousel__arrow_right")) {
      carouselInnerElement.style.transform = `translateX(${-slideWidth * counterIndex}px)`;

      counterIndex++;

      if (counterIndex === countSlideLength) {
        carouselRightArrowButton.style.display = 'none';
        counterIndex--;
      }

      carouselLeftArrowButton.style.display = ''; 
    }
    
    if (event.target.closest(".carousel__arrow_left")) {
      counterIndex--;
      carouselInnerElement.style.transform = `translateX(${-slideWidth * counterIndex}px)`;
      carouselRightArrowButton.style.display = ''; 
    }
  });    
}