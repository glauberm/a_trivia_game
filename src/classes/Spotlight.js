class Spotlight {
  constructor() {
    this.spotlight = document.getElementById('spotlight');
  }

  action() {
    this.spotlight.classList.add('spotlight--active');
  }

  cut() {
    this.spotlight.classList.remove('spotlight--active');
  }
}

export default Spotlight;