import Scene from './classes/Scene';
import { request } from './services/Api';
import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  let scene = new Scene();
  const panelReboot = document.getElementById('panel-reboot');
  const resultReboot = document.getElementById('result-reboot');

  function boot() {
    request()
      .then((response) => {
        const result = response.results[0];

        scene.build(
          result.question,
          result.correct_answer,
          result.incorrect_answers);
        scene.handleClick();
      })
      .then(() => {
        panelReboot.addEventListener('click', reboot);
        resultReboot.addEventListener('click', reboot);
      });
  }

  function reboot() {
    panelReboot.removeEventListener('click', reboot);
    resultReboot.removeEventListener('click', reboot);

    scene.destroy();
    boot();
  }

  boot();
});