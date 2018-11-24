class Shadow {
  constructor() {
    this.shadow = document.getElementById('shadow');
  }

  action() {
    this.shadow.classList.add('shadow--active');
  }

  cut() {
    this.shadow.classList.remove('shadow--active');
  }
}

export default Shadow;