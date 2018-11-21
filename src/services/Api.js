class Api {
  static async getRequest() {
    try {
      const url = 'https://opentdb.com/api.php?amount=1&category=9&type=multiple';
      
      const response = await fetch(url);
      if (response.ok === true) {
        return await response.json();
      } else {
        console.error(
          response.url +
          ' ' + response.status +
          ': ' + response.statusText
        );
      }
    }
    catch (error) {
      console.error(error);
    }
  }
}

export default Api;
