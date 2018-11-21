import Scene from './classes/Scene';
import { request } from './services/Api';
import './main.css';

let scene = new Scene();

function init() {
  document.getElementById('reboot').removeEventListener('click', init);

  request()
    .then((response) => {
      const result = response.results[0];
      const question = result.question;
      const correctAnswer = result.correct_answer;
      const incorrectAnswers = result.incorrect_answers;
      
      scene.build(question, correctAnswer, incorrectAnswers);
      scene.handleClick();
    })
    .then(() => {
      document.getElementById('reboot').addEventListener('click', init);
      document.getElementById('destroy').addEventListener('click', destroy);
    });
}

function destroy() {
  document.getElementById('destroy').removeEventListener('click', destroy);

  scene.destroy();
  init();
}

document.addEventListener('DOMContentLoaded', init);