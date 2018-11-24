class Light {
  constructor() {
    this.light = document.getElementById('light');
  }

  action() {
    this.light.classList.add('light--active');
  }

  cut() {
    this.light.classList.remove('light--active');
  }
}

export default Light;