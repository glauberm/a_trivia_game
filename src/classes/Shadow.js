class Shadow {
  action() {
    document.getElementById('shadow').classList.add('shadow--active');
  }

  cut() {
    document.getElementById('shadow').classList.remove('shadow--active');
  }
}

export default Shadow;