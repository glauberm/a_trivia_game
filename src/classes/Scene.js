import Utils from './Utils';
import AlgebraicExpression from './AlgebraicExpression';

class Scene {
  constructor(correctExpression, correctResult) {
    this.setTitle(correctExpression);
    this.setCubes(correctResult);
    this.handleCubeFaceClick();
  }

  setTitle(correctExpression) {
    const documentTitle = document.title;
    const titleElement = document.getElementById('title');
    const title = correctExpression + ' = ?';

    document.title = title + ' • ' + documentTitle;
    titleElement.textContent = title;
  }

  setCubes(correctResult) {
    const cubes = document.getElementsByClassName('cube__inner');
    const correctIndex = Utils.getRandomInt(0, 3);

    for (let i = 0; i < cubes.length; i++) {
      const cubeText = cubes[i].getElementsByClassName('cube__text');

      if (i === correctIndex) {
        for (let i = 0; i < cubeText.length; i++) {
          cubeText[i].textContent = correctResult;
        }
      } else {
        const expression = new AlgebraicExpression(correctResult, null, true);
        
        for (let i = 0; i < cubeText.length; i++) {
          cubeText[i].textContent = expression.getResult();
        }
      }
    }
  }

  handleCubeFaceClick() {
    const cubeFace = document.getElementsByClassName('cube__face');

    for (let i = 0; i < cubeFace.length; i++) {
      cubeFace[i].addEventListener(
        'mousedown',
        (e) => { this.handleCubeSelect(e); }
      );
    }
  }

  handleCubeSelect(e) {
    const wall = document.getElementById('wall');
    const light = document.getElementById('light');
    const scene = document.getElementById('scene');
    const spotlight = document.getElementById('spotlight');
    const shadow = document.getElementById('shadow');
    const cube = e.target.parentElement;
    const surface = cube.parentElement.parentElement.parentElement;
    
    wall.classList.add('wall--active');
    light.classList.add('light--active');
    scene.classList.add('scene--paused');
    spotlight.classList.add('spotlight--active');
    shadow.classList.add('shadow--active');
    cube.classList.add('cube__core--selected');
    surface.classList.add('surface__core--selected');
    surface.parentElement.parentElement.classList.add('surface--active');
  }
}

export default Scene;