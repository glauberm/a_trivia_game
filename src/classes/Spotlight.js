class Spotlight {
  action() {
    document.getElementById('spotlight').classList.add('spotlight--active');
  }

  cut() {
    document.getElementById('spotlight').classList.remove('spotlight--active');
  }
}

export default Spotlight;