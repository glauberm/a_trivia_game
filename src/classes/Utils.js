class Utils {
  static getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomInt = Math.floor(Math.random() * (max - min)) + min;

    if (randomInt == 0) return this.getRandomInt(min, max);

    return randomInt;
  }
}

export default Utils;