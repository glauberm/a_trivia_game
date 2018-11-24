class Surface {
  constructor() {
    this.surface = document.getElementById('surface');
  }

  action(core) {
    core.classList.add('surface__core--selected');
    this.surface.classList.add('surface--active');
  }

  cut(core) {
    core.classList.remove('surface__core--selected');
    this.surface.classList.remove('surface--active');
  }
}

export default Surface;