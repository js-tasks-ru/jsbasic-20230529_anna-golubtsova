import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.render(slides);
    this.switchArrow();
    this.addButtonsHandler();
  }
  
  render() {
    const carousel = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>

      <div class="carousel__inner">
      ${this.addSlidesList()} 
      </div>
    `);
    return carousel;
  }
 
  addSlidesList() {
    return this.slides.map((slide) => {
      const slide2 =`
      <div class="carousel__slide" data-id="${slide.id}">
      <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
        <span class="carousel__price">€${slide.price.toFixed(2)}</span>
        <div class="carousel__title">${slide.name}</div>
        <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>`
    return slide2;
    }).join('');
  }

  switchArrow() {
    const carouselInnerElement = this.elem.querySelector('.carousel__inner')
    const carouselRightArrowButton = this.elem.querySelector(".carousel__arrow_right");
    const carouselLeftArrowButton = this.elem.querySelector(".carousel__arrow_left");
    const carouselSLideElement = this.elem.querySelector(".carousel__slide");
    const countSlideLength = this.elem.querySelectorAll('.carousel__slide').length;
    
    let counterIndex = 1;
  
    if (counterIndex === 1) {
      carouselLeftArrowButton.style.display = 'none';
    }
  
    this.elem.addEventListener("click", (event) => {
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

  addButtonsHandler() {
    const buttonAddElements = this.elem.querySelectorAll('.carousel__button'); 
    buttonAddElements.forEach((button) => {
      button.addEventListener("click", (event) => {
        let myEvent = new CustomEvent('product-add', {
          detail: button.closest('.carousel__slide').dataset.id,
          bubbles: true,
        });
        
        this.elem.dispatchEvent(myEvent);
      });
    });
  }
}
