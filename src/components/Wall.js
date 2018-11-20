class Wall {
  constructor(correctExpression) {
    this.setTitle(correctExpression);
  }

  setTitle(correctExpression) {
    const documentTitle = document.title;
    const titleElement = document.getElementById('title');
    const title = correctExpression + ' = ?';

    document.title = title + ' • ' + documentTitle;
    titleElement.textContent = title;
  }
}

export default Wall;