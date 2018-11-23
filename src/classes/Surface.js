class Surface {
  action(core) {
    core.classList.add('surface__core--selected');
    document.getElementById('surface').classList.add('surface--active');
  }

  cut(core) {
    core.classList.remove('surface__core--selected');
    document.getElementById('surface').classList.remove('surface--active');
  }
}

export default Surface;