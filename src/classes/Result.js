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
    
    if (status === 'correct') {
      this.resultInner.classList.add('result--correct');
      this.resultStatus.innerText = 'Correct!';
      this.resultStatus.classList.add('result__status--correct');
      this.resultText.innerHTML = 'Your answer: ' + correctAnswer;
      this.resultButton.classList.add('result__button--correct');
      this.resultReboot.classList.add('result__reboot--correct');
      this.resultReboot.innerText = 'Go Again';
    } else {
      this.resultInner.classList.add('result--incorrect');
      this.resultStatus.innerText = 'Incorrect!';
      this.resultStatus.classList.add('result__status--incorrect');
      this.resultText.innerHTML = 'Correct answer: ' + correctAnswer;
      this.resultButton.classList.add('result__button--incorrect');
      this.resultReboot.classList.add('result__reboot--incorrect');
      this.resultReboot.innerText = 'Try Again';
    }
  }

  cut() {
    this.result.hidden = true;
    this.resultInner.classList.remove('result--active');
    this.resultInner.classList.remove('result--correct');
    this.resultInner.classList.remove('result--incorrect');
    this.resultCore.classList.remove('result--active');
    this.resultStatus.classList.remove('result__status--correct');
    this.resultStatus.classList.remove('result__status--incorrect');
    this.resultStatus.innerHTML = '';
    this.resultText.innerHTML = '';
    this.resultButton.classList.remove('result__button--correct');
    this.resultButton.classList.remove('result__button--incorrect');
    this.resultReboot.classList.remove('result__reboot--correct');
    this.resultReboot.classList.remove('result__reboot--incorrect');
    this.resultReboot.innerHTML = '';
  }
}

export default Result;