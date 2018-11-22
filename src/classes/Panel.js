import { shuffleArray } from '../services/Utils';
import Badge from './Badge';

class Panel {
  buildTitle(question) {
    document.getElementById('question').innerHTML = question;
  }

  buildAlternatives(correctAnswer, incorrectAnswers) {
    const alternatives = document.getElementsByClassName('panel__button');
    const alternativesArray = this
      .buildAlternativesArray(correctAnswer, incorrectAnswers);

    for (let i = 0; i < alternatives.length; i++) {
      alternatives[i].innerHTML = alternativesArray[i].alternative;
      alternatives[i].setAttribute('status', alternativesArray[i].status);
      // console.log(alternativesArray[i]);
    }

    const badge = new Badge();
    badge.build(alternativesArray);
  }

  buildAlternativesArray(correctAnswer, incorrectAnswers) {
    const alternativesArray = [];

    alternativesArray[0] = {
      status: 'correct',
      alternative: correctAnswer
    };

    for (let i = 0; i < incorrectAnswers.length; i++) {
      alternativesArray[i+1] = {
        status: 'incorrect',
        alternative: incorrectAnswers[i]
      };
    }
    
    return shuffleArray(alternativesArray);
  }
}

export default Panel;