class Timer {
  constructor() {
    this.timer = document.getElementById('timer');
    this.timerBack = document.getElementById('timer-back');
    this.timerCore = document.getElementById('timer-core');
  }

  build(result, question, correctAnswer) {
    this.timer.classList.add('timer__wrapper--running');
    this.timerCore.classList.add('timer__core--running');
    this.timeout = setTimeout(() => {
      result.action('timeout', question, correctAnswer);
    }, 10000);
  }

  getTimeout() {
    return this.timeout;
  }

  action() {
    this.timer.classList.remove('timer__wrapper--running');
    this.timerBack.classList.add('timer__back--active');
    document.getElementById('timer-core').classList.add('timer__core--paused');
  }

  cut() {
    this.timer.classList.remove('timer__wrapper--running');
    this.timerBack.classList.remove('timer__back--active');
    this.timerCore.classList.remove('timer__core--paused');
    this.timerCore.classList.remove('timer__core--running');

    const newTimerCore = this.timerCore.cloneNode(true);
    this.timerCore.parentNode.replaceChild(newTimerCore, this.timerCore);

    clearTimeout(this.timeout);
  }
}

export default Timer;