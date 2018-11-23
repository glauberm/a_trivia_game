class Wall {
  action() {
    document.getElementById('wall').classList.add('wall--active');
  }

  cut() {
    document.getElementById('wall').classList.remove('wall--active');
  }
}

export default Wall;