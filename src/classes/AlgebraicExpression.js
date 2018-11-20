import Utils from './Utils';

class AlgebraicExpression {
  constructor(x = null, y = null, misleading = false) {
    this.operations = [
      this.addition, this.subtraction, this.multiplication, this.division
    ];
    this.x = x ? x : Utils.getRandomInt(-99, 100);

    if (misleading !== true) {
      this.y = y ? y : Utils.getRandomInt(-99, 100);
      this.operation = this.operations[Utils.getRandomInt(0, 4)];
    } else {
      this.y = Utils.getRandomInt(-49, 50);
      this.operation = this.operations[Utils.getRandomInt(0, 2)];
    } 
  }

  getExpression() {
    return this.operation(this.x, this.y).expression;
  }

  getResult() {
    return +this.operation(this.x, this.y).result.toFixed(2);
  }

  addition(x, y) {
    return {
      expression: x + ' + ' + y,
      result: x + y
    };
  }

  subtraction(x, y) {
    return {
      expression: x + ' − ' + y,
      result: x - y
    };
  }

  multiplication(x, y) {
    return {
      expression: x + ' × ' + y,
      result: x * y
    };
  }

  division(x, y) {
    return {
      expression: x + ' ÷ ' + y,
      result: x / y
    };
  }
}

export default AlgebraicExpression;