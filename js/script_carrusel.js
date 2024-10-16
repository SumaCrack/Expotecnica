class Carousel {
  constructor() {
    this.carouselList = document.querySelector('#carrusel-list');
    this.carouselTrack = document.querySelector('#track');
    this.carousels = this.carouselTrack.querySelectorAll('.carrusel');
    this.carouselWidth = this.carousels[0].offsetWidth;
    this.trackWidth = this.carouselTrack.offsetWidth;
    this.listWidth = this.carouselList.offsetWidth;

    this.prevButton = document.querySelector('#button-prev');
    this.nextButton = document.querySelector('#button-next');

    this.currentPosition = 0;
    this.slidesToShow = Math.floor(this.listWidth / this.carouselWidth);
    this.totalSlides = this.carousels.length;

    this.setInitialPosition();
    this.setEventListeners();
    this.updateButtonVisibility();
  }

  setInitialPosition() {
    this.carouselTrack.style.transform = 'translateX(0)';
  }

  setEventListeners() {
    this.prevButton.addEventListener('click', () => this.move('prev'));
    this.nextButton.addEventListener('click', () => this.move('next'));
  }

  move(direction) {
    if (direction === 'prev' && this.currentPosition < 0) {
      this.currentPosition += this.carouselWidth;
    } else if (direction === 'next' && this.currentPosition > -((this.totalSlides - this.slidesToShow) * this.carouselWidth)) {
      this.currentPosition -= this.carouselWidth;
    }

    this.carouselTrack.style.transform = `translateX(${this.currentPosition}px)`;
    this.updateButtonVisibility();
  }

  updateButtonVisibility() {
    this.prevButton.style.display = this.currentPosition < 0 ? 'block' : 'none';
    this.nextButton.style.display = 
      this.currentPosition > -((this.totalSlides - this.slidesToShow) * this.carouselWidth) ? 'block' : 'none';
  }
}

window.addEventListener('load', () => {
  new Carousel();
});

// Recalculate carousel on window resize
window.addEventListener('resize', () => {
  new Carousel();
});