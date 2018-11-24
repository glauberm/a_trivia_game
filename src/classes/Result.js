class Result {
  constructor() {
    this.result = document.getElementById('result');
    this.resultInner = document.getElementById('result-inner');
    this.resultCore = document.getElementById('result-core');
    this.resultStatus = document.getElementById('result-status');
    this.resultQuestion = document.getElementById('result-question');
    this.resultText = document.getElementById('result-text');
    this.resultButton = document.getElementById('result-button');
    this.resultReboot = document.getElementById('result-reboot');
  }

  action(status, question, correctAnswer) {
    this.result.hidden = false;
    this.resultInner.classList.add('result__inner--active');
    this.resultCore.classList.add('result__core--active');
    this.resultQuestion.innerHTML = question;
    
    switch (status) {
    case 'correct':
      this.resultInner.classList.add('result--correct');
      this.resultStatus.innerText = 'Correct!';
      this.resultStatus.classList.add('result__status--correct');
      this.resultText.innerHTML = 'Your answer: ' + correctAnswer;
      this.resultButton.classList.add('result__button--correct');
      this.resultReboot.classList.add('result__reboot--correct');
      this.resultReboot.innerText = 'Go Again';
      break;
    case 'incorrect':
      this.resultInner.classList.add('result--incorrect');
      this.resultStatus.innerText = 'Incorrect!';
      this.resultStatus.classList.add('result__status--incorrect');
      this.resultText.innerHTML = 'Correct answer: ' + correctAnswer;
      this.resultButton.classList.add('result__button--incorrect');
      this.resultReboot.classList.add('result__reboot--incorrect');
      this.resultReboot.innerText = 'Try Again';
      break;
    default:
      this.resultInner.classList.add('result--timeout');
      this.resultInner.classList.add('result__inner--timeout');
      this.resultCore.classList.add('result__core--timeout');
      this.resultStatus.innerText = 'Time\'s up!';
      this.resultStatus.classList.add('result__status--timeout');
      this.resultText.innerHTML = 'Correct answer: ' + correctAnswer;
      this.resultButton.classList.add('result__button--timeout');
      this.resultReboot.classList.add('result__reboot--timeout');
      this.resultReboot.innerText = 'Try Again';
      break;
    }
  }

  cut() {
    this.result.hidden = true;
    this.resultInner.classList.remove('result__inner--active');
    this.resultInner.classList.remove('result__inner--timeout');
    this.resultInner.classList.remove('result--correct');
    this.resultInner.classList.remove('result--incorrect');
    this.resultInner.classList.remove('result--timeout');
    this.resultCore.classList.remove('result__core--active');
    this.resultCore.classList.remove('result__core--timeout');
    this.resultStatus.classList.remove('result__status--correct');
    this.resultStatus.classList.remove('result__status--incorrect');
    this.resultStatus.classList.remove('result__status--timeout');
    this.resultStatus.innerHTML = '';
    this.resultText.innerHTML = '';
    this.resultButton.classList.remove('result__button--correct');
    this.resultButton.classList.remove('result__button--incorrect');
    this.resultButton.classList.remove('result__button--timeout');
    this.resultReboot.classList.remove('result__reboot--correct');
    this.resultReboot.classList.remove('result__reboot--incorrect');
    this.resultReboot.classList.remove('result__reboot--timeout');
    this.resultReboot.innerHTML = '';
  }
}

export default Result;