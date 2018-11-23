class Light {
  action() {
    document.getElementById('light').classList.add('light--active');
  }

  cut() {
    document.getElementById('light').classList.remove('light--active');
  }
}

export default Light;