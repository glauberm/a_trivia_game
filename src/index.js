import Scene from './classes/Scene';
import Api from './services/Api';
import './main.css';

Api.getRequest()
  .then((response) => {
    const result = response.results[0];
    const question = result.question;
    const correctAnswer = result.correct_answer;
    const incorrectAnswers = result.incorrect_answers;

    console.log(result);
  });

document.addEventListener('DOMContentLoaded', function () {
  new Scene();
});



  