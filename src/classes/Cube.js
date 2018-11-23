import Surface from './Surface';
import Badge from './Badge';

class Cube {
  action(id) {
    this.cube = document.getElementById(id);
    this.cubeWrapper = this.cube.parentElement.parentElement;
    this.surface = new Surface();
    this.badge = new Badge();

    this.cube.classList.add('cube__core--selected');
    this.cubeWrapper.classList.add('cube__wrapper--selected');
    this.surface.action(this.cubeWrapper.parentElement.parentElement);
    this.badge.action(this.cube.nextElementSibling);
  }

  cut() {
    if(this.cube && this.cubeWrapper && this.surface && this.badge) {
      this.cube.classList.remove('cube__core--selected');
      this.cubeWrapper.classList.remove('cube__wrapper--selected');
      this.surface.cut(this.cubeWrapper.parentElement.parentElement);
      this.badge.cut(this.cube.nextElementSibling);
    }
  }
}

export default Cube;