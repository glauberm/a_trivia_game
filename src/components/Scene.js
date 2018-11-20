import Wall from './Wall';
import Cube from './Cube';

class Scene {
  constructor(correctExpression, correctResult) {
    new Wall(correctExpression);
    new Cube(correctResult);
  }
}

export default Scene;