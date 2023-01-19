"use strict";

// 1
let markMass = 78;
let johnMass = 95;
let markHeight = 1.69;
let johnHeight = 1.88;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;
let markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI, markBMI, johnBMI);

// 2
if (markBMI > johnBMI) {
  console.log("Mark's BMI is higher than John's!");
  console.log(`Mark's BMI (${markBMI}), is higher than John's (${johnBMI})`);
} else {
  console.log("john's BMI is higher than mark's!");
  console.log("john's BMI is higher than mark's!");
}
