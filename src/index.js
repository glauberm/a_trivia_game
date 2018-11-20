import './main.css';
import AlgebraicExpression from './controllers/AlgebraicExpression';
import Scene from './components/Scene';

document.addEventListener('DOMContentLoaded', function () {
  const correctExpression = new AlgebraicExpression();
  console.log(correctExpression.getResult());

  new Scene(
    correctExpression.getExpression(),
    correctExpression.getResult()
  );
});