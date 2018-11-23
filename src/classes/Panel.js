import { shuffleArray } from '../services/Utils';
import Badge from './Badge';

class Panel {
  constructor(question, correctAnswer, incorrectAnswers) {
    this.panel = document.getElementById('panel');
    this.panelInner = document.getElementById('panel-inner');
    this.panelQuestion = document.getElementById('panel-question');
    this.panelQuestion.innerHTML = question;

    this.setAlternatives(correctAnswer, incorrectAnswers);
  }

  action() {
    this.panel.classList.add('panel--active');
    this.panelInner.classList.add('panel__inner--active');
  }

  cut() {
    this.panel.classList.remove('panel--active');
    this.panelInner.classList.remove('panel__inner--active');
    this.panelQuestion.innerHTML = 'Loading...';
  }

  cutButton(button) {
    button.removeAttribute('status');
    button.innerHTML = 'Loading...';
  }

  getButtons() {
    return document.getElementsByClassName('panel__button');
  }

  setAlternatives(correctAnswer, incorrectAnswers) {
    const alternativesArray = this
      .buildAlternativesArray(correctAnswer, incorrectAnswers);

    for (let i = 0; i < this.getButtons().length; i++) {
      this.getButtons()[i].innerHTML = alternativesArray[i].alternative;
      this.getButtons()[i].setAttribute('status', alternativesArray[i].status);
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