import Panel from './Panel';

class Scene {
  build(question, correctAnswer, incorrectAnswers) {
    const panel = new Panel();
    panel.buildTitle(question);
    panel.buildAlternatives(correctAnswer, incorrectAnswers);
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
      
      cube.classList.add('cube__core--selected');
      wrapper.classList.add('cube__wrapper--selected');
      surface.classList.add('surface__core--selected');
      
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
    };

    for (let i = 0; i < panelButtons.length; i++) {
      panelButtons[i].addEventListener('click', handleSelect);
    } 
  }

  destroy() {
    const cube = document.getElementsByClassName('cube__core--selected');
    for (let i = 0; i < cube.length; i++) {
      cube[i].classList.remove('cube__core--selected');
    }
    const wrapper = document.getElementsByClassName('cube__wrapper--selected');
    for (let i = 0; i < wrapper.length; i++) {
      wrapper[i].classList.remove('wrapper__core--selected');
    }
    const surface = document.getElementsByClassName('surface__core--selected');
    for (let i = 0; i < surface.length; i++) {
      surface[i].classList.remove('surface__core--selected');
    }

    document.getElementById('scene').classList.remove('scene--paused');
    document.getElementById('wall').classList.remove('wall--active');
    document.getElementById('timer').classList.remove('timer--active');
    document.getElementById('light').classList.remove('light--active');
    document.getElementById('scene').classList.remove('scene--paused');
    document.getElementById('spotlight').classList.remove('spotlight--active');
    document.getElementById('surface').classList.remove('surface--active');
    document.getElementById('main').classList.remove('main--active');
    document.getElementById('main').scroll({ top: 0,  behavior: 'smooth' });
    document.getElementById('panel').classList.remove('panel--active');
    document.getElementById('shadow').classList.remove('shadow--active');
  }
}

export default Scene;