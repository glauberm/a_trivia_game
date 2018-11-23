class Badge {
  build(alternatives) {
    const letters = ['a', 'b', 'c', 'd'];

    for (let i = 0; i < alternatives.length; i++) {
      const badgeTop = document.getElementById('badge-top-' + letters[i]);
      const badgeBottom = document.getElementById('badge-bottom-' + letters[i]);

      badgeTop.classList.remove('badge__top--correct');
      badgeBottom.classList.remove('badge__bottom--correct');
      badgeTop.classList.remove('badge__top--incorrect');
      badgeBottom.classList.remove('badge__bottom--incorrect');

      if (alternatives[i].status === 'correct') {
        badgeTop.classList.add('badge__top--correct');
        badgeBottom.classList.add('badge__bottom--correct');
      } else {
        badgeTop.classList.add('badge__top--incorrect');
        badgeBottom.classList.add('badge__bottom--incorrect');
      }
    }
  }

  action(element) {
    element.classList.add('badge--selected');
  }

  cut(element) {
    element.classList.remove('badge--selected');
  }
}

export default Badge;