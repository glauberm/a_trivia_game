import './main.css';
import Scene from './classes/Scene';
import AlgebraicExpression from './classes/AlgebraicExpression';

document.addEventListener('DOMContentLoaded', function () {
  const correctExpression = new AlgebraicExpression();
  console.log(correctExpression.getExpression());
  console.log(correctExpression.getResult());

  new Scene(
    correctExpression.getExpression(),
    correctExpression.getResult()
  );
});