class Result {
  build(status, question, correctAnswer) {
    document.getElementById('footer').hidden = false;
    document.getElementById('result').classList.add('result--active');
    document.getElementById('result-question').innerHTML = question;
    document.getElementById('result-text')
      .innerHTML = 'Correct answer: ' + correctAnswer;

    if (status === 'correct') {
      document.getElementById('result').classList.add('result--correct');
      document.getElementById('result-status').innerText = 'Correct!';
      document.getElementById('result-status').classList.add('result__status--correct');
      document.getElementById('result-button').classList.add('result__button--correct');
      document.getElementById('destroy').classList.add('result__destroy--correct');
      document.getElementById('destroy').innerText = 'Go Again';
    } else {
      document.getElementById('result').classList.add('result--incorrect');
      document.getElementById('result-status').innerText = 'Incorrect!';
      document.getElementById('result-status').classList.add('result__status--incorrect');
      document.getElementById('result-button').classList.add('result__button--incorrect');
      document.getElementById('destroy').classList.add('result__destroy--incorrect');
      document.getElementById('destroy').innerText = 'Try Again';
    }
  }
}

export default Result;