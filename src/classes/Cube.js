class Cube {
  constructor() {
    // this.setCubes(correctResult);
    this.handleCubeFaceClick();
  }

  // setCubes(correctResult) {
  //   const cubes = document.getElementsByClassName('cube__inner');
  //   const correctIndex = Utils.getRandomInt(0, 3);

  //   for (let i = 0; i < cubes.length; i++) {
  //     const cubeText = cubes[i].getElementsByClassName('cube__text');

  //     if (i === correctIndex) {
  //       for (let i = 0; i < cubeText.length; i++) {
  //         cubeText[i].textContent = correctResult;
  //       }
  //     } else {
  //       const expression = new AlgebraicExpression(correctResult, null, true);
        
  //       for (let i = 0; i < cubeText.length; i++) {
  //         cubeText[i].textContent = expression.getResult();
  //       }
  //     }
  //   }
  // }

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
    const cube = e.target.parentElement;
    const surface = cube.parentElement.parentElement.parentElement;

    cube.classList.add('cube__core--selected');
    surface.classList.add('surface__core--selected');
    surface.parentElement.parentElement.classList.add('surface--active');
    
    document.getElementById('wall').classList.add('wall--active');
    document.getElementById('timer').classList.add('timer--active');
    document.getElementById('light').classList.add('light--active');
    document.getElementById('scene').classList.add('scene--paused');
    document.getElementById('spotlight').classList.add('spotlight--active');
    document.getElementById('shadow').classList.add('shadow--active');
  }
}

export default Cube;