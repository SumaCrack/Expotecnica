function App() {
    this.carruselList = document.querySelector('#carrusel-list');
    this.carruselTrack = document.querySelector('#track');
    this.carrusels = this.carruselTrack.querySelectorAll('.carrusel');
    this.carruselWidth = this.carrusels[0].offsetWidth;
    this.trackWidth = this.carruselTrack.offsetWidth;
    this.listWidth = this.carruselList.offsetWidth;

    this.prevButton = document.querySelector('#button-prev');
    this.nextButton = document.querySelector('#button-next');

    this.carruselTrack.style.left = '0px';
    this.currentPosition = 0;
    this.currentSlide = 0;

    this.setEventListeners();
    this.cloneNodes();
}

App.prototype.setEventListeners = function() {
    this.prevButton.addEventListener('click', this.processingButton.bind(this));
    this.nextButton.addEventListener('click', this.processingButton.bind(this));
}

App.prototype.cloneNodes = function() {
    const firstCarruselClone = this.carrusels[0].cloneNode(true);
    const lastCarruselClone = this.carrusels[this.carrusels.length - 1].cloneNode(true);

    this.carruselTrack.appendChild(firstCarruselClone);
    this.carruselTrack.insertBefore(lastCarruselClone, this.carrusels[0]);

    this.carrusels = this.carruselTrack.querySelectorAll('.carrusel');
    this.carruselTrack.style.left = `-${this.carruselWidth}px`;
}

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    btn.dataset.button == "button-prev" ? this.prevAction() : this.nextAction();
}

App.prototype.resetPosition = function() {
    if (this.currentPosition === 0) {
        this.carruselTrack.style.transition = 'none';
        this.currentPosition = -(this.carrusels.length - 2) * this.carruselWidth;
        this.carruselTrack.style.left = `${this.currentPosition}px`;
    } else if (this.currentPosition === -(this.carrusels.length - 1) * this.carruselWidth) {
        this.carruselTrack.style.transition = 'none';
        this.currentPosition = -this.carruselWidth;
        this.carruselTrack.style.left = `${this.currentPosition}px`;
    }
}

App.prototype.prevAction = function() {
    if (this.currentPosition < 0) {
        this.currentPosition += this.carruselWidth;
        this.carruselTrack.style.transition = 'left 0.5s ease-in-out';
        this.carruselTrack.style.left = `${this.currentPosition}px`;
        setTimeout(() => this.resetPosition(), 500);
    }
}

App.prototype.nextAction = function() {
    if (this.currentPosition > -(this.carrusels.length - 1) * this.carruselWidth) {
        this.currentPosition -= this.carruselWidth;
        this.carruselTrack.style.transition = 'left 0.5s ease-in-out';
        this.carruselTrack.style.left = `${this.currentPosition}px`;
        setTimeout(() => this.resetPosition(), 500);
    }
}

window.onload = function(event) {
    var app = new App();
    window.app = app;
}

