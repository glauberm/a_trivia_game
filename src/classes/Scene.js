import Panel from './Panel';
import Cube from './Cube';
import Wall from './Wall';
import Light from './Light';
import Timer from './Timer';
import Spotlight from './Spotlight';
import Shadow from './Shadow';
import Result from './Result';

class Scene {
  build(question, correctAnswer, incorrectAnswers) {
    this.question = question;
    this.correctAnswer = correctAnswer;

    this.panel = new Panel(this.question, this.correctAnswer, incorrectAnswers);
    this.panelButtons = this.panel.getButtons();

    this.cube = new Cube();
    this.wall = new Wall();
    this.light = new Light();
    this.spotlight = new Spotlight();
    this.shadow = new Shadow();
    this.result = new Result();

    this.timer = new Timer();
    this.timer.build(this.result, question, correctAnswer);
    this.timeout = this.timer.getTimeout();
  }

  destroy() {
    for (let i = 0; i < this.panelButtons.length; i++) {
      this.panel.cutButton(this.panelButtons[i]);
    }

    this.cut();
    this.wall.cut();
    this.timer.cut();
    this.light.cut();
    this.spotlight.cut();
    this.cube.cut();
    this.panel.cut();
    this.shadow.cut();
    this.result.cut();
  }

  handleClick() {
    const handleSelect = (e) => {
      for (let i = 0; i < this.panelButtons.length; i++) {
        this.panelButtons[i].removeEventListener('click', handleSelect);
      }

      this.action();
      this.wall.action();
      this.timer.action();
      this.light.action();
      this.spotlight.action();
      this.cube.action(e.target.getAttribute('cube'));
      this.panel.action();
      this.shadow.action();
      this.result.action(
        e.target.getAttribute('status'),
        this.question,
        this.correctAnswer);

      clearTimeout(this.timeout);
    };

    for (let i = 0; i < this.panelButtons.length; i++) {
      this.panelButtons[i].addEventListener('click', handleSelect);
    } 
  }

  action() {
    document.getElementById('scene').classList.add('scene--active');
  }

  cut() {
    document.getElementById('scene').classList.remove('scene--active');
  }
}

export default Scene;