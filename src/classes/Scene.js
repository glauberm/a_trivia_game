import Panel from './Panel';
import Result from './Result';

class Scene {
  build(question, correctAnswer, incorrectAnswers) {
    this.question = question;
    this.correctAnswer = correctAnswer;

    const panel = new Panel();
    panel.buildTitle(this.question);
    panel.buildAlternatives(this.correctAnswer, incorrectAnswers);
  }

  handleClick() {
    const panelButtons = document.getElementsByClassName('panel__button');
    const handleSelect = (e) => {
      for (let i = 0; i < panelButtons.length; i++) {
        panelButtons[i].removeEventListener('click', handleSelect);
      }

      const cube = document.getElementById(e.target.getAttribute('cube'));
      const wrapper = cube.parentElement.parentElement;
      const surface = wrapper.parentElement.parentElement;
      const badge = cube.nextElementSibling;
      
      cube.classList.add('cube__core--selected');
      wrapper.classList.add('cube__wrapper--selected');
      surface.classList.add('surface__core--selected');
      badge.classList.add('badge--selected');
      
      document.getElementById('scene').classList.add('scene--paused');
      document.getElementById('wall').classList.add('wall--active');
      document.getElementById('timer').classList.add('timer--active');
      document.getElementById('light').classList.add('light--active');
      document.getElementById('scene').classList.add('scene--paused');
      document.getElementById('spotlight').classList.add('spotlight--active');
      document.getElementById('surface').classList.add('surface--active');
      document.getElementById('main').classList.add('main--active');
      document.getElementById('main').scroll({ top: 0,  behavior: 'smooth' });
      document.getElementById('panel').classList.add('panel--active');
      document.getElementById('shadow').classList.add('shadow--active');

      const result = new Result();
      result.build(e.target.getAttribute('status'), this.question, this.correctAnswer);
    };

    for (let i = 0; i < panelButtons.length; i++) {
      panelButtons[i].addEventListener('click', handleSelect);
    } 
  }

  destroy() {
    document.getElementById('question').innerHTML = 'Loading...';

    const panelButtons = document.getElementsByClassName('panel__button');
    for (let i = 0; i < panelButtons.length; i++) {
      panelButtons[i].removeAttribute('status');
      panelButtons[i].innerHTML = 'Loading...';
    }

    document.getElementById('footer').hidden = true;
    document.getElementById('result').classList.remove('result--active');
    document.getElementById('result').classList.remove('result--correct');
    document.getElementById('result').classList.remove('result--incorrect');
    document.getElementById('result-status').classList.remove('result__status--correct');
    document.getElementById('result-status').classList.remove('result__status--incorrect');
    document.getElementById('result-button').classList.remove('result__button--correct');
    document.getElementById('result-button').classList.remove('result__button--incorrect');
    document.getElementById('destroy').classList.remove('result__destroy--correct');
    document.getElementById('destroy').classList.remove('result__destroy--incorrect');
    document.getElementById('result-status').innerHTML = '';
    document.getElementById('result-text').innerHTML = '';
    document.getElementById('destroy').innerHTML = '';

    const cube = document.getElementsByClassName('cube__core--selected');
    for (let i = 0; i < cube.length; i++) {
      cube[i].classList.remove('cube__core--selected');
    }
    const wrapper = document.getElementsByClassName('cube__wrapper--selected');
    for (let i = 0; i < wrapper.length; i++) {
      wrapper[i].classList.remove('cube__wrapper--selected');
    }
    const surface = document.getElementsByClassName('surface__core--selected');
    for (let i = 0; i < surface.length; i++) {
      surface[i].classList.remove('surface__core--selected');
    }
    const badge = document.getElementsByClassName('badge--selected');
    for (let i = 0; i < badge.length; i++) {
      badge[i].classList.remove('badge--selected');
    }
      
    document.getElementById('scene').classList.remove('scene--paused');
    document.getElementById('wall').classList.remove('wall--active');
    document.getElementById('timer').classList.remove('timer--active');
    document.getElementById('light').classList.remove('light--active');
    document.getElementById('scene').classList.remove('scene--paused');
    document.getElementById('spotlight').classList.remove('spotlight--active');
    document.getElementById('surface').classList.remove('surface--active');
    document.getElementById('main').classList.remove('main--active');
    document.getElementById('panel').classList.remove('panel--active');
    document.getElementById('shadow').classList.remove('shadow--active');
  }
}

export default Scene;