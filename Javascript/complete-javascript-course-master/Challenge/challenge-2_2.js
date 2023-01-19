'use strict';
class BMI {
  constructor(name, mass, height) {
    this.name = name;
    this.mass = mass;
    this.height = height;
    this.bmi = mass / height ** 2;
  }
  get mass() {
    return this._mass;
  }
  set mass(value) {
    if (value < 0) {
      throw Error('No');
    }
    this._mass = value;
  }
  calbmi() {
    console.log(`${this.name}'s BMI is ${this.bmi}`);
  }
}
const mark = new BMI('Mark', 78, 1.69);
const john = new BMI('John', 92, 1.95);

function compare(a, b) {
  if (a.bmi > b.bmi) {
    console.log(
      `${a.name}'s BMI (${a.bmi}) is higher than ${b.name}'s (${b.bmi})`
    );
  } else {
    console.log(
      `${b.name}'s BMI (${b.bmi}) is higher than ${a.name}'s (${a.bmi})`
    );
  }
}

mark.calbmi();
john.calbmi();
compare(mark, john);
