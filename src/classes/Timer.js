class Timer {
  action() {
    document.getElementById('timer').classList.add('timer--active');
  }

  cut() {
    document.getElementById('timer').classList.remove('timer--active');
  }
}

export default Timer;