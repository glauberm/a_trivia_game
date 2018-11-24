class Wall {
  constructor() {
    this.wall = document.getElementById('wall');
  }
  
  action() {
    this.wall.classList.add('wall--active');
  }

  cut() {
    this.wall.classList.remove('wall--active');
  }
}

export default Wall;